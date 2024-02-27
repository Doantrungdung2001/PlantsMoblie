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
const Farm = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: 25,
          marginTop: SIZES.small,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Ionicons name="location-outline" size={30} />

          <Text 
          style={{
            fontFamily: "regular",
            fontSize: SIZES.medium,
            color: COLORS.gray,
            justifyContent: "center",
          }}
          >Ha noi</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Farm;
