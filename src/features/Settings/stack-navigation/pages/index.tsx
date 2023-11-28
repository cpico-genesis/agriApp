import colors from "app/constants/colors";
import { GLOBAL_STRINGS } from "app/constants/strings";
import { View, Text, ScrollView, StyleSheet, Switch } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ConfigStackParamList } from "typescript/navigator";
import KEY_STACK from "app/constants/settings-keys-navigation";

export const SettingStackPage = () => {
  const [value, setValue] = useState(false);

  const navigation = useNavigation<NavigationProp<ConfigStackParamList>>();

  const gotToConfigUrl = () => {
    navigation.navigate(KEY_STACK.URL_CONFIG);
  };

  return (
    <ScrollView
      style={{
        padding: 15,
      }}
    >
      <Container>
        <Item
          title={GLOBAL_STRINGS.CONFIG_CONECTION}
          icon="globe-outline"
          onPress={gotToConfigUrl}
        />
      </Container>
      <Container>
        <Item
          title={GLOBAL_STRINGS.DARK_MODE}
          icon="moon-outline"
          onPress={() => {
            setValue(!value);
          }}
          switch
          value={value}
        />
      </Container>
    </ScrollView>
  );
};

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const Container = (props: ContainerProps) => {
  return (
    <View
      style={{
        backgroundColor: colors.light,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
      }}
    >
      {props.children}
    </View>
  );
};

interface ItemProps {
  title: string;
  icon: any;
  onPress: () => void;
  value?: boolean;
  switch?: boolean;
}

const Item = (props: ItemProps) => {
  if (!props.switch) return <ItemWithNavigation {...props} />;

  return <ItemWithSwitch {...props} />;
};

const ItemWithNavigation = (props: ItemProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.itemContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name={props.icon} size={16} color={colors.textPrimary} />
          <Text style={styles.textItem}>{props.title}</Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={16}
          color={colors.textPrimary}
        />
      </View>
    </TouchableOpacity>
  );
};

const ItemWithSwitch = (props: ItemProps) => {
  return (
    <View style={[styles.itemContainer]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name={props.icon} size={16} color={colors.textPrimary} />
        <Text style={styles.textItem}>{props.title}</Text>
      </View>
      <Switch
        trackColor={{
          false: colors.textPrimary,
          true: colors.primary,
        }}
        thumbColor={colors.light}
        ios_backgroundColor={colors.light}
        onValueChange={props.onPress}
        value={props.value}
        style={{
          transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
          height: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  textItem: {
    marginLeft: 5,
    fontSize: 15,
    color: colors.textPrimary,
  },
});
