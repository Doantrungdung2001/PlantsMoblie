import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Heading from "./Heading";
fertilizationActivities: [
  {
    fertilizationTime: "Trước khi trồng (theo cách 1: phân đơn)",
    type: "baseFertilizer",
    description:
      "Trên 1 ha, Phân chuồng: 40m3, Hữu cơ vi sinh: 1000kg, Vôi: 1000kg, Ure: 54kg, Lân Super: 337.5kg, Kali: 100kg",
    _id: "65d42edc189dcc81b91551d7",
  },
  {
    fertilizationTime: "Trước khi trồng (theo cách 2: quy đổi NHK)",
    type: "baseFertilizer",
    description:
      "Trên 1 ha, Phân chuồng: 40m3, Hữu cơ vi sinh: 1000kg, Vôi: 1000kg, Ure: 40kg, Lân Super: 203kg, Kali: 150kg",
    _id: "65d42edc189dcc81b91551d8",
  },
  {
    fertilizationTime: "Bón thúc lần 1 10NST (theo cách 1: phân đơn)",
    type: "topFertilizer",
    description: "Trên 1 ha, Ure: 30kg, Lân Super: 100kg",
    _id: "65d42edc189dcc81b91551d9",
  },
  {
    fertilizationTime: "Bón thúc lần 2 25NST (theo cách 1: phân đơn)",
    type: "topFertilizer",
    description: "Trên 1 ha, Ure: 50kg",
    _id: "65d42edc189dcc81b91551da",
  },
  {
    fertilizationTime: "Bón thúc lần 3 45NST (theo cách 1: phân đơn)",
    type: "topFertilizer",
    description: "Trên 1 ha, Ure: 70kg, Kali: 50kg",
    _id: "65d42edc189dcc81b91551db",
  },
  {
    fertilizationTime: "Bón thúc lần 4 65NST (theo cách 1: phân đơn)",
    type: "topFertilizer",
    description: "Trên 1 ha, Ure: 100kg, Kali: 100kg",
    _id: "65d42edc189dcc81b91551dc",
  },
  {
    fertilizationTime: "Bón thúc lần 1 10NST (theo cách 2: NPK tương đương)",
    type: "topFertilizer",
    description: "Trên 1 ha, Ure: 20kg, NPK 15-5-20: 80kg",
    _id: "65d43cd36b7f940313fb31bb",
  },
  {
    fertilizationTime: "Bón thúc lần 2 25NST (theo cách 2: NPK tương đương)",
    type: "topFertilizer",
    description: "Trên 1 ha, NPK 15-5-20: 140kg",
    _id: "65d43cd36b7f940313fb31bc",
  },
  {
    fertilizationTime: "Bón thúc lần 3 45NST (theo cách 2: NPK tương đương)",
    type: "topFertilizer",
    description: "Trên 1 ha, NPK 15-5-20: 180kg",
    _id: "65d43cd36b7f940313fb31bd",
  },
  {
    fertilizationTime: "Bón thúc lần 4 65NST (theo cách 2: NPK tương đương)",
    type: "topFertilizer",
    description: "Trên 1 ha, NPK 15-5-20: 200kg",
    _id: "65d43cd36b7f940313fb31be",
  },
];
const FertilizationActivities = () => {
  return (
    <View>
      <View>
        <Heading text={"Hoạt động bón phân"} />
      </View>
    </View>
  );
};

export default FertilizationActivities;

const styles = StyleSheet.create({});
