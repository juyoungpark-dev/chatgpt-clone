import { serverTimestamp } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import query from "@/app/lib/queryApi";

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
  const response = await query(prompt, chatId, model);
  const message: Message = {
    text: response || "ChatGPT was unable to find an answer for that!",
    createdAt: serverTimestamp(),

  };
  res.status(200).json({name: "John Doe"});
}
