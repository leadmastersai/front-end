import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userBasics: {}, // Changed to object to store user details
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserDetail: (state, action) => {
      state.userBasics = { ...action.payload };
    },
  },
});

export const { saveUserDetail } = authSlice.actions;
export default authSlice.reducer;
