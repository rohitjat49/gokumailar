import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  userLogin: {
    status: false,
    token: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setUserLogin(state, action) {
      const { status, token } = action.payload;
      state.userLogin.status = status;
      state.userLogin.token = token;
      return state;
    },
  },
});

export const { setUserLogin } = authSlice.actions;

export default authSlice.reducer;
