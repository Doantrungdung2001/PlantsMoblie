import { ScrollView } from "react-native";
import React from "react";
import ListService from "../../Components/ListSerivce/ListService";
import HeaderComponents from "../../Components/HeaderComponents/HeaderComponents";
import SliderComponents from "../../Components/SliderComponents/SliderComponents";

const HomeScreen = () => {
  return (
    <ScrollView>
      <HeaderComponents />
      <SliderComponents />
      <ListService />
    </ScrollView>
  );
};

export default HomeScreen;
