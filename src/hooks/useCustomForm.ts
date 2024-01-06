import { useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  setId,
  setNickName,
  setPassword,
  setPasswordCheck,
} from "@/lib/module/signUpFormSlice";
import { emailValidation } from "@/util/util";

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
        dispatch(setNickName(inputState));
        return;
      case "id":
        inputState.validation = !emailValidation(value);
        dispatch(setId(inputState));
        return;
      case "password":
        dispatch(setPassword(inputState));
        return;
      default:
        dispatch(setPasswordCheck(inputState));
        return;
    }
  };

  return [state, handler];
};

export default useCustomForm;
