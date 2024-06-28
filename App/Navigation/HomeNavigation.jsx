import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListFarmDetail from "../Screens/ServiceScreen/GrowVegetables/ListFarmDetail/ListFarmDetail";
import Delivery from "../Screens/ServiceScreen/Delivery/Delivery";
import ListMyGarden from "../Screens/ProfileUserScreen/MyGarden/ListMyGarden/ListMyGarden";
import Watting from "../Screens/ServiceScreen/Watting/ListWatting/Watting";
import DetailRequest from "../Screens/ServiceScreen/Watting/DetailRequest/DetailRequest";
import DetailFarmGrowVegetables from "../Screens/ServiceScreen/GrowVegetables/DetailFarm/DetailFarmGrowVegetables";
import DetailInfoService from "../Screens/ServiceScreen/GrowVegetables/DetailInfoService/DetailInfoService";
import SelectVegetables from "../Screens/ServiceScreen/GrowVegetables/SelectVegetables/SelectVegetables";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import SearchPlants from "../Screens/SearchScreen/SearchPlants/SearchPlants";

import MyGardenScreen from "../Screens/ProfileUserScreen/MyGarden/MyGardenScreen/MyGardenScreen";
import CultivationProcess from "../Screens/ProfileUserScreen/MyGarden/CultivationProcess/CultivationProcess/CultivationProcess";
import Request from "../Screens/ProfileUserScreen/MyGarden/Request";
import Live from "../Screens/ProfileUserScreen/MyGarden/Live/Live";
const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="service-screen/farm" component={ListFarmDetail} />
      <Stack.Screen name="service-screen/delivery" component={Delivery} />
      <Stack.Screen name="service-screen/watting" component={Watting} />
      <Stack.Screen
        name="service-screen/request-detail"
        component={DetailRequest}
      />
      <Stack.Screen name="service-screen/my-garden" component={ListMyGarden} />
      <Stack.Screen name="farm-detail" component={DetailFarmGrowVegetables} />
      <Stack.Screen name="service-detail" component={DetailInfoService} />
      <Stack.Screen name="select-vegestables" component={SelectVegetables} />
      <Stack.Screen name="search-plants" component={SearchPlants} />

      <Stack.Screen
        name="profile/my-garden/detail"
        component={MyGardenScreen}
      />
      <Stack.Screen
        name="profile/my-garden/cultivation"
        component={CultivationProcess}
      />
      <Stack.Screen name="profile/my-garden/request" component={Request} />
      <Stack.Screen name="profile/my-garden/live" component={Live} />
      <Stack.Screen
        name="profile/my-garden/listgarden"
        component={ListMyGarden}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
