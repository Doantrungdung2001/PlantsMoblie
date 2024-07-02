import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Proflie from "../Screens/ProfileUserScreen/Profile/Profile";
import MyGardenScreen from "../Screens/ProfileUserScreen/MyGarden/MyGardenScreen/MyGardenScreen";
import UpdateInformation from "../Screens/ProfileUserScreen/UpdateInformation/UpdateInformation";
import ProfileInformation from "../Screens/ProfileUserScreen/ProfileInformation/ProfileInformation";
import Points from "../Screens/ProfileUserScreen/Points/Points";
import HistoryDelivery from "../Screens/ProfileUserScreen/HistoryDelivery/HistoryDelivery";
import TabRequest from "../Screens/ProfileUserScreen/MyGarden/Request/TabRequest/TabRequest";
import ListMyGarden from "../Screens/ProfileUserScreen/MyGarden/ListMyGarden/ListMyGarden";
import CultivationProcess from "../Screens/ProfileUserScreen/MyGarden/CultivationProcess/CultivationProcess/CultivationProcess";
import ChangePassword from "../Screens/ProfileUserScreen/ChangePassword/ChangePassword";
import Live from "../Screens/ProfileUserScreen/MyGarden/Live/Live";
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
      <Stack.Screen name="profile/change-password" component={ChangePassword} />
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
        name="profile/history-delivery"
        component={HistoryDelivery}
      />
      <Stack.Screen name="profile/my-garden/request" component={TabRequest} />
      <Stack.Screen name="profile/my-garden/live" component={Live} />
      <Stack.Screen
        name="profile/my-garden/listgarden"
        component={ListMyGarden}
      />
    </Stack.Navigator>
  );
};

export default UserNavigation;
