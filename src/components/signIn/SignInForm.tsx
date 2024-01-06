"use client";
import Input from "@/components/Input/Input";
import { useRef } from "react";
import { signIn } from "@/api/auth/auth";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { useSelector } from "react-redux";
import {
  selectorSignForm,
  setId,
  setPassword,
} from "@/lib/module/signFormSlice";
import { emailValidation, inputValidation } from "@/util/util";
import { PostType, signInResponseType } from "@/types/apiTypes";
import { AUTH_KEYS } from "@/constant/keys.constant";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/hooks/useAppDispatch";

const SignInForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectSignData = useSelector(selectorSignForm);
  const dispatch = useAppDispatch();
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
      dispatch(
        setId({
          value: selectSignData.id.value,
          validation: true,
          message: "이메일 형식이 아닙니다.",
        })
      );
      alert("이메일 형식이 아닙니다.");
      return;
    }
    if (inputValidation(selectSignData.password.value)) {
      inputRefs.password.current?.focus();
      dispatch(
        setPassword({
          value: selectSignData.password.value,
          validation: true,
          message: "비밀번호를 입력해주세요.",
        })
      );
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
    <form
      onSubmit={onSubmitSignIn}
      className="mt-[20px] border flex flex-col items-center w-[70%] gap-[20px]"
    >
      <Input
        inputType={"text"}
        forwardPlaceHolder={"아이디를 입력해주세요."}
        validation={selectSignData.id.validation}
        forwardRef={inputRefs.id}
        forwardType={"id"}
        message={selectSignData.id.message}
      />

      <Input
        inputType={"password"}
        forwardPlaceHolder={"비밀번호를 입력해주세요."}
        validation={selectSignData.password.validation}
        forwardRef={inputRefs.password}
        forwardType={"password"}
        message={selectSignData.password.message}
      />
      <button
        type="submit"
        className="max-w-[50%] w-full h-[50px] bg-[#393F7B] text-white rounded-[5px] "
      >
        로그인
      </button>
    </form>
  );
};

export default SignInForm;
