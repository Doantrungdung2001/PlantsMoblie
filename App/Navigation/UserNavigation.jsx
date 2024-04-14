import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProflieUser from "../Screens/ProfileUserScreen/ProfileUser";
import MyGardenScreen from "../Screens/ProfileUserScreen/MyGarden/MyGardenScreen";
import UpdateInformation from "../Screens/ProfileUserScreen/UpdateInformation/UpdateInformation";
import Points from "../Screens/ProfileUserScreen/Points/Points";
import HistoryGrowVegetables from "../Screens/ProfileUserScreen/HistoryGrowVegetables/HistoryGrowVegetables";
import Request from "../Screens/ProfileUserScreen/MyGarden/Request";
import LiveCamera from "../Screens/ProfileUserScreen/MyGarden/LiveCamera";
import Delivery from "../Screens/ProfileUserScreen/MyGarden/Delivery";
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
      <Stack.Screen name="profile/my-garden/request" component={Request} />
      <Stack.Screen name="profile/my-garden/delivery" component={Delivery} />
      <Stack.Screen name="profile/my-garden/livecamera" component={LiveCamera} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
