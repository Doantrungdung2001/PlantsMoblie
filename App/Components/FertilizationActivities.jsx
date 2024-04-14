import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

data = [
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
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={data}
          style={styles.productList}
          renderItem={(activity, index) => {
            console.log(activity);
            return (
              <View style={styles.productCard}>
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>
                    {activity.item.fertilizationTime}
                  </Text>
                </View>
                <View style={styles.productAmount}></View>
              </View>
            );
          }}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
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
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4caf50",
  },
  productPriceText: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#666",
  },
  productAmount: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountButton: {
    width: 30,
    height: 30,
    backgroundColor: "#ffa726",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  amountButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  amountText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 16,
  },
  continueButton: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: "#4caf50",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
