import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CultivationActivities from "../../../Components/CultivationActivities";
import PlantingActivity from "../../../Components/PlantingActivity";
import FertilizationActivities from "../../../Components/FertilizationActivities";
import PestAndDiseaseControlActivities from "../../../Components/PestAndDiseaseControlActivities";
const FarmingProcess = () => {
  return (
    <ScrollView>
      <CultivationActivities />
      <PlantingActivity />
      <FertilizationActivities />
      <PestAndDiseaseControlActivities />
    </ScrollView>
  );
};

export default FarmingProcess;

const styles = StyleSheet.create({});
