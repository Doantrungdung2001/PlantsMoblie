import React from "react";
import SearchPlants from "../Screens/SearchScreen/SearchPlants/SearchPlants";
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
    </Stack.Navigator>
  );
};

export default SearchNavigation;
