import { NowRequest, NowResponse } from "@vercel/node"

export default async function handler(req: NowRequest, res: NowResponse) {
  try {
    res.json({ message: "Hello World!" })
  } catch (err) {
    console.error(err)
    res.status(400).end(err.message || "Something went wrong")
  }
}
