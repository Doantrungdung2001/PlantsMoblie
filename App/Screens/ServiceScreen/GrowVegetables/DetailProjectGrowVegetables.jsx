import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../Constants";
import IntruductionProject from "./IntruductionProject";
import RegistrationGrowVegetables from "./RegistrationGrowVegetables";
import Slider from "../../../Components/Slider";
const DetailProjectGrowVegetables = () => {
  const param = useRoute().params;
  const [farmInformation, setFarmInformation] = useState(param.farmInfo);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    console.log(param?.farmInfo);
  });
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView style={{ height: "93%" }}>
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

          <IntruductionProject Info={farmInformation} />

          {/* Horizontal Line */}
          <View
            style={{
              borderWidth: 1,
              borderColor: COLORS.secondary,
              marginTop: 15,
            }}
          ></View>
        </View>
        <Slider />
      </ScrollView>
      <View>
        <TouchableOpacity
          style={styles.bookingBtn}
          onPress={() => setShowModal(!showModal)}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "RobotoCondensed-Bold",
              color: COLORS.white,
              fontSize: 18,
            }}
          >
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
      {/* Đăng ký */}
      <Modal animationType="slide" visible={showModal}>
        <RegistrationGrowVegetables />
      </Modal>
    </View>
  );
};

export default DetailProjectGrowVegetables;

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
  bookingBtn: {
    padding: 15,
    backgroundColor: COLORS.green,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 99,
  },
});
