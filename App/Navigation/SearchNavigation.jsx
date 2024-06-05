import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPlants from "../Screens/SearchScreen/SearchPlants/SearchPlants";
import DetailInfoService from "../Screens/ServiceScreen/GrowVegetables/DetailInfoService/DetailInfoService";
import SelectVegetables from "../Screens/ServiceScreen/GrowVegetables/SelectVegetables/SelectVegetables";
import DetailFarmGrowVegetables from "../Screens/ServiceScreen/GrowVegetables/DetailFarm/DetailFarmGrowVegetables";

const Stack = createNativeStackNavigator();

const SearchNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="search-plants" component={SearchPlants} />
      <Stack.Screen name="farm-detail" component={DetailFarmGrowVegetables} />
      <Stack.Screen name="service-detail" component={DetailInfoService} />
      <Stack.Screen name="select-vegestables" component={SelectVegetables} />
    </Stack.Navigator>
  );
};

export default SearchNavigation;
