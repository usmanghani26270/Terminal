import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { db } from "../../firebase";

import { View, StyleSheet } from "react-native";
function AddNewCar({ navigation }) {
  const [imageUrl, setImageUrl] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [manufactureYear, setManufactureYear] = useState("");
  const [enginePower, setEnginePower] = useState("");
  const [color, setColor] = useState("");

  const addCar = async () => {
    await db
      .collection("cars")
      .add({
        imageUrl: imageUrl,
        make: make,
        model: model,
        manufactureYear: manufactureYear,
        enginePower: enginePower,
        color: color,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <Text
          style={{
            marginBottom: 50,
            color: "#696969",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Add a new car
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Image URL"
            type="text"
            autoFocus
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
          <Input
            placeholder="Make e.g Toyota"
            type="text"
            value={make}
            onChangeText={(text) => setMake(text)}
          />
          <Input
            placeholder="Model e.g Corolla "
            type="text"
            value={model}
            onChangeText={(text) => setModel(text)}
          />
          <Input
            placeholder="Manufacturing Year e.g 2018"
            type="text"
            value={manufactureYear}
            onChangeText={(text) => setManufactureYear(text)}
          />
          <Input
            placeholder="Engine Power e.g 1600cc"
            type="text"
            value={enginePower}
            onChangeText={(text) => setEnginePower(text)}
          />
          <Input
            placeholder="Color e.g Grey"
            type="text"
            value={color}
            onChangeText={(text) => setColor(text)}
          />
        </View>
        <Button
          raised
          title="Add Car"
          buttonStyle={{ backgroundColor: "#36747d" }}
          onPress={addCar}
          containerStyle={{
            width: 300,
            marginTop: 30,
          }}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginTop: 30,
  },
  inputContainer: {
    width: 300,
  },
});

export default AddNewCar;
