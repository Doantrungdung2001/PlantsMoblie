import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Heading = ({ text }) => {
  return (
    <View>
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontFamily: "RobotoCondensed-Bold",
    marginBottom: 10,
  },
});
