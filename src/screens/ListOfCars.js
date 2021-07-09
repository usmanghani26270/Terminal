import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { auth, db } from "../../firebase";

import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import CarListItem from "../components/CarListItem";

function ListOfCars({ navigation }) {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("cars").onSnapshot((snapshot) =>
      setCarsData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return unsubscribe;
  }, []);

  console.log(carsData);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "List Of Cars",
      headerStyle: { backgroundColor: "#36747d" },
      headerTitleStyle: { color: "white", marginLeft: 100 },
      headerTintColor: "white",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            //activeOpacity={0.5}
          >
            <SimpleLineIcons name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            marginRight: 20,
            width: 80,
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("AddNewCar")}
          >
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const cars = [
    {
      imageUrl: "",
      model: "Corolla",
      make: "Toyota",
      id: "1",
    },
    {
      imageUrl: "",
      model: "Civic",
      make: "Honda",
      id: "2",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {carsData.map(({ id, data }) => (
        <CarListItem key={id} id={id} data={data} />
      ))}
      {/* <FlatList
        style={styles.flatList}
        keyExtractor={(item) => item.id}
        data={cars}
        renderItem={({ item }) => <CarListItem data={item} />}
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    marginTop: 30,
  },
  flatList: {},
});

export default ListOfCars;
