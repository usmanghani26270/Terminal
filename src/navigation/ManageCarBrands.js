import React, { useLayoutEffect, useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CarListItem from "../components/CarListItem";
function ManageCarBrands({ navigation }) {
  const CarBrands = [
    {
      id: 1,
      brand: "Acura: Honda Motor Company",
    },
    {
      id: 2,
      brand: "Honda: Honda Motor Co.",
    },
    {
      id: 3,
      brand: "Hyundai: Hyundai Motor Group",
    },
    {
      id: 4,
      brand: "Jaguar: Tata Motors",
    },
    {
      id: 5,
      brand: "Jeep: Stellantis",
    },
    {
      id: 6,
      brand: "Kia: Hyundai Motor Group",
    },
    {
      id: 7,
      brand: "Acura: Honda Motor Company",
    },
    {
      id: 8,
      brand: "Land Rover: Tata Motors",
    },
    {
      id: 9,
      brand: "BMW: BMW Group",
    },
    {
      id: 10,
      brand: "Dodge: Stellantis",
    },
    {
      id: 11,
      brand: "Ford: Ford Motor Co",
    },
  ];
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 20,
          fontSize: 30,
          textAlign: "center",
        }}
      >
        List Of Brands
      </Text>
      <ScrollView style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {CarBrands.map(({ id, brand }) => (
            <View
              style={{
                width: "90%",
                borderWidth: 2,
                height: 30,
                margin: 10,
                borderColor: "#36747d",
              }}
            >
              <Text style={styles.text}>{brand}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: "white",
    marginTop: 30,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
  },
});

export default ManageCarBrands;
