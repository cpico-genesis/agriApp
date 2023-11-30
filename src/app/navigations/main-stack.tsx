import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "app/navigations/auth-stack";
import HomeStack from "app/navigations/home-stack";
import SettingStack from "app/navigations/setting-stack";
import { MainTabParamList } from "typescript/navigator";

import KEY_STACK from "app/constants/main-keys-navigation";
import { LoadingComponent } from "app/components/Loading";
import { useAuth } from "app/hooks/useAuth";
import { useTheme } from "app/hooks/useTheme";

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
  const { status } = useAuth();
  const { theme } = useTheme();

  if (status === "checking") return <LoadingComponent />;

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: theme.colors.background,
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
