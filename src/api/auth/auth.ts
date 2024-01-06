import axios, { AxiosError } from "axios";
import { PostType, signInResponseType } from "@/types/apiTypes";

export const signUp = async (data: PostType) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/register`,
      data
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      throw new Error(axiosError.message);
    } else {
      throw error;
    }
  }
};

export const signIn = async (data: PostType): Promise<signInResponseType> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/login?expiresIn=10s`,
      data
    );
    return response.data;
  } catch (error) {
    // AxiosError 타입 확인
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      throw new Error(axiosError.message);
    } else {
      throw error;
    }
  }
};

export const userCheck = async (data: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user`,
      {
        headers: {
          Authorization: `Bearer ${data}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      throw new Error(axiosError.message);
    } else {
      throw error;
    }
  }
};
