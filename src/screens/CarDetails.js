import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

function CarDetails({ navigation }) {
  const route = useRoute();
  const car = route.params.data;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: car.imageUrl }} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text style={styles.textStyle}>Make:</Text>
          <Text style={styles.textStyle}>{car.make}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textStyle}>Model:</Text>
          <Text style={styles.textStyle}>{car.model}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textStyle}>Manufacturing Year:</Text>
          <Text style={styles.textStyle}>{car.manufactureYear}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textStyle}>Engine Power:</Text>
          <Text style={styles.textStyle}>{car.enginePower}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textStyle}>Color:</Text>
          <Text style={styles.textStyle}>{car.color}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: "100%", height: "100%", resizeMode: "contain" },
  imageContainer: {
    width: "100%",
    height: "30%",
  },
  textContainer: {
    marginTop: 50,
  },
  textStyle: {
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 30,
  },
});

export default CarDetails;
