import axios from "axios";
import { PostType } from "@/types/apiTypes";

export const signUp = async (data: PostType) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/register`,
    data
  );
  return response.data.json();
};
