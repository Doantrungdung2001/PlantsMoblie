import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { useNavigation } from "@react-navigation/native";
import styles from "./ListMyGarden.Style";
import UserInfoAsyncStorage from "../../../../Utils/UserInfoAsyncStorage";
import useListGarden from "./useListMyGarden";
import { formatDate } from "../../../../Utils/helper";
const ListMyGarden = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
  UserInfoAsyncStorage.getUserInfo("UserInfo")
    .then((result) => {
      setUserId(result.farm._id);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  const { allGarden, isSuccessAllGarden, isLoadingAllGarden } = useListGarden({
    clientId: userId,
  });
  return (
    <ScrollView style={styles.container}>
      <PageHeading title={"Danh sách vườn đang ký"} />
      <View style={{ marginBottom: 20 }}></View>
      <View>
        {isSuccessAllGarden && (
          <FlatList
            data={allGarden}
            renderItem={({ item }) => (
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
                        {item.gardenServiceTemplate.square}(m2)
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ fontSize: 14, color: "gray" }}>Giá:</Text>
                      <Text style={{ fontSize: 14, color: "gray" }}>
                        {item.gardenServiceTemplate.price}(VND)
                      </Text>
                    </View>

                    <Text style={styles.itemPrice}>
                      {formatDate(item.startDate)}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
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
