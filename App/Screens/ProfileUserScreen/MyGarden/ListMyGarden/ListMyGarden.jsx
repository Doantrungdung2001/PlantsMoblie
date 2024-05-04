import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import { useNavigation } from "@react-navigation/native";
import styles from "./ListMyGarden.Style";
import UserInfoAsyncStorage from "../../../../Utils/UserInfoAsyncStorage";
import useListGarden from "./useListMyGarden";
const items = [
  {
    id: 1,
    name: "Apples",
    price: 0.99,
    image: "https://www.bootdey.com/image/280x280/FF00FF/000000",
  },
  {
    id: 2,
    name: "Bananas",
    price: 0.79,
    image: "https://www.bootdey.com/image/280x280/00BFFF/000000",
  },
  {
    id: 3,
    name: "Bread",
    price: 2.99,
    image: "https://www.bootdey.com/image/280x280/20B2AA/000000",
  },
];
const ListMyGarden = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState("");
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
              <View style={styles.card}>
                <View style={styles.item}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.itemImage}
                  />
                  <View style={styles.itemContent}>
                    <Text style={styles.itemName}>Tên dự án</Text>
                    <Text style={styles.itemPrice}>Nông trại</Text>
                    <Text style={styles.itemPrice}>11/04/2024</Text>
                  </View>
                </View>
                <View style={styles.buttons}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Hủy bỏ</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => navigation.push("profile/my-garden/detail")}
                  >
                    <Text style={styles.buttonText}>Chi tiết</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default ListMyGarden;
