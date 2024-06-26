import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Header.Styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import UserInfoAsyncStorage from "../../Utils/UserInfoAsyncStorage";
import useClientInformation from "../../Screens/ProfileUserScreen/ProfileInformation/useClientInformation";
import { formatDate } from "../../Utils/helper";
const HeaderComponents = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
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
  return (
    <View style={styles.container}>
      {isSuccessClientInformation && (
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{dataClient.address}</Text>
            <Text style={styles.headerSubtitle}>Ngày tháng: {formatDate(new Date())}</Text>
          </View>

          <View style={styles.body}>
            <Image
              source={{
                uri: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
              }}
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{dataClient.name}</Text>
              <Text style={styles.userRole}>{dataClient.email}</Text>
            </View>
          </View>
        </View>
      )}
      {isLoadingClientInformation && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
      <View style={styles.titleSearch}>
        <Text style={styles.headingText}>Bạn muốn trồng rau gì?</Text>
      </View>
      <TouchableOpacity
        style={styles.searchSectionWrapper}
        onPress={() => navigation.push("search-plants")}
      >
        <View style={styles.searchBar}>
          <AntDesign
            name="search1"
            size={25}
            color="black"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Nhập cây muốn trồng"
            onFocus={() => navigation.push("search-plants")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponents;
