import { StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import Heading from "./Heading";
const FertilizationActivities = () => {
  return (
    <ScrollView>
      <View>
        <Heading text={"Hoạt động bón phân"} />
      </View>
    </ScrollView>
  );
};

export default FertilizationActivities;

const styles = StyleSheet.create({});
