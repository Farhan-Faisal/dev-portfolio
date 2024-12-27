require('dotenv').config();
const { Pinecone:PineconeClient } = require('@pinecone-database/pinecone');
const { Configuration, OpenAIApi } = require('openai');
const { 
    OPENAI_API_KEY, 
    PINECONE_API_KEY, 
    PINECONE_ENVIRONMENT, 
    PINECONE_INDEX_NAME, 
    EMBEDDING_MODEL 
} = process.env;

const readline = require('readline');
const pinecone = new PineconeClient();
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// ufhwiugjbn3gobn3bvbui4whvnliuw4vkjh5rnuiolgkjverngl2ioknv5owiulgn3owiujkrwbgn3o4iuwjk5nygiu
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

    if (!response || !response.matches) {
      throw new Error('Invalid response from Pinecone.');
    }

    return response.matches;
  } catch (error) {
    console.error('Error querying Pinecone:', error);
    throw error;
  }
};

const main = async () => {
  try {
    const pinecone = new PineconeClient({
        apiKey: PINECONE_API_KEY
    });
  
    console.log('Pinecone initialized successfully.');
    console.log('Generating embedding for your query...');
    
    const embedding = await getQueryEmbedding("skills of farhan");

    console.log('Querying Pinecone for similar vectors...');
    const results = await queryPinecone(embedding, 5); // Retrieve top 5 matches

    if (results.length === 0) {
      console.log('No matches found.');
    } else {
      console.log(`Top ${results.length} matches:`);
      results.forEach((match, index) => {
        console.log(`\nMatch ${index + 1}:`);
        console.log(`ID: ${match.id}`);
        console.log(`Score: ${match.score}`);
        if (match.metadata && match.metadata.text) {
          console.log(`Text: ${match.metadata.text}`);
        }
      });
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

// Invoke the main function
main();
