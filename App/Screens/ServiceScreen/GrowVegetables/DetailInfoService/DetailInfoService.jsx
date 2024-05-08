import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import Heading from "../../../../Components/Heading/Heading";
import styles from "./DetailInfoService.Styles";
const DetailInfoService = () => {
  const navigation = useNavigation();
  const param = useRoute().params;
  const [serviceInformation, setServiceInformation] = useState(
    param.serviceInfo
  );
  const [farmInformation, setFarmInformation] = useState(param.farmInfo);
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
          source={{ uri: farmInformation?.avatar }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{serviceInformation.name}</Text>
        <View>
          <Heading text={"Thông tin dịch vụ"} />
          <View style={styles.serviceInformation}>
            <View style={styles.information}>
              <Text style={styles.nameInformation}>Tên dịch vụ</Text>
              <Text style={styles.detailInformation}>Combo rau trồng</Text>
            </View>
            <View style={styles.information}>
              <Text style={styles.nameInformation}>Giá thành</Text>
              <Text style={styles.detailInformation}>
                {serviceInformation.price}/1m2
              </Text>
            </View>
            <View style={styles.information}>
              <Text style={styles.nameInformation}>Diện tích</Text>
              <Text style={styles.detailInformation}>
                {serviceInformation.square}m2
              </Text>
            </View>
            <View style={styles.information}>
              <Text style={styles.nameInformation}>Rau ăn lá</Text>
              <Text style={styles.detailInformation}>
                {serviceInformation.leafyMax} loại
              </Text>
            </View>
            <View style={styles.information}>
              <Text style={styles.nameInformation}>Rau gia vị</Text>
              <Text style={styles.detailInformation}>
                {serviceInformation.herbMax} loại
              </Text>
            </View>
            <View style={styles.information}>
              <Text style={styles.nameInformation}>Củ</Text>
              <Text style={styles.detailInformation}>
                {serviceInformation.rootMax} loại
              </Text>
            </View>
            <View style={styles.information}>
              <Text style={styles.nameInformation}>Quả</Text>
              <Text style={styles.detailInformation}>
                {serviceInformation.fruitMax} loại
              </Text>
            </View>
            <View style={styles.information}>
              <Text style={styles.nameInformation}>Số lần giao</Text>
              <Text style={styles.detailInformation}>
                {serviceInformation.expectDeliveryPerWeek} lần/tuần
              </Text>
            </View>
            <View style={styles.information}>
              <Text style={styles.nameInformation}>Đầu ra kỳ vọng</Text>
              <Text style={styles.detailInformation}>
                {serviceInformation.expectedOutput}kg
              </Text>
            </View>
            <View style={styles.information}>
              <Text style={styles.nameInformation}>Thời lượng dịch vụ</Text>
              <Text style={styles.detailInformation}>2 tháng</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity
          style={styles.bookingBtn}
          onPress={() =>
            navigation.push("select-vegestables", {
              serviceInfo: serviceInformation,
            })
          }
        >
          <Text style={styles.textBtn}>Lựa chọn rau trồng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailInfoService;
