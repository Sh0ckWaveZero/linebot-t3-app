import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
   
  } else {
    // const examples = await prisma.example.findMany();
    // res.status(200).json(examples);
    
    res.status(200).json({ message: 'Hello World' });
  }
};

export default examples;
