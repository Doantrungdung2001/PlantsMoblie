import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
const PageHeading = ({ title }) => {
  const navigation = useNavigation();
  return (
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
        <Text style={{ fontSize: 25, fontFamily: "RobotoCondensed-Bold" }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PageHeading;

const styles = StyleSheet.create({});
