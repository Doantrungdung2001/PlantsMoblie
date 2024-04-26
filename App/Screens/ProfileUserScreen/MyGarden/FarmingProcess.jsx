import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
// import { AntDesign } from "@expo/vector-icons";
// import CultivationActivities from "../../../Components/CultivationActivites/CultivationActivities";
// import PlantingActivity from "../../../Components/PlantingActivity/PlantingActivity";
// import FertilizationActivities from "../../../Components/FertilizationActivities/FertilizationActivities";
// import PestAndDiseaseControlActivities from "../../../Components/PestAndDiseaseControlActivities";
// import Accordion from "../../../Components/Accordion/Accordion";
import SelectDropDown from "../../../Components/SelectDropDown/SelectDropDown";

const FarmingProcess = () => {
  return (
    // <ScrollView>
    //   <CultivationActivities />
    //   <PlantingActivity />
    //   <FertilizationActivities />
    //   <PestAndDiseaseControlActivities />
    // </ScrollView>
    <View>
      {/* {frequentlyAskedQuestions.map((faq, index) => (
        <Accordion
          key={index.toString()}
          title={faq.nameAcitvity}
          details={faq.detail}
        />
      ))} */}

      <SelectDropDown />
    </View>
  );
};

export default FarmingProcess;

const styles = StyleSheet.create({});
