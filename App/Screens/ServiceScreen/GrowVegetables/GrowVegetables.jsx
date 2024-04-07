import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Search from "../../../Components/Search";
import ListFarmGrowVegetable from "./ListFarmGrowVegetable";

listfarm = [
  {
    image:
      "https://tse2.mm.bing.net/th?id=OIP.PFdxKFRtZ7SoktQE9ZqQBAHaD-&pid=Api&P=0&h=180",
    name: "Farm A",
    district: "Luong Quan Bang",
    distance: 17,
  },
  {
    image: "http://images3.alphacoders.com/190/190787.jpg",
    name: "Farm B",
    district: "Dinh Bo Linh",
    distance: 17,
  },
  {
    image:
      "http://cdn.onlyinyourstate.com/wp-content/uploads/2015/07/Barn-on-a-Hill.jpg",
    name: "Farm C",
    district: "Minh Khai",
    distance: 17,
  },
  {
    image: "https://wallpapercave.com/wp/wp7496728.jpg",
    name: "Farm D",
    district: "Le Duan",
    distance: 17,
  },

  {
    image:
      "https://tse2.mm.bing.net/th?id=OIP.PFdxKFRtZ7SoktQE9ZqQBAHaD-&pid=Api&P=0&h=180",
    name: "Farm E",
    district: "Luong Quan Bang",
    distance: 17,
  },
];

const GrowVegetables = () => {
  const param = useRoute().params;
  const navigation = useNavigation();
  useEffect(() => {
    console.log("category", param.category);
  }, []);
  return (
    <View>
      <View style={{ padding: 20, paddingTop: 40 }}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
          <Text style={{ fontSize: 25, fontFamily: "regular" }}>
            {param?.category}
          </Text>
        </TouchableOpacity>
      </View>

      <Search />

      <FlatList
        style={{ marginTop: 10 }}
        data={listfarm}
        renderItem={({ item, index }) => <ListFarmGrowVegetable farm={item} />}
      />
    </View>
  );
};

export default GrowVegetables;
