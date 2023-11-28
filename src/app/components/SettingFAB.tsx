import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "app/constants/colors";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  onPress: () => void;
}

export const SettingFAB = ({ onPress }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          top,
        },
      ]}
    >
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <Ionicons name="cog-outline" size={24} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 20,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
