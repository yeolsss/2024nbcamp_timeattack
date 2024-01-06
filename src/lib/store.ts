import { configureStore } from "@reduxjs/toolkit";
import signUpForm from "./module/signFormSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { signUpForm },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
