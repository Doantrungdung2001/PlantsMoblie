import { Text, View } from "react-native";
import React from "react";
import styles from "./Planting.Styles";

const PlantingActivity = ({ dataPlanting }) => {
  console.log("dataplanting", dataPlanting);
  return (
    <View>
      <View style={styles.detailInfo}>
        <View style={styles.body}>
          <Text style={styles.bodyText}>{dataPlanting?.density}</Text>
        </View>
      </View>
    </View>
  );
};

export default PlantingActivity;
