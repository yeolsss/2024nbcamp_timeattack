import React, { RefObject } from "react";
import useCustomForm from "@/hooks/useCustomForm";

interface Props {
  inputType: string;
  forwardPlaceHolder: string;
  validation?: boolean;
  forwardRef: RefObject<HTMLInputElement>;
  forwardType: string;
  usingType?: string;
  message?: string;
}
const Input = ({
  inputType,
  forwardPlaceHolder,
  validation,
  forwardRef,
  forwardType,
  usingType = "",
  message = "",
}: Props) => {
  const [value, onChangeHandler] = useCustomForm(forwardType);
  return (
    <div className="relative flex flex-col w-full items-center">
      <input
        className={` 
           border h-[60px] rounded-[10px] max-w-[50%] w-full p-[10px] outline-none mb-[5px]
        ${validation && `border-pink-700`}`}
        type={inputType}
        placeholder={forwardPlaceHolder}
        value={value}
        onChange={onChangeHandler}
        ref={forwardRef}
      />

      {validation && (
        <span
          className={`absolute bottom-[-10px] ${
            usingType === "" ? "left-[180px]" : "left-[250px]"
          } text-pink-700 text-[12px]`}
        >
          {message}
        </span>
      )}
    </div>
  );
};

export default React.memo(Input);
