import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListFarmDetail from "../Screens/ServiceScreen/GrowVegetables/ListFarmDetail/ListFarmDetail";
import Internet from "../Screens/ServiceScreen/Internet/Internet";
import Bill from "../Screens/ServiceScreen/Bill/Bill";
import Wallet from "../Screens/ServiceScreen/Wallet/Wallet";
import DetailFarmGrowVegetables from "../Screens/ServiceScreen/GrowVegetables/DetailFarm/DetailFarmGrowVegetables";
import DetailInfoService from "../Screens/ServiceScreen/GrowVegetables/DetailInfoService/DetailInfoService";
import SelectVegetables from "../Screens/ServiceScreen/GrowVegetables/SelectVegetables/SelectVegetables";
import Notification from "../Components/NotificationsActivities/Notification";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import SearchPlants from "../Screens/SearchScreen/SearchPlants/SearchPlants";
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
      <Stack.Screen name="service-screen/delivery" component={Internet} />
      <Stack.Screen name="service-screen/watting" component={Wallet} />
      <Stack.Screen name="service-screen/my-garden" component={Bill} />
      <Stack.Screen name="farm-detail" component={DetailFarmGrowVegetables} />
      <Stack.Screen name="service-detail" component={DetailInfoService} />
      <Stack.Screen name="select-vegestables" component={SelectVegetables} />
      <Stack.Screen name="notification" component={Notification} />
      <Stack.Screen name="search-plants" component={SearchPlants} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
