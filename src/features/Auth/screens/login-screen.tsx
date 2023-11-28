import {
  Text,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import KEY_STACK from "app/constants/main-keys-navigation";
import { useNavigation } from "@react-navigation/native";
import { globalTheme } from "theme/global-theme";
import useLogin from "features/Auth/hooks/useLogin";
import colors from "app/constants/colors";
import { GLOBAL_STRINGS } from "app/constants/strings";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Logo } from "app/components/Logo";
import { SettingFAB } from "app/components/SettingFAB";
import { MainTabParamList } from "typescript/navigator";

export const LoginScreen = () => {
  const { correo, onChangeCorreo, handleCorreo } = useLogin();
  const navigation = useNavigation<NavigationProp<MainTabParamList>>();

  const goToSettings = () => {
    navigation.navigate(KEY_STACK.SETTINGS_STACK);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalTheme.formContainer}>
          <SettingFAB onPress={goToSettings} />

          <Logo />

          <Text style={globalTheme.title}>{GLOBAL_STRINGS.APP_NAME}</Text>

          <Text style={globalTheme.label}>{GLOBAL_STRINGS.USER}:</Text>
          <TextInput
            placeholder={GLOBAL_STRINGS.USER_ENTER}
            underlineColorAndroid={colors.gray}
            style={[
              globalTheme.inputField,
              Platform.OS === "ios" && globalTheme.inputFieldIOS,
            ]}
            selectionColor={colors.primary}
            onChangeText={onChangeCorreo}
            value={correo}
            autoComplete="username"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={globalTheme.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              disabled={!correo}
              style={[globalTheme.button, , !correo && { opacity: 0.6 }]}
              onPress={handleCorreo}
            >
              <Text style={globalTheme.buttonText}>
                {GLOBAL_STRINGS.LOGIN_BUTTON}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
