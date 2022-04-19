// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from 'next/router';
import { MongoClient, WithId } from 'mongodb';

type comment = { id?: string; email?: string; name: string; text: string };

type Data = {
  message?: string;
  comments?: comment | comment[] | WithId<Document>[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const router = useRouter();

  const eventId = router.query.eventId;

  const client = await MongoClient.connect(
    'mongodb+srv://maryam:5XpACr50fst8AjPU@cluster0.odwod.mongodb.net/events?retryWrites=true&w=majority'
  );

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      name.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      id: eventId as string,
    };

    const db = client.db();

    const result = await db.collection('comments').insertOne(newComment);

    console.log(result);

    res.status(201).json({ message: 'Added comment.', comments: newComment });
  }

  if (req.method === 'GET') {
    const db = client.db();

    const documents = await db
      .collection('comments')
      .find()
      .sort({ _id: -1 })
      .toArray();
    res.status(201).json({ comments: documents as WithId<Document>[] });
  }

  client.close();
};

export default handler;
