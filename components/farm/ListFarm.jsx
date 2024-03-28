import {FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import FarmCardView from "./FarmCardView";
const ListFarm = () => {
    const farms = [1,2,3,4];
  return (
    <View style={{marginTop: SIZES.medium}}>
      <FlatList
        data={farms}
        renderItem={({item}) => <FarmCardView />}
        horizontal
        contentContainerStyle={{columnGap: SIZES.medium}}
      />
    </View>
  );
};

export default ListFarm;

const styles = StyleSheet.create({});
