import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "app/hooks/useTheme";

import LoginScreen from "features/Auth/screens/login-screen";
import { AuthStackParamList } from "typescript/navigator";

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthStackContainer() {
  const { theme } = useTheme();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <AuthStack.Screen name="LOGIN" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}
