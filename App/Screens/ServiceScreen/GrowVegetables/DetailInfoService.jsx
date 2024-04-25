import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../Constants";
import React, { useState } from "react";
import Heading from "../../../Components/Heading/Heading";

const DetailInfoService = () => {
  const navigation = useNavigation();
  const param = useRoute().params;
  const [serviceInformation, setServiceInformation] = useState(
    param.serviceInfo
  );
  const [showModal, setShowModal] = useState(false);
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
          source={{ uri: serviceInformation?.image }}
          style={{ width: "100%", height: 300 }}
        />
        <Text
          style={{
            fontFamily: "RobotoCondensed-Bold",
            textAlign: "center",
            fontSize: 35,
            padding: 20,
            display: "flex",
            gap: 7,
          }}
        >
          {serviceInformation.name}
        </Text>
        <View>
          <Heading text={"Thông tin dịch vụ"} />
          <View style={styles.serviceInformation}>
            <View style={styles.information}>
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 16,
                  paddingLeft: 10,
                }}
              >
                Tên dịch vụ
              </Text>
              <Text style={{ fontFamily: "regular", fontSize: 16 }}>
                Combo rau trồng
              </Text>
            </View>
            <View style={styles.information}>
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 16,
                  paddingLeft: 10,
                }}
              >
                Giá thành
              </Text>
              <Text style={{ fontFamily: "regular", fontSize: 16 }}>
                1tr500k/1m2
              </Text>
            </View>
            <View style={styles.information}>
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 16,
                  paddingLeft: 10,
                }}
              >
                Rau ăn lá
              </Text>
              <Text style={{ fontFamily: "regular", fontSize: 16 }}>
                4 loại
              </Text>
            </View>
            <View style={styles.information}>
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 16,
                  paddingLeft: 10,
                }}
              >
                Rau gia vị
              </Text>
              <Text style={{ fontFamily: "regular", fontSize: 16 }}>
                5 loại
              </Text>
            </View>
            <View style={styles.information}>
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 16,
                  paddingLeft: 10,
                }}
              >
                Củ
              </Text>
              <Text style={{ fontFamily: "regular", fontSize: 16 }}>
                2 loại
              </Text>
            </View>
            <View style={styles.information}>
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 16,
                  paddingLeft: 10,
                }}
              >
                Quả
              </Text>
              <Text style={{ fontFamily: "regular", fontSize: 16 }}>
                2 loại
              </Text>
            </View>
            <View style={styles.information}>
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 16,
                  paddingLeft: 10,
                }}
              >
                Số lần giao
              </Text>
              <Text style={{ fontFamily: "regular", fontSize: 16 }}>
                2 lần/tuần
              </Text>
            </View>
            <View style={styles.information}>
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 16,
                  paddingLeft: 10,
                }}
              >
                Thời lượng dịch vụ
              </Text>
              <Text style={{ fontFamily: "regular", fontSize: 16 }}>
                2 tháng
              </Text>
            </View>
          </View>
          <Heading text={"Quy trình canh tác"} />
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity
          style={styles.bookingBtn}
          onPress={() => navigation.push("select-vegestables")}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "RobotoCondensed-Bold",
              color: COLORS.white,
              fontSize: 18,
            }}
          >
            Lựa chọn rau trồng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailInfoService;

const styles = StyleSheet.create({
  backBtnContainer: {
    marginTop: 25,
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },
  serviceInformation: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  information: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 13,
  },
  bookingBtn: {
    padding: 15,
    backgroundColor: COLORS.green,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 99,
  },
});
