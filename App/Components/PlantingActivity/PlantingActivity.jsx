import { Text, View } from "react-native";
import React from "react";
import styles from "./Planting.Styles";
planting = [
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
      <View style={styles.detailInfo}>
        <Text style={styles.subject}>{planting[0].density}</Text>
        <View style={styles.body}>
          <Text style={styles.bodyText}>{planting[0].description}</Text>
        </View>
      </View>
    </View>
  );
};

export default PlantingActivity;
