import { configureStore } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import authReducer from "./auth";

const PERSISTED_KEYS = ["auth"];

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: load({ states: PERSISTED_KEYS }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(save({ states: PERSISTED_KEYS })),
});

export default store;
