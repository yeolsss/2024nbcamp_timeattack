import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const POST = async (req: NextRequest) => {
  console.log("Post start ===============");
  const data = await req.json();
  try {
    const signup = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/register`,
      data
    );
    return NextResponse.json(signup.data);
  } catch (error) {
    return NextResponse.error();
  }
};
