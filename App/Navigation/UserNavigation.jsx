import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Proflie from "../Screens/ProfileUserScreen/Profile/Profile";
import MyGardenScreen from "../Screens/ProfileUserScreen/MyGarden/MyGardenScreen/MyGardenScreen";
import UpdateInformation from "../Screens/ProfileUserScreen/UpdateInformation/UpdateInformation";
import ProfileInformation from "../Screens/ProfileUserScreen/ProfileInformation/ProfileInformation";
import Points from "../Screens/ProfileUserScreen/Points/Points";
import HistoryGrowVegetables from "../Screens/ProfileUserScreen/HistoryGrowVegetables/HistoryGrowVegetables";
import Request from "../Screens/ProfileUserScreen/MyGarden/Request";
import LiveCamera from "../Screens/ProfileUserScreen/MyGarden/LiveCamera";
import ListMyGarden from "../Screens/ProfileUserScreen/MyGarden/ListMyGarden/ListMyGarden";
import CultivationProcess from "../Screens/ProfileUserScreen/MyGarden/CultivationProcess/CultivationProcess/CultivationProcess";
const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="proflie" component={Proflie} />
      <Stack.Screen name="profile/info-view" component={ProfileInformation} />
      <Stack.Screen name="profile/update-info" component={UpdateInformation} />
      <Stack.Screen name="profile/points" component={Points} />
      <Stack.Screen
        name="profile/my-garden/detail"
        component={MyGardenScreen}
      />
      <Stack.Screen
        name="profile/my-garden/cultivation"
        component={CultivationProcess}
      />
      <Stack.Screen
        name="profile/history-grow-vegetables"
        component={HistoryGrowVegetables}
      />
      <Stack.Screen name="profile/my-garden/request" component={Request} />
      <Stack.Screen
        name="profile/my-garden/livecamera"
        component={LiveCamera}
      />
      <Stack.Screen
        name="profile/my-garden/listgarden"
        component={ListMyGarden}
      />
    </Stack.Navigator>
  );
};

export default UserNavigation;
