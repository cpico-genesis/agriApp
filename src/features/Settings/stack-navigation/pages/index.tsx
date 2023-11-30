import colors from "app/constants/colors";
import { GLOBAL_STRINGS } from "app/constants/strings";
import { View, Text, ScrollView, StyleSheet, Switch } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ConfigStackParamList } from "typescript/navigator";
import KEY_STACK from "app/constants/settings-keys-navigation";
import { useAppDispatch, useAppSelector } from "app/hooks/store";
import { useTheme } from "app/hooks/useTheme";

export const SettingStackPage = () => {
  const { toggleSwitch, value } = useTheme();

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
          onPress={toggleSwitch}
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
  const { theme } = useAppSelector((state) => state.ui);

  return (
    <View
      style={{
        backgroundColor: theme.colors.card,
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
  const { theme } = useAppSelector((state) => state.ui);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.itemContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name={props.icon} size={16} color={theme.colors.text} />
          <Text style={[styles.textItem, { color: theme.colors.text }]}>
            {props.title}
          </Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={16}
          color={theme.colors.text}
        />
      </View>
    </TouchableOpacity>
  );
};

const ItemWithSwitch = (props: ItemProps) => {
  const { theme } = useAppSelector((state) => state.ui);

  return (
    <View style={[styles.itemContainer]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name={props.icon} size={16} color={theme.colors.text} />
        <Text style={[styles.textItem, { color: theme.colors.text }]}>
          {props.title}
        </Text>
      </View>
      <Switch
        trackColor={{
          false: theme.colors.primary,
          true: theme.colors.background,
        }}
        thumbColor={theme.colors.border}
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
    paddingVertical: 7,
  },
  textItem: {
    marginLeft: 5,
    fontSize: 15,
  },
});
