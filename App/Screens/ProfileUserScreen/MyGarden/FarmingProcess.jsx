import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import CultivationActivities from "../../../Components/CultivationActivities";
import PlantingActivity from "../../../Components/PlantingActivity";
import FertilizationActivities from "../../../Components/FertilizationActivities";
import PestAndDiseaseControlActivities from "../../../Components/PestAndDiseaseControlActivities";
import Accordion from "../../../Components/Accordion";
const frequentlyAskedQuestions = [
  {
    nameAcitvity: "Hoạt động làm đất",
    detail: <CultivationActivities />,
  },
  {
    nameAcitvity: "Hoạt động gieo trồng",
    detail: <PlantingActivity />,
  },
  {
    nameAcitvity: "Hoạt động bón phân",
    detail: <FertilizationActivities />,
  },
  {
    nameAcitvity: "Phòng ngừa sâu bệnh",
    detail: <PestAndDiseaseControlActivities />,
  },
];

const FarmingProcess = () => {
  return (
    // <ScrollView>
    //   <CultivationActivities />
    //   <PlantingActivity />
    //   <FertilizationActivities />
    //   <PestAndDiseaseControlActivities />
    // </ScrollView>
    <View>
      {frequentlyAskedQuestions.map((faq, index) => (
        <Accordion
          key={index.toString()}
          title={faq.nameAcitvity}
          details={faq.detail}
        />
      ))}
    </View>
  );
};

export default FarmingProcess;

const styles = StyleSheet.create({});
