"use client";
import Input from "@/components/Input/Input";
import { useRef } from "react";
import { signIn } from "@/api/auth/auth";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { useSelector } from "react-redux";
import { selectorSignForm } from "@/lib/module/signFormSlice";
import { emailValidation, inputValidation } from "@/util/util";
import { PostType, signInResponseType } from "@/types/apiTypes";
import { AUTH_KEYS } from "@/constant/keys.constant";
import { useRouter, useSearchParams } from "next/navigation";

const SignInForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectSignData = useSelector(selectorSignForm);
  const inputRefs = {
    id: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
  };

  const SignInMutationOption = {
    mutationFn: signIn,
    onSuccess: (res: signInResponseType) => {
      localStorage.setItem(AUTH_KEYS.LOCAL_STORAGE_KEY, JSON.stringify(res));
      alert("로그인 되었습니다.");
      router.push(`${searchParams.get("redirect")}`);
    },
  };
  const mutate = useCustomMutation<signInResponseType, PostType>(
    SignInMutationOption
  );

  const onSubmitSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !emailValidation(selectSignData.id.value) ||
      inputValidation(selectSignData.id.value)
    ) {
      inputRefs.id.current?.focus();
      alert("이메일 형식이 아닙니다.");
      return;
    }
    if (inputValidation(selectSignData.password.value)) {
      inputRefs.password.current?.focus();
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const signInData = {
      id: selectSignData.id.value,
      password: selectSignData.password.value,
    };
    mutate(signInData);
  };

  return (
    <form onSubmit={onSubmitSignIn}>
      <Input
        inputType={"text"}
        forwardPlaceHolder={"아이디를 입력해주세요."}
        validation={true}
        forwardRef={inputRefs.id}
        forwardType={"id"}
      />

      <Input
        inputType={"password"}
        forwardPlaceHolder={"비밀번호를 입력해주세요."}
        validation={true}
        forwardRef={inputRefs.password}
        forwardType={"password"}
      />
      <button type={"submit"}>로그인</button>
    </form>
  );
};

export default SignInForm;
