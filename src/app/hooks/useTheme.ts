import { useEffect, useState } from "react";
import { Appearance, AppState } from "react-native";
import { useAppDispatch, useAppSelector } from "app/hooks/store";
import {
  getThemeStorage,
  storeThemeStorage,
} from "services/asyncStorageServiceTheme";

import {
  setDarkTheme as setDarkThemeSlice,
  setLightTheme as setLightThemeSlice,
} from "app/store/ui/slice";

export const useTheme = () => {
  const { theme } = useAppSelector((state) => state.ui);
  const [value, setValue] = useState(false);

  const dispatch = useAppDispatch();

  const getTheme = async () => {
    const theme = await getThemeStorage();
    theme === "light" ? setLightTheme() : setDarkTheme();
    theme === "light" ? setValue(false) : setValue(true);
  };

  useEffect(() => {
    getTheme();
  }, []);

  useEffect(() => {
    AppState.addEventListener("change", (status) => {
      if (status === "active") {
        if (Appearance.getColorScheme() === "light") {
          setLightTheme();
          setValue(false);
        } else {
          setDarkTheme();
          setValue(true);
        }
      }
    });
  }, []);

  const setDarkTheme = () => {
    dispatch(setDarkThemeSlice());
  };

  const setLightTheme = () => {
    dispatch(setLightThemeSlice());
  };

  const toggleSwitch = () => {
    if (value) {
      setLightTheme();
      storeThemeStorage("light");
    } else {
      setDarkTheme();
      storeThemeStorage("dark");
    }
    setValue(!value);
  };

  return { setDarkTheme, setLightTheme, theme, value, toggleSwitch };
};
