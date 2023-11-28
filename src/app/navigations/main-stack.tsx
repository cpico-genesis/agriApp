import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";

import AuthStack from "app/navigations/auth-stack";
import HomeStack from "app/navigations/home-stack";
import SettingStack from "app/navigations/setting-stack";
import { MainTabParamList } from "typescript/navigator";
import { useAppSelector, useAppDispatch } from "app/hooks/store";
import { getToken } from "services/asyncStorageService";
import { login, setStatus } from "app/store/auth/slice";
import KEY_STACK from "app/constants/main-keys-navigation";
import { LoadingComponent } from "app/components/Loading";

/* 
    HOME STACK - protected
        Home Screen
    AUTH STACK - public
        Login Screen
    SETTINGS STACK - public
        Settings Screen
*/

const MainStack = createStackNavigator<MainTabParamList>();

export default function AuthStackContainer() {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const getAuthStatus = async () => {
    const auth = await getToken();
    if (auth) dispatch(login(auth));
    dispatch(setStatus("not-authenticated"));
  };

  useEffect(() => {
    getAuthStatus();
  }, []);

  if (status === "checking") return <LoadingComponent />;

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "white",
          },
          headerShown: false,
        }}
      >
        <MainStack.Screen name={KEY_STACK.AUTH_STACK} component={AuthStack} />
        <MainStack.Screen name={KEY_STACK.HOME_STACK} component={HomeStack} />
        <MainStack.Screen
          name={KEY_STACK.SETTINGS_STACK}
          component={SettingStack}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
