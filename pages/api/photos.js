import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Create new home
  if (req.method === 'POST') {
    try {
      const { image, title, description, people, location, year } = req.body;
      const photo = await prisma.photos.create({
        data: { image, title, description, people, location, year },
      });
      res.status(200).json(photo);
    } catch {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader('Allow', ['POST']);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
