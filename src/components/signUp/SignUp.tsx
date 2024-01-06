"use client";
import { SignUpForm } from "@/components/signUp/SignUpForm";
import { useSearchParams } from "next/navigation";
import { INPUT_USING_TYPE } from "@/constant/keys.constant";
import { SignLink } from "@/components/signUpLink/SignLink";

const SignUp = () => {
  const searchParams = useSearchParams();
  return (
    <section className="w-[1000px] m-auto ">
      <h1 className="text-center text-[24px]">회원 가입</h1>
      <SignUpForm />
      <SignLink type={INPUT_USING_TYPE} />
    </section>
  );
};
export default SignUp;
