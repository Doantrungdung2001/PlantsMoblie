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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Ionicons name="location-outline" size={25} />

          <Text
            style={{
              fontFamily: "regular",
              fontSize: SIZES.medium,
              color: COLORS.gray,
              justifyContent: "center",
              marginRight: 130,
            }}
          >
            Hai Bà Trưng, Hà Nội
          </Text>
        </View>
      </View>

      <ScrollView>
        <Welcoms />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Farm;
