import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ManageCars from "./src/navigation/ManageCars";
import ManageCarBrands from "./src/navigation/ManageCarBrands";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
import { LogBox } from "react-native";
// LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#36747d",
          itemStyle: { marginVertical: 10 },
        }}
        initialRouteName="ManageCars"
      >
        <Drawer.Screen name="ManageCars" component={ManageCars} />
        <Drawer.Screen
          options={{
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: true,
            headerTitle: "List of Brands",
            headerStyle: { backgroundColor: "#36747d" },
          }}
          name="ManageCarBrand"
          component={ManageCarBrands}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
