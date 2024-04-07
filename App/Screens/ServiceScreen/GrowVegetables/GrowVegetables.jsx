import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Search from "../../../Components/Search";
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
    </View>
  );
};

export default GrowVegetables;
