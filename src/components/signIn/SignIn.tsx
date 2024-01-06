import SignInForm from "@/components/signIn/SignInForm";
import { SignLink } from "@/components/signUpLink/SignLink";

export const SignIn = () => {
  return (
    <div className="max-w-[1000px] m-auto w-full flex flex-col items-center">
      <h1 className="text-center text-[24px]">로그인</h1>
      <SignInForm />
      <hr />
      <SignLink />
    </div>
  );
};
