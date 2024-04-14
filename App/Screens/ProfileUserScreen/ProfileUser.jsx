// rnfe
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../Constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

data = [
  {
    id: 1,
    name: "Chỉnh sửa thông tin",
    param: "update-info",
    icon: "settings",
  },
  {
    id: 2,
    name: "Ưu đãi",
    param: "points",
    icon: "card-sharp",
  },
  {
    id: 3,
    name: "Vườn của tôi",
    param: "my-garden",
    icon: "cart-sharp",
  },
  {
    id: 4,
    name: "Lịch sử",
    param: "history-grow-vegetables",
    icon: "film",
  },
  {
    id: 5,
    name: "Đăng xuất",
    icon: "log-out",
  },
];

const user = {
  avatar: "https://image.pngaaa.com/764/3043764-middle.png",
  name: "Doan Trung Dung",
  gmail: "doantrungdung2001@gmail.com",
};
const ProflieUser = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{ padding: 20, paddingTop: 50, backgroundColor: COLORS.primary }}
      >
        <Text style={{ fontSize: 30, fontFamily: "Roboto-Medium" }}>Hồ sơ</Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            backgroundColor: COLORS.primary,
          }}
        >
          <Image
            source={{ uri: user.avatar }}
            style={{ width: 90, height: 90, borderRadius: 99 }}
          />
          <Text
            style={{
              fontSize: 26,
              marginTop: 8,
              fontFamily: "Roboto-Medium",
              color: COLORS.white,
            }}
          >
            {user.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 8,
              fontFamily: "Roboto-Medium",
              color: COLORS.white,
            }}
          >
            {user.gmail}
          </Text>
        </View>
      </View>
      <View style={{ paddingTop: 50 }}>
        {data.map((item) => (
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginBottom: 30,
              paddingHorizontal: 70,
            }}
            onPress={() => navigation.push(`profile/${item.param}`)}
          >
            <Ionicons name={item.icon} size={44} color={COLORS.primary} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Roboto-Medium",
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ProflieUser;
