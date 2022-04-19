// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { WithId, ObjectId } from 'mongodb';

import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from 'helpers/db-util';

type comment = {
  eventId: string | string[];
  email?: string;
  name: string;
  text: string;
};

type Data = {
  message?: string;
  comment?: comment | comment[];
  comments?: WithId<Document>[] | any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    return;
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
      _id: new ObjectId('5b681f5b61020f2d8ad4768d'),
    };

    let result;

    try {
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: 'Added comment.', comment: newComment });
    } catch (error) {
      res.status(500).json({ message: 'Inserting comment failed!' });
    }
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'comments', { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed.' });
    }
  }

  client.close();
};

export default handler;
