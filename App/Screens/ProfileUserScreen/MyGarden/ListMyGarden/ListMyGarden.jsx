import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { useNavigation } from "@react-navigation/native";
import styles from "./ListMyGarden.Style";
import UserInfoAsyncStorage from "../../../../Utils/UserInfoAsyncStorage";
import useListGarden from "./useListMyGarden";
import { formatDate } from "../../../../Utils/helper";
import { getStatusText } from "../../../../Utils/helper";
const ListMyGarden = () => {
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
  const { allGarden, isSuccessAllGarden, isLoadingAllGarden } = useListGarden({
    clientId: userId,
  });

  const getStatusStyles = (status) => {
    switch (status) {
      case "started":
        return { dotStyle: styles.startedDot, textStyle: styles.startedText };
      case "cancel":
        return { dotStyle: styles.cancelDot, textStyle: styles.cancelText };
      case "completed":
        return {
          dotStyle: styles.completedDot,
          textStyle: styles.completedText,
        };
      default:
        return { dotStyle: styles.defaultDot, textStyle: styles.defaultText };
    }
  };

  return (
    <ScrollView style={styles.container}>
      <PageHeading title={"Danh sách vườn đang ký"} />
      <View style={{ marginBottom: 20 }}></View>
      <View>
        {isSuccessAllGarden && (
          <FlatList
            data={allGarden}
            renderItem={({ item }) => {
              const statusStyles = getStatusStyles(item.status);

              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() =>
                    navigation.push("profile/my-garden/detail", {
                      dataMyGarden: item,
                    })
                  }
                >
                  <View style={styles.item}>
                    <Image
                      source={{ uri: item.farm.images[0] }}
                      style={styles.itemImage}
                    />
                    <View style={styles.itemContent}>
                      <Text style={styles.itemName}>{item.farm.name}</Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text style={{ fontSize: 14, color: "gray" }}>
                          Diện tích:
                        </Text>
                        <Text style={{ fontSize: 14, color: "gray" }}>
                          {item.gardenServiceTemplate.square}(m²)
                        </Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text style={{ fontSize: 14, color: "gray" }}>
                          Giá:
                        </Text>
                        <Text style={{ fontSize: 14, color: "gray" }}>
                          {item.gardenServiceTemplate.price}(VND)
                        </Text>
                      </View>
                      <Text style={styles.itemPrice}>
                        {formatDate(item.startDate)}
                      </Text>
                    </View>
                    <View style={styles.statusContainer}>
                      <View style={[styles.dot, statusStyles.dotStyle]} />
                      <Text style={[styles.msgTxt, statusStyles.textStyle]}>
                        {getStatusText(item.status)}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        )}
        {isLoadingAllGarden && (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </View>
    </ScrollView>
  );
};

export default ListMyGarden;
