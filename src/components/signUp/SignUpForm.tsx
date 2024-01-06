"use client";
import Input from "@/components/Input/Input";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  resetSignUpForm,
  selectorSignForm,
  setId,
  setNickName,
  setPassword,
  setPasswordCheck,
} from "@/lib/module/signFormSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { emailValidation, inputValidation } from "@/util/util";
import { signUp } from "@/api/auth/auth";
import { useCustomMutation } from "@/hooks/useCustomMutation";

export const SignUpForm = () => {
  // form data
  const selectSignUpForm = useSelector(selectorSignForm);
  const { nickname, id, password, passwordCheck } = selectSignUpForm;
  const dispatch = useAppDispatch();

  const signUpMutationOption = {
    mutationFn: signUp,
    onSuccess: () => {
      alert("회원가입 성공");
    },
  };
  const mutate = useCustomMutation(signUpMutationOption);

  // validation에 사용할 ref
  const inputRefs = {
    nickname: useRef<HTMLInputElement>(null),
    id: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
    passwordCheck: useRef<HTMLInputElement>(null),
  };

  const onSubmitSignUpHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 이메일 형식 check
    if (!emailValidation(id.value) || inputValidation(id.value)) {
      dispatch(
        setId({
          value: id.value,
          validation: true,
        })
      );
      alert("이메일 형식이 올바르지 않습니다.");
      inputRefs.id.current?.focus();
      return;
    }

    // 다른 input 빈값 check
    if (inputValidation(nickname.value)) {
      dispatch(
        setNickName({
          value: nickname.value,
          validation: true,
        })
      );
      alert("닉네임을 입력해주세요.");
      inputRefs.nickname.current?.focus();
      return;
    }
    if (inputValidation(password.value)) {
      dispatch(
        setPassword({
          value: password.value,
          validation: true,
        })
      );
      alert("비밀번호를 입력해주세요.");
      inputRefs.password.current?.focus();
      return;
    }

    if (inputValidation(passwordCheck.value)) {
      dispatch(
        setPasswordCheck({
          value: passwordCheck.value,
          validation: true,
        })
      );
      alert("비밀번호를 입력해주세요.");
      inputRefs.passwordCheck.current?.focus();
      return;
    }

    if (passwordCheck.value !== password.value) {
      dispatch(
        setPasswordCheck({
          value: passwordCheck.value,
          validation: true,
        })
      );
      alert("비밀번호가 일치하지 않습니다.");
      inputRefs.passwordCheck.current?.focus();
      return;
    }

    // 회원가입 로직 start
    const signUpData = {
      nickname: nickname.value,
      id: id.value,
      password: password.value,
    };
    mutate(signUpData);
  };

  useEffect(() => {
    return () => {
      dispatch(resetSignUpForm());
    };
  }, []);

  return (
    <form
      className="flex flex-col gap-[20px] items-center mt-[50px]"
      onSubmit={onSubmitSignUpHandler}
    >
      <Input
        inputType={"text"}
        forwardPlaceHolder={"닉네임을 입력해주세요."}
        forwardRef={inputRefs.nickname}
        forwardType={"nickname"}
        validation={nickname.validation}
      />
      <Input
        inputType={"text"}
        forwardPlaceHolder={"이메일을 입력해주세요."}
        forwardRef={inputRefs.id}
        forwardType={"id"}
        validation={id.validation}
      />
      <Input
        inputType={"password"}
        forwardPlaceHolder={"비밀번호를 입력해주세요."}
        forwardRef={inputRefs.password}
        forwardType={"password"}
        validation={password.validation}
      />
      <Input
        inputType={"password"}
        forwardPlaceHolder={"비밀번호를 다시 입력해주세요."}
        forwardRef={inputRefs.passwordCheck}
        forwardType={"passwordCheck"}
        validation={passwordCheck.validation}
      />
      <button
        type="submit"
        className="max-w-[50%] w-full h-[50px] bg-[#393F7B] text-white rounded-[5px] "
      >
        회원가입
      </button>
    </form>
  );
};
