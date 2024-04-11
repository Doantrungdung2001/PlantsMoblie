import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProflieUser from "../Screens/ProfileUserScreen/ProfileUser";
import MyGardenScreen from "../Screens/ProfileUserScreen/MyGarden/MyGardenScreen";
import CultivationProcess from "../Screens/ProfileUserScreen/MyGarden/CultivationProcess";
import CameraExtraction from "../Screens/ProfileUserScreen/MyGarden/CameraExtraction";
import UpdateInformation from "../Screens/ProfileUserScreen/UpdateInformation/UpdateInformation";
import Points from "../Screens/ProfileUserScreen/Points/Points";
import HistoryGrowVegetables from "../Screens/ProfileUserScreen/HistoryGrowVegetables/HistoryGrowVegetables";
const Stack = createStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="proflieUser" component={ProflieUser} />
      <Stack.Screen name="profile/update-info" component={UpdateInformation} />
      <Stack.Screen name="profile/points" component={Points} />
      <Stack.Screen name="profile/my-garden" component={MyGardenScreen} />
      <Stack.Screen
        name="profile/history-grow-vegetables"
        component={HistoryGrowVegetables}
      />
    </Stack.Navigator>
  );
};

export default UserNavigation;
