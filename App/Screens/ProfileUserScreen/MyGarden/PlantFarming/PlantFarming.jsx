import { StyleSheet, Text, View } from "react-native";
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
    </View>
  );
};

export default PlantFarming;
