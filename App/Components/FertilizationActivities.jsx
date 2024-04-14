import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../Constants";
fertilizationActivity = [
  {
    fertilizationTime: "Trước khi trồng (theo cách 1: phân đơn)",
    type: "baseFertilizer",
    description:
      "Trên 1 ha, Phân chuồng: 40m3, Hữu cơ vi sinh: 1000kg, Vôi: 1000kg, Ure: 54kg, Lân Super: 337.5kg, Kali: 100kg",
  },
  {
    fertilizationTime: "Trước khi trồng (theo cách 2: quy đổi NHK)",
    type: "baseFertilizer",
    description:
      "Trên 1 ha, Phân chuồng: 40m3, Hữu cơ vi sinh: 1000kg, Vôi: 1000kg, Ure: 40kg, Lân Super: 203kg, Kali: 150kg",
  },
  {
    fertilizationTime: "Bón thúc lần 1 10NST (theo cách 1: phân đơn)",
    type: "topFertilizer",
    description: "Trên 1 ha, Ure: 30kg, Lân Super: 100kg",
  },
  {
    fertilizationTime: "Bón thúc lần 2 25NST (theo cách 1: phân đơn)",
    type: "topFertilizer",
    description: "Trên 1 ha, Ure: 50kg",
  },
  {
    fertilizationTime: "Bón thúc lần 3 45NST (theo cách 1: phân đơn)",
    type: "topFertilizer",
    description: "Trên 1 ha, Ure: 70kg, Kali: 50kg",
  },
  {
    fertilizationTime: "Bón thúc lần 4 65NST (theo cách 1: phân đơn)",
    type: "topFertilizer",
    description: "Trên 1 ha, Ure: 100kg, Kali: 100kg",
  },
  {
    fertilizationTime: "Bón thúc lần 1 10NST (theo cách 2: NPK tương đương)",
    type: "topFertilizer",
    description: "Trên 1 ha, Ure: 20kg, NPK 15-5-20: 80kg",
  },
  {
    fertilizationTime: "Bón thúc lần 2 25NST (theo cách 2: NPK tương đương)",
    type: "topFertilizer",
    description: "Trên 1 ha, NPK 15-5-20: 140kg",
  },
  {
    fertilizationTime: "Bón thúc lần 3 45NST (theo cách 2: NPK tương đương)",
    type: "topFertilizer",
    description: "Trên 1 ha, NPK 15-5-20: 180kg",
  },
  {
    fertilizationTime: "Bón thúc lần 4 65NST (theo cách 2: NPK tương đương)",
    type: "topFertilizer",
    description: "Trên 1 ha, NPK 15-5-20: 200kg",
  },
];

const FertilizationActivities = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectActivity, setSelectActivity] = useState();
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={fertilizationActivity}
          style={styles.productList}
          renderItem={(activity, index) => {
            return (
              <TouchableOpacity
                style={styles.productCard}
                onPress={() => {
                  setShowModal(!showModal);
                  setSelectActivity(activity);
                }}
              >
                <View style={{ alignSelf: "flex-start" }}>
                  <Text style={styles.productName}>
                    {activity.item.fertilizationTime}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-end",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <AntDesign name="infocirlce" size={24} color="black" />
                </View>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
      <Modal animationType="slide" visible={showModal}>
        <View style={{ padding: 20, paddingTop: 70 }}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
            onPress={() => setShowModal(!showModal)}
          >
            <Ionicons name="arrow-back" size={30} color="black" />
            <Text
              style={{
                fontSize: 23,
                fontWeight: "600",
              }}
            >
              Thông tin hoạt động
            </Text>
          </TouchableOpacity>
        </View>
        {selectActivity ? (
          <ScrollView>
            <View
              style={{
                padding: 10,
                justifyContent: "center",
                borderRadius: 10,
                backgroundColor: COLORS.green,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 30,
                marginBottom: 30,
              }}
            ></View>
            <View style={styles.detailInfo}>
              <Text style={styles.subject}>
                {selectActivity.item.fertilizationTime}
              </Text>
              <View style={styles.body}>
                <Text style={styles.bodyText}>
                  {selectActivity.item.description}
                </Text>
              </View>
            </View>
            <View style={{ marginBottom: 30 }}></View>
          </ScrollView>
        ) : (
          <View>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: 30,
                fontWeight: "600",
                textAlign: "center",
                marginTop: 40,
              }}
            >
              Hoạt động chưa cập nhật
            </Text>
          </View>
        )}
      </Modal>
    </View>
  );
};

export default FertilizationActivities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingTop: 20,
  },
  productList: {
    flex: 1,
    paddingTop: 16,
  },
  productCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    marginRight: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    flex: 1,
    marginRight: 16,
    justifyContent: "space-between",
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  detailInfo: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: COLORS.green,
    borderRadius: 10,
  },
  subject: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "#222",
  },
  body: {
    marginTop: 5,
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
  },
  bodyText: {
    fontSize: 19,
    lineHeight: 24,
    color: "black",
  },
});
