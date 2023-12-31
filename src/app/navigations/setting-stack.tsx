import { createStackNavigator } from "@react-navigation/stack";

import KEY_STACK from "app/constants/settings-keys-navigation";
import { ConfigStackParamList } from "typescript/navigator";
import { SettingStackPage } from "features/Settings/stack-navigation/pages";
import { GLOBAL_STRINGS } from "app/constants/strings";
import { URLConfigPage } from "features/Settings/URLConfig/pages";
import { QRScanPage } from "features/Settings/URLConfig/pages/QRScann";
import { useAppSelector } from "app/hooks/store";

const Stack = createStackNavigator<ConfigStackParamList>();

export default function SettingStackContainer() {
  const { theme } = useAppSelector((state) => state.ui);

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.background,
        },
        headerStyle: {
          backgroundColor: theme.colors.card,
        },
        headerTintColor: theme.colors.text,
      }}
    >
      <Stack.Screen
        name={KEY_STACK.INDEX}
        options={{
          title: GLOBAL_STRINGS.SETTINGS,
        }}
        component={SettingStackPage}
      />
      <Stack.Screen
        name={KEY_STACK.URL_CONFIG}
        options={{
          title: GLOBAL_STRINGS.CONFIG_CONECTION_ABB,
        }}
        component={URLConfigPage}
      />
      <Stack.Screen
        name={KEY_STACK.QR_SCAN}
        options={{
          headerShown: false,
        }}
        component={QRScanPage}
      />
    </Stack.Navigator>
  );
}
