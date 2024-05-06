import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import SelectDropDown from "../../../../Components/SelectDropDown/SelectDropDown";
import usePlantFarming from "./usePlantFarming";

const PlantFarming = ({ gardenId }) => {
  const { farmingProcess, isSuccessPlantFarming, isLoadingPlantFarming } =
    usePlantFarming({
      gardenId: gardenId,
    });
  return (
    <View>
      {isSuccessPlantFarming && <SelectDropDown dataFarming={farmingProcess} />}
      {isLoadingPlantFarming && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </View>
  );
};

export default PlantFarming;
