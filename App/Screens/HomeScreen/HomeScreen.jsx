import { StyleSheet } from "react-native";
import React from "react";
import Header from "../../Components/Header/Header";
import ListService from "../../Components/ListSerivce/ListService";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Header />
      <ListService />
    </ScrollView>
  );
};

export default HomeScreen;
