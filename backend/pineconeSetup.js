require('dotenv').config();
const { Pinecone:PineconeClient } = require('@pinecone-database/pinecone');
const { Configuration, OpenAIApi } = require('openai');
const { v4: uuidv4 } = require('uuid');
const chunks = require('./processor');

const { OPENAI_API_KEY, PINECONE_API_KEY, PINECONE_ENVIRONMENT, PINECONE_INDEX_NAME } = process.env;

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

  
async function initPinecone() {
  try {
    const pinecone = new PineconeClient({
      apiKey: PINECONE_API_KEY
    });

    console.log('Pinecone client initialized successfully.');
    return pinecone;

  } catch (error) {
    console.error('Error initializing Pinecone Client:', error);
    throw new Error('Failed to initialize Pinecone Client');
  }
}

async function getEmbedding(text) {
    try {
      const response = await openai.createEmbedding({
        model: 'text-embedding-ada-002',
        input: text,
      });
      const embedding = response.data.data[0].embedding;
      return embedding;
    } catch (error) {
      console.error('❌ Failed to generate embedding:', error.response ? error.response.data : error.message);
    }
}

async function upsertChunksToPinecone() {
    const pinecone = await initPinecone();
    const index = pinecone.Index(PINECONE_INDEX_NAME);
  
    const upsertData = await Promise.all(chunks.map(async (chunk) => {
        const id = uuidv4();
        const embedding = await getEmbedding(chunk);
        return {
            id,
            values: embedding,
            metadata: {
                text: chunk,
            },
        }
    }));
  
    try {
    //   console.log(upsertData);
      const response = await index.upsert(
        upsertData
      );
  
      console.log(`✅ Successfully upserted ${upsertData.length} vectors to Pinecone.`);
    } catch (error) {
      console.error('❌ Failed to upsert vectors to Pinecone:', error);
    }
}

upsertChunksToPinecone()
 