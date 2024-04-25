import { Text, View } from "react-native";
import React from "react";
import styles from "../HeaderComponents/Header.Styles";

const Heading = ({ text }) => {
  return (
    <View>
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
};

export default Heading;
