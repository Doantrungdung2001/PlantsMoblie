import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Heading from "../../../../Components/Heading/Heading";
import { useNavigation } from "@react-navigation/native";
import styles from "./ListGardenService.Styles";

const ListGardenService = ({ serviceInfo, farmInfo }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Heading text={"Dịch vụ trồng rau hộ"} />
      <FlatList
        data={serviceInfo}
        renderItem={({ item, index }) => {
          return item.status === "active" ? (
            <View style={styles.pricingOption}>
              <Text style={styles.pricingOptionTitle}>
                Dịch vụ thứ {index + 1}
              </Text>
              <Text style={styles.pricingOptionPrice}>
                {item?.price} VND / 1tháng
              </Text>
              <Text style={styles.pricingOptionDescription}>
                Diện tích: {item.square}m2
              </Text>
              <View style={styles.pricingOptionFeatures}>
                <Text style={styles.pricingOptionFeature}>
                  Sản lượng dự kiến: {item.expectedOutput} kg
                </Text>
                <Text style={styles.pricingOptionFeature}>
                  Tần suất: {item.expectDeliveryPerWeek} lần/tuần
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.push("service-detail", {
                    serviceInfo: item,
                    farmInfo: farmInfo,
                  })
                }
                style={styles.pricingOptionButtonContainer}
              >
                <Text style={styles.pricingOptionButton}>Chi tiết</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View key={index}>
              <Text style={{ color: "#B0C4DE" }}>
                Nông trại chưa cập nhật dự án trồng rau hộ
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListGardenService;
