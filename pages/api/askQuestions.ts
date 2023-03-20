import { collection, query } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
  const [prompt, chatId, model, session] = req.body;

  if(!prompt){}

  if(!chatId){}

  // ChatGPT Query
  const response = await query(
    prompt, chatId, model, session
  );

  res.status(200).json({name: "John Doe"});
}
