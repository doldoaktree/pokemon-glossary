import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: "Hello from Next.js!" });
}

// async function getHelloAPI(){
//  return "Hello API"
// }
// export default async function handler(

//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const result = await getHelloAPI()
//     res.status(200).send({ result })
//   } catch (err) {
//     res.status(500).send({ error: 'failed to fetch data' })
//   }
// }
