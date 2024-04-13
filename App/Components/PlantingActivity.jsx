import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Heading from "./Heading";
import { COLORS } from "../Constants";
data = [
  {
    density:
      "hàng x hàng 45cm, cây x cây 35cm, mật độ trồng 33.000-35.000 cây/ha.",
    description:
      "Trồng hai hàng kiểu nanh sấu, hàng x hàng 45cm, cây x cây 35cm, mật độ trồng 33.000-35.000 cây/ha.",
  },
];
const PlantingActivity = () => {
  return (
    <View>
      <View>
        <Heading text={"Hoạt động gieo trồng"} />
      </View>
      <View style={styles.detailInfo}>
        <Text style={styles.subject}>{data[0].density}</Text>
        <View style={styles.body}>
          <Text style={styles.bodyText}>{data[0].description}</Text>
        </View>
      </View>
    </View>
  );
};

export default PlantingActivity;

const styles = StyleSheet.create({
  detailInfo: {
    margin: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: COLORS.green,
    borderRadius: 10,
  },
  subject: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: COLORS.primary,
  },
  body: {
    marginTop: 5,
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
  },
  bodyText: {
    fontSize: 19,
    lineHeight: 24,
    color: "black",
    fontFamily: "Roboto-Medium"
  },
});
