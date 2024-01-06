import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

type signUpFormState = {
  value: string;
  validation: boolean;
};

const initialState = {
  nickname: {
    value: "",
    validation: false,
  },
  id: {
    value: "",
    validation: false,
  },
  password: {
    value: "",
    validation: false,
  },
  passwordCheck: {
    value: "",
    validation: false,
  },
};

const signUpFormSlice = createSlice({
  name: "signUpForm",
  initialState,
  reducers: {
    setNickName: (state, action: PayloadAction<signUpFormState>) => {
      state.nickname = action.payload;
    },
    setId: (state, action: PayloadAction<signUpFormState>) => {
      state.id = action.payload;
    },
    setPassword: (state, action: PayloadAction<signUpFormState>) => {
      state.password = action.payload;
    },
    setPasswordCheck: (state, action: PayloadAction<signUpFormState>) => {
      state.passwordCheck = action.payload;
    },
    resetSignUpForm: () => initialState,
  },
});

export const {
  setNickName,
  setId,
  setPassword,
  setPasswordCheck,
  resetSignUpForm,
} = signUpFormSlice.actions;
export const selectorSignUpForm = (state: RootState) => state.signUpForm;
export default signUpFormSlice.reducer;
