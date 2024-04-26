import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import PageHeading from "../../../Components/PageHeading/PageHeading";

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

const HistoryGrowVegetables = () => {
  return (
    <ScrollView style={styles.container}>
      <PageHeading title={"Lịch sử đăng ký trồng rau"} />
      <View style={{marginBottom: 20}}></View>
      <View>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <View style={styles.itemContent}>
                  <Text style={styles.itemName}>Tên dự án</Text>
                  <Text style={styles.itemPrice}>Nông trại</Text>
                  <Text style={styles.itemPrice}>11/04/2024</Text>
                </View>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Xóa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerButton}>
                  <Text style={styles.buttonText}>Đăng ký lại</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default HistoryGrowVegetables;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    color: "#fff",
    marginHorizontal: 20,
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "#999",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  registerButton: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
