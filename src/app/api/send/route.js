import { NextResponse } from "next/server";
import { Resend } from "resend";



export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
 
    return NextResponse.json(email);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
