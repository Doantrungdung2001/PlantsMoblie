import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Heading from "./Heading";
data = {
  density:
    "hàng x hàng 45cm, cây x cây 35cm, mật độ trồng 33.000-35.000 cây/ha.",
  description:
    "Trồng hai hàng kiểu nanh sấu, hàng x hàng 45cm, cây x cây 35cm, mật độ trồng 33.000-35.000 cây/ha.",
};
const PlantingActivity = () => {
  return (
    <ScrollView>
      <View>
        <Heading text={"Hoạt động gieo trồng"} />
      </View>
    </ScrollView>
  );
};

export default PlantingActivity;

const styles = StyleSheet.create({});
