import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import SignUp from "./screens/SignUp";
import TabScren from "./navigation/TabScren";
import Search from "./screens/Search";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    regular: require("./assets/fonts/Roboto-Regular.ttf"),
    ltalic: require("./assets/fonts/Roboto-Italic.ttf"),
    light: require("./assets/fonts/Roboto-Light.ttf"),
    thin: require("./assets/fonts/Roboto-Thin.ttf"),
    boldltalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
  });

  const onLayOutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"SignUp"}
      >
        <Stack.Screen name="SignUp" component={SignUp} />

        {/*Tab*/}
        <Stack.Screen name="Home" component={TabScren} />

        {/*Screen */}
        <Stack.Screen name="Search" component={Search}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC0CB",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "boldltalic",
    fontSize: 20,
  },
});
