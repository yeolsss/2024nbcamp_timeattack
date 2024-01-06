import { configureStore } from "@reduxjs/toolkit";
import authConfig from "./module/authConfigSlice";
import signUpForm from "./module/signUpFormSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { authConfig, signUpForm },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
