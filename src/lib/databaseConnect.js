import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster.f0ptrm6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster`;

export async function databaseConnect(collectionName) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();

  return client.db("PencilsProducts").collection(collectionName);
}

