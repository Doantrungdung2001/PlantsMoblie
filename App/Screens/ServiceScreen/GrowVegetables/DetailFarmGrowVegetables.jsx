import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../Constants";
import Heading from "../../../Components/Heading";
import IntruductionFarm from "./IntruductionFarm";
const DetailFarmGrowVegetables = () => {
  const param = useRoute().params;
  const [farmInformation, setFarmInformation] = useState(param.farmInfo);
  useEffect(() => {
    console.log(param?.farmInfo);
  });
  const navigation = useNavigation();
  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.backBtnContainer}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={40} color="white" />
      </TouchableOpacity>
      <Image
        source={{ uri: farmInformation?.image }}
        style={{ width: "100%", height: 300 }}
      />
      <View style={styles.infoContainer}>
        <Text style={{ fontSize: 25 }}>{farmInformation.name}</Text>
        <View style={styles.subContainer}>
          <Text style={{ color: "blue", fontSize: 20 }}>
            {farmInformation.gmail}
          </Text>
          <Text style={{ color: "blue", fontSize: 17 }}>
            {farmInformation.phone}
          </Text>
        </View>
        <Text style={{ color: COLORS.secondary, fontSize: 18 }}>
          <Ionicons
            name="ios-location-sharp"
            size={24}
            color={COLORS.secondary}
            style={{ marginRight: 14 }}
          />
          {farmInformation.district}
        </Text>

        {/* Horizontal Line */}
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.secondary,
            marginTop: 15,
          }}
        ></View>

        <IntruductionFarm Info={farmInformation} />

        {/* Horizontal Line */}
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.secondary,
            marginTop: 15,
          }}
        ></View>
      </View>
    </ScrollView>
  );
};

export default DetailFarmGrowVegetables;

const styles = StyleSheet.create({
  backBtnContainer: {
    marginTop: 25,
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  subContainer: {
    textAlign: "center",
  },
});
