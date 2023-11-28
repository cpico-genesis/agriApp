import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ConfigStackParamList } from "typescript/navigator";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "app/constants/colors";
import { BarCodeScanner } from "expo-barcode-scanner";
import KEY_STACK from "app/constants/settings-keys-navigation";

interface headerRightProps {
  onPress: () => void;
}

export type QRScanProps = NativeStackScreenProps<
  ConfigStackParamList,
  typeof KEY_STACK.QR_SCAN
>;

export const QRScanPage = ({ route }: QRScanProps) => {
  const {
    params: { onScan },
  } = route;
  const [scanning, setScanning] = useState(false);

  const getBarCodeScannerPermissions = async () => {}

  return (
    <View
      style={{
        backgroundColor: colors.black,
      }}
    >
      <BarCodeScanner
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
};
