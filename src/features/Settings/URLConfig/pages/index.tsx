import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ConfigStackParamList } from "typescript/navigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "app/constants/colors";
import KEY_STACK from "app/constants/settings-keys-navigation";
import { globalTheme } from "theme/global-theme";
import { GLOBAL_STRINGS } from "app/constants/strings";

export type NetWorkProps = NativeStackScreenProps<
  ConfigStackParamList,
  typeof KEY_STACK.URL_CONFIG
>;

interface headerRightProps {
  onPress: () => void;
}

const HeaderRight = (props: headerRightProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        marginRight: 15,
      }}
    >
      <Ionicons name="qr-code-outline" size={20} color={colors.textSecondary} />
    </TouchableOpacity>
  );
};

export const URLConfigPage = ({ navigation }: NetWorkProps) => {
  const [URL, setURL] = useState<string>("");

  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    return status === "granted";
  };

  const goToQRScan = () => {
    if (!getBarCodeScannerPermissions()) {
      return;
    }

    navigation.navigate(KEY_STACK.QR_SCAN, {
      onScan: setURL,
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={goToQRScan} />,
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalTheme.globalPadding}>
          <Text style={globalTheme.label}>
            {GLOBAL_STRINGS.ADD_URL_OR_SCAN_QR}
          </Text>
          <TextInput
            placeholder={GLOBAL_STRINGS.URL}
            style={[
              globalTheme.inputField,
              {
                marginTop: 10,
              },
            ]}
            value={URL}
            onChangeText={(text) => setURL(text)}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
