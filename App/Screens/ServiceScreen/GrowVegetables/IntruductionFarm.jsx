import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Heading from "../../../Components/Heading";
import { COLORS } from "../../../Constants";

const IntruductionFarm = ({ Info }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    Info && (
      <View>
        {/* Gioi thieu  */}
        <Heading text={"Giới thiệu"} />
        <Text
          style={{ lineHeight: 28, color: COLORS.black, fontSize: 16 }}
          numberOfLines={isReadMore ? 30 : 3}
        >
          {Info.description}
        </Text>
        <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
          <Text style={{ color: COLORS.primary, fontSize: 16 }}>
            {isReadMore ? "Thu gọn" : "Chi tiết"}
          </Text>
        </TouchableOpacity>
      </View>
    )
  );
};

export default IntruductionFarm;

const styles = StyleSheet.create({});
