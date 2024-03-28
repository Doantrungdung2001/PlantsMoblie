import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import Welcoms from "../components/farm/Welcoms";
import Carousel from "../components/farm/Carousel";
import Heading from "../components/farm/Heading";
const Farm = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: 40,
          marginTop: -15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            style={{ marginLeft: -30 }}
            name="location-outline"
            size={25}
          />

          <Text
            style={{
              fontFamily: "regular",
              fontSize: SIZES.medium,
              color: COLORS.gray,
              justifyContent: "center",
              marginLeft: 35,
            }}
          >
            Hai Bà Trưng, Hà Nội
          </Text>
        </View>
      </View>

      <ScrollView>
        <Welcoms />
        <Carousel />
        <Heading />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Farm;
