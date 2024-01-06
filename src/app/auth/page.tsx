import SignUp from "@/components/signUp/SignUp";
import { SignIn } from "@/components/signIn/SignIn";

interface Props {
  searchParams: { type?: string };
}
const AuthPage = ({ searchParams }: Props) => {
  const { type } = searchParams;
  return (
    <>
      {type === "login" && <SignIn />}
      {type !== "login" && <SignUp />}
    </>
  );
};

export default AuthPage;
