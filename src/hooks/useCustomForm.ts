import { useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  setId,
  setNickName,
  setPassword,
  setPasswordCheck,
} from "@/lib/module/signFormSlice";
import { emailValidation, inputValidation } from "@/util/util";

type returnType = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];
const useCustomForm = (forwardType: string): returnType => {
  const [state, setState] = useState<string>("");
  const dispatch = useAppDispatch();
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setState(value);
    const inputState = {
      value,
      validation: false,
    };
    switch (forwardType) {
      case "nickname":
        inputState.validation = inputValidation(value);
        dispatch(setNickName(inputState));
        return;
      case "id":
        inputState.validation = !emailValidation(value);
        dispatch(setId(inputState));
        return;
      case "password":
        inputState.validation = inputValidation(value);
        dispatch(setPassword(inputState));
        return;
      default:
        inputState.validation = inputValidation(value);
        dispatch(setPasswordCheck(inputState));
        return;
    }
  };

  return [state, handler];
};

export default useCustomForm;
