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
    resetSignUpForm: () => initialState,
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
