import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ListOfCars from "../screens/ListOfCars";
import CarDetails from "../screens/CarDetails";
import AddNewCar from "../screens/AddNewCar";

const Stack = createStackNavigator();
function MangeCars({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "List Of Cars",
          headerStyle: {
            backgroundColor: "#36747d",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        name="ListOfCars"
        component={ListOfCars}
      />
      <Stack.Screen
        options={{
          title: "Car Detail",
          headerStyle: {
            backgroundColor: "#36747d",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            // alignSelf: "center",
          },
        }}
        name="CarDetails"
        component={CarDetails}
      />
      <Stack.Screen
        options={{
          title: "Add New car",
          headerStyle: {
            backgroundColor: "#36747d",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            //alignSelf: "center",
          },
        }}
        name="AddNewCar"
        component={AddNewCar}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MangeCars;
