import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { storeToken, removeToken } from "services/asyncStorageService";
import { database } from "./watermelon";
import authReducer from "./auth/slice";
import strings from "app/constants/strings";

const TypeActions = {
  LOGIN: "auth/login",
  LOGOUT: "auth/logout",
  VERIFY_CORREO: "auth/verifyCorreo",
};

const persistanceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action);

    const { type, payload } = action as { type: string; payload: RootState };
    if (type === TypeActions.LOGIN) {
      storeToken(payload.auth);
    }

    if (type === TypeActions.LOGOUT) {
      removeToken(strings.KEY_AUTH);
    }
  };

const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    const { type, payload } = action;
    const previousState = store.getState() as RootState;
    next(action);

    if (type === TypeActions.VERIFY_CORREO) {
      const { correo } = previousState.auth;
      console.log(correo);
    }
  };

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
