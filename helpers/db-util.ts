import { MongoClient, Sort } from 'mongodb';

export const connectDatabase = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://maryam:5XpACr50fst8AjPU@cluster0.odwod.mongodb.net/events?retryWrites=true&w=majority'
  );

  return client;
};

export const insertDocument = async (
  client: MongoClient,
  collection: string,
  document: { email: string }
) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
};

export const getAllDocuments = async (
  client: MongoClient,
  collection: string,
  sort: Sort
) => {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
};
