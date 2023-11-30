import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "@react-navigation/native";

export type ThemeOptions = "light" | "dark";

export interface ThemeState extends Theme {
  currentTheme: ThemeOptions;
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: "light",
  dark: false,
  dividerColor: "rgba(0,0,0, 0.6)",
  colors: {
    primary: "#3d51b3",
    background: "white",
    card: "#E9E9EF",
    text: "#333333",
    border: "white",
    notification: "teal",
  },
};

export const darkTheme: ThemeState = {
  currentTheme: "dark",
  dark: true,
  dividerColor: "rgba(255,255,255, 0.6)",
  colors: {
    primary: "#3d51b3",
    background: "#000000",
    card: "#222831",
    text: "#FFFFFF",
    border: "#DDDDDD",
    notification: "teal",
  },
};

export interface UI {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

const initialState = {
  theme: lightTheme,
} as UI;

export const uiSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setDarkTheme(state) {
      state.theme = darkTheme;
    },
    setLightTheme(state) {
      state.theme = lightTheme;
    },
  },
});

export default uiSlice.reducer;

export const { setDarkTheme, setLightTheme } = uiSlice.actions;
