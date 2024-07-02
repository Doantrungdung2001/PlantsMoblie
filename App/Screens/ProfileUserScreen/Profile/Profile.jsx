import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../../../Constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./Profile.Style";
import UserInfoAsyncStorage from "../../../Utils/UserInfoAsyncStorage";
import useClientInformation from "../ProfileInformation/useClientInformation";

data = [
  {
    id: 1,
    name: "Chỉnh sửa thông tin",
    param: "info-view",
    icon: "settings",
  },
  // {
  //   id: 2,
  //   name: "Ưu đãi",
  //   param: "points",
  //   icon: "card-sharp",
  // },
  {
    id: 2,
    name: "Vườn của tôi",
    param: "my-garden/listgarden",
    icon: "cart-sharp",
  },
  {
    id: 3,
    name: "Lịch sử",
    param: "history-delivery",
    icon: "film",
  },
  {
    id: 4,
    name: "Đăng xuất",
    icon: "log-out",
  },
];

const user = {
  avatar: "https://image.pngaaa.com/764/3043764-middle.png",
};

const Proflie = () => {
  const [userId, setUserId] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await UserInfoAsyncStorage.getUserInfo("UserInfo");
        setUserId(result.farm._id);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const { dataClient, isSuccessClientInformation, isLoadingClientInformation } =
    useClientInformation({
      clientId: userId,
    });

  const handleLogout = async () => {
    try {
      await UserInfoAsyncStorage.clearUserInfo();
      navigation.replace("Login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handlePress = (item) => {
    if (item.id === 5) {
      Alert.alert(
        "Xác nhận",
        "Bạn có chắc chắn muốn đăng xuất không?",
        [
          {
            text: "Không",
            style: "cancel",
          },
          {
            text: "Có",
            onPress: handleLogout,
          },
        ],
        { cancelable: false }
      );
    } else {
      navigation.push(`profile/${item.param}`);
    }
  };

  return (
    <View>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarTitle}>Hồ sơ</Text>
        {isSuccessClientInformation && (
          <View style={styles.avatarContent}>
            <Image source={{ uri: user.avatar }} style={styles.avatarImg} />
            <Text style={styles.nameText}>{dataClient.name}</Text>
            <Text style={styles.mailText}>{dataClient.email}</Text>
          </View>
        )}
        {isLoadingClientInformation && (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </View>
      <View style={styles.content}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.service}
            onPress={() => handlePress(item)}
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

export default Proflie;
