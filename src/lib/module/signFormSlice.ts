import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

type signUpFormState = {
  value: string;
  validation: boolean;
  message: string;
};

const initialState = {
  nickname: {
    value: "",
    validation: false,
    message: "",
  },
  id: {
    value: "",
    validation: false,
    message: "",
  },
  password: {
    value: "",
    validation: false,
    message: "",
  },
  passwordCheck: {
    value: "",
    validation: false,
    message: "",
  },
};

const signFormSlice = createSlice({
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
    resetSignUpForm: (state) => (state = initialState),
  },
});

export const {
  setNickName,
  setId,
  setPassword,
  setPasswordCheck,
  resetSignUpForm,
} = signFormSlice.actions;
export const selectorSignForm = (state: RootState) => state.signUpForm;
export default signFormSlice.reducer;
