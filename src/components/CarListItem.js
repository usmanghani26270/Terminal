import React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { auth, db } from "../../firebase";

function CarListItem({ data, id, key }) {
  const navigation = useNavigation();
  const itemId = id;

  const deleteCar = async (itemId) => {
    await db
      .collection("cars")
      .doc(itemId)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("CarDetails", { data: data })}
        style={styles.listItem}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: data.imageUrl,
            }}
          ></Image>
        </View>
        <View style={styles.textArea}>
          <Text style={{ fontSize: 25 }}>{data.make}</Text>
          <Text style={{ fontSize: 20 }}>{data.model}</Text>
        </View>
        <TouchableOpacity
          onPress={() => deleteCar(id)}
          style={{
            width: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="delete" color="black" size={30} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    height: 110,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "grey",
    //borderRadius: 20,
  },
  image: { width: "100%", height: "100%", resizeMode: "cover" },
  imageContainer: {
    width: "40%",
    height: "100%",
    marginRight: 30,
  },
  textArea: {
    width: "40%",
    height: "100%",
    marginTop: 30,
  },
});

export default CarListItem;
