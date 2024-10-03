import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  userLogin: {
    status: false,
    token: null,
    email: null,
    username: null,
    maxEmailLimit: 0,
    emailsSent: 0,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setUserLogin(state, action) {
      const { status, token, email, username, maxEmailLimit, emailsSent } =
        action.payload;
      state.userLogin.status = status;
      state.userLogin.token = token;
      state.userLogin.email = email;
      state.userLogin.username = username;
      state.userLogin.maxEmailLimit = maxEmailLimit;
      state.userLogin.emailsSent = emailsSent;
      return state;
    },
  },
});

export const { setUserLogin } = authSlice.actions;

export default authSlice.reducer;
