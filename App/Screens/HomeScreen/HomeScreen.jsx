import { ScrollView } from "react-native";
import React from "react";
import ListService from "../../Components/ListSerivce/ListService";
import HeaderComponents from "../../Components/HeaderComponents/HeaderComponents";
import SliderComponents from "../../Components/SliderComponents/SliderComponents";
import ListFarm from "../../Components/ListFarm/ListFarm";

const HomeScreen = () => {
  return (
    <ScrollView>
      <HeaderComponents />
      <SliderComponents />
      <ListService />
      <ListFarm />
    </ScrollView>
  );
};

export default HomeScreen;
