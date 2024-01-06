import React, { RefObject } from "react";
import useCustomForm from "@/hook/useCustomForm";

interface Props {
  inputType: string;
  forwardPlaceHolder: string;
  validation?: boolean;
  forwardRef: RefObject<HTMLInputElement>;
  forwardType: string;
}
const Input = ({
  inputType,
  forwardPlaceHolder,
  validation,
  forwardRef,
  forwardType,
}: Props) => {
  const [value, onChangeHandler] = useCustomForm(forwardType);
  const validationInput = validation
    ? "::after-content-['올바른 이메일을 입력해주세요.']"
    : "";
  console.log("forwardType = ", forwardType);
  console.log("validation = ", validation);
  return (
    <input
      className={`p-5 border h-[60px] rounded-[10px] max-w-[50%] w-full p-[10px]::after-content-['올바른 이메일을 입력해주세요.']"`}
      type={inputType}
      placeholder={forwardPlaceHolder}
      value={value}
      onChange={onChangeHandler}
      ref={forwardRef}
    />
  );
};

export default React.memo(Input);
