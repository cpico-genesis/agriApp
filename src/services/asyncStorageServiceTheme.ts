import AsyncStorage from "@react-native-async-storage/async-storage";
import { GLOBAL_STRINGS } from "app/constants/strings";
import { ThemeOptions } from "app/store/ui/slice";

export type valueOfKey = (typeof GLOBAL_STRINGS)["KEY_THEME"];

const storeThemeStorage = async (value: ThemeOptions) => {
  try {
    await AsyncStorage.setItem(GLOBAL_STRINGS.KEY_THEME, value);
  } catch (error) {
    console.log(error);
  }
};

const getThemeStorage = async () => {
  try {
    const token = await AsyncStorage.getItem(GLOBAL_STRINGS.KEY_THEME);
    if (token !== null) {
      return token as ThemeOptions;
    }
  } catch (error) {
    console.log(error);
  }
};

const removeThemeStorage = async (value: valueOfKey) => {
  try {
    await AsyncStorage.removeItem(value);
  } catch (error) {
    console.log(error);
  }
};

export { storeThemeStorage, getThemeStorage, removeThemeStorage };
