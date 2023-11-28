import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  Image,
} from "react-native";
import colors from "app/constants/colors";
import { GLOBAL_STRINGS } from "app/constants/strings";
const activityIcon = require("../../assets/icons/activityIcon.png");
const plantationIcon = require("../../assets/icons/plantationIcon.png");
const moduleIcon = require("../../assets/icons/moduleIcon.png");
const expenseIcon = require("../../assets/icons/expenseIcon.png");
const groupIcon = require("../../assets/icons/groupIcon.png");
const productIcon = require("../../assets/icons/productIcon.png");
const destinationIcon = require("../../assets/icons/destinationIcon.png");
const empleadosIcon = require("../../assets/icons/empleadosIcon.png");
const excavadora = require("../../assets/icons/excavadora.png");

export const Menu = [
  { name: GLOBAL_STRINGS.ACTIVITIES, icon: activityIcon },
  { name: GLOBAL_STRINGS.PLANTATION, icon: plantationIcon },
  { name: GLOBAL_STRINGS.MODULES, icon: moduleIcon },
  { name: GLOBAL_STRINGS.GASTOS_RUBROS, icon: expenseIcon },
  { name: GLOBAL_STRINGS.GROUP, icon: groupIcon },
  { name: GLOBAL_STRINGS.PRODUCTS, icon: productIcon },
  { name: GLOBAL_STRINGS.DESTINATIONS, icon: destinationIcon },
  { name: GLOBAL_STRINGS.EMPLOYEES, icon: empleadosIcon },
  { name: GLOBAL_STRINGS.MACHINIES, icon: excavadora },
];

interface MenuI {
  name: string;
  icon: any;
  color: string;
}

const DefinicionesScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <FlatList
        data={Menu}
        renderItem={({ item }) => (
          <View
            style={{
              margin: 10,
              paddingVertical: 10,
              paddingHorizontal: 20,
              position: "relative",
              width: "45%",
            }}
          >
            {item.icon && (
              <Image source={item.icon} style={{ width: 100, height: 100 }} />
            )}
            <Text
              style={{
                position: "absolute",
                color: "white",
                backgroundColor: "gray",
                borderRadius: 7,
                paddingHorizontal: 10,
                paddingVertical: 1,
                bottom: 5,
                right: 5,
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

export default DefinicionesScreen;

const styles = StyleSheet.create({});
