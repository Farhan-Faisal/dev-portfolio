require('dotenv').config();
const { Pinecone:PineconeClient } = require('@pinecone-database/pinecone');
const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { 
    OPENAI_API_KEY, 
    PINECONE_API_KEY, 
    PINECONE_INDEX_NAME, 
    EMBEDDING_MODEL 
} = process.env;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());



const pinecone = new PineconeClient({
    apiKey: PINECONE_API_KEY
});

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const getQueryEmbedding = async (query) => {
    try {
      const response = await openai.createEmbedding({
        model: EMBEDDING_MODEL,
        input: query,
      });
  
      const embedding = response.data.data[0].embedding;
  
      if (!embedding || !Array.isArray(embedding)) {
        throw new Error('Invalid embedding data.');
      }
  
      return embedding;
    } catch (error) {
      console.error('Error generating embedding:', error);
    }
};

const queryPinecone = async (embedding, topK = 5) => {
    try {
      const index = pinecone.Index(PINECONE_INDEX_NAME);
  
      const queryRequest = {
        vector: embedding,
        topK: topK,
        includeMetadata: true
      };
  
      const response = await index.query(queryRequest);
      return response.matches;
    } catch (error) {
      console.error('Error querying Pinecone:', error);
      throw error;
    }
};

  
app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({ error: 'No message provided.' });
    }

    console.log(`Received message: ${userMessage}`);

    const embedding =  await getQueryEmbedding(userMessage);
    const queryResult = await queryPinecone(embedding);

    if (!queryResult) {
      throw new Error('Invalid response from Pinecone.');
    }

    const context = queryResult.map((match) => match.metadata.text).join('\n');
    const prompt = `You are an AI assistant. Use the following information to answer the question.\n\n${context}\n\nUser Question: ${userMessage}\nAI Answer:`
    console.log(prompt);

    // Generate response using OpenAI's GPT with the retrieved context
    const gptResponse = await openai.createCompletion({
      model: 'gpt-3.5-turbo-instruct',
      prompt: prompt,
      max_tokens: 150,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['\n', 'User Question:', 'AI Answer:'],
    });

    const aiAnswer = gptResponse.data.choices[0].text.trim();
    res.json({ answer: aiAnswer });

  } catch (error) {
    console.error('Error in /chat endpoint:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
