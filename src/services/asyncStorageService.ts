import AsyncStorage from "@react-native-async-storage/async-storage";
import { GLOBAL_STRINGS } from "app/constants/strings";
import { Auth } from "app/store/auth/slice";

export type valueOfKey = (typeof GLOBAL_STRINGS)["KEY_AUTH"];

const storeToken = async (value: Auth) => {
  try {
    await AsyncStorage.setItem(GLOBAL_STRINGS.KEY_AUTH, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(GLOBAL_STRINGS.KEY_AUTH);
    if (token !== null) {
      return JSON.parse(token) as Auth;
    }
  } catch (error) {
    console.log(error);
  }
};

const removeToken = async (value: valueOfKey) => {
  try {
    await AsyncStorage.removeItem(value);
  } catch (error) {
    console.log(error);
  }
};

export { storeToken, getToken, removeToken };
