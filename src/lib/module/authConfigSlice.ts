import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

const initialState = {};
const authConfigSlice = createSlice({
  name: "authConfig",
  initialState,
  reducers: {},
});

export const {} = authConfigSlice.actions;
export const selectorAuthConfig = (state: RootState) => state.authConfig;
export default authConfigSlice.reducer;
