import React from "react";
import SearchPlants from "../Screens/SearchScreen/SearchPlants/SearchPlants";
import DetailInfoService from "../Screens/ServiceScreen/GrowVegetables/DetailInfoService/DetailInfoService";
import SelectVegetables from "../Screens/ServiceScreen/GrowVegetables/SelectVegetables/SelectVegetables";
import DetailFarmGrowVegetables from "../Screens/ServiceScreen/GrowVegetables/DetailFarm/DetailFarmGrowVegetables";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

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
