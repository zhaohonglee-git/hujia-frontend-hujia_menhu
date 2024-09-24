import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from GET API Hello!' });
}


export async function POST(req) {
  const {message} = req.body
  return NextResponse.json({ message: 'Hello from GET API Hello POST!{message}' });
  console.log(message)
}

// export default function handler(req, res) {
//     if (req.method === 'GET') {
//       res.status(200).json({ text: 'Hello from the API!' });
//     } else {
//       res.status(405).json({ message: 'Method not allowed' });
//     }
//   }