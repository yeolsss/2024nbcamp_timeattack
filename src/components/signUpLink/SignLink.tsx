"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  type?: string;
}
export const SignLink = ({ type = "" }: Props) => {
  const searchParams = useSearchParams();
  return (
    <>
      <div className="flex justify-center items-center gap-[10px] mt-[20px]">
        {type === "SIGNUP" ? (
          <p>아직 회원이 아니신가요?</p>
        ) : (
          <p>이미 회원이신가요?</p>
        )}

        <Link
          href={`/auth/?type=${
            type === "SIGNUP" ? "login" : "signUp"
          }&redirect=${searchParams.get("redirect")}`}
          className="text-[#393F7B]"
        >
          {type === "SIGNUP" ? <p>로그인</p> : <p>회원가입</p>}
        </Link>
      </div>
    </>
  );
};
