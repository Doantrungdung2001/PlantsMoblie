import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import CultivationActivities from "../../../Components/CultivationActivities";
import PlantingActivity from "../../../Components/PlantingActivity";
import FertilizationActivities from "../../../Components/FertilizationActivities";
import PestAndDiseaseControlActivities from "../../../Components/PestAndDiseaseControlActivities";
import Accordion from "../../../Components/Accordion";
import SelectDropDown from "../../../Components/SelectDropDown";


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
