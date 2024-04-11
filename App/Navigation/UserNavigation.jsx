import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProflieUser from "../Screens/ProfileUserScreen/ProfileUser";
import MyGardenScreen from "../Screens/ProfileUserScreen/MyGarden/MyGardenScreen";
import CultivationProcess from "../Screens/ProfileUserScreen/MyGarden/CultivationProcess";
import CameraExtraction from "../Screens/ProfileUserScreen/MyGarden/CameraExtraction";
const Stack = createStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="proflieUser" component={ProflieUser} />
      <Stack.Screen name="mygarden" component={MyGardenScreen} />
      <Stack.Screen name="cultivation-process" component={CultivationProcess} />
      <Stack.Screen name="camera-extraction" component={CameraExtraction} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
