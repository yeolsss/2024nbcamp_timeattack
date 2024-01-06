import { SignUpForm } from "@/components/signUp/SignUpForm";
import Link from "next/link";

const SignUp = () => {
  return (
    <section className="w-[1000px] m-auto bg-amber-200">
      <h1 className="text-center text-[24px]">회원 가입</h1>
      <SignUpForm />
      <Link href={"/auth/?type=login"}>
        <p>로그인</p>
      </Link>
    </section>
  );
};
export default SignUp;
