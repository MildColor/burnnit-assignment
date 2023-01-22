import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeMain from "../screens/home/HomeMain";

const HomeStack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="HomeMain">
      <HomeStack.Screen
        name="HomeMain"
        component={HomeMain}
        options={{ headerShown: false }}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
