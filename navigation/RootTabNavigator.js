import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import LibraryNavigator from "./LibraryNavigator";
import CalendarNavigator from "./CalendarNavigator";
import MyPageNavigator from "./MyPageNavigator";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function RootTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HOME"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="CALENDAR"
        component={CalendarNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="calendar-month-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="LIBRARY"
        component={LibraryNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="dumbbell" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="MY PAGE"
        component={MyPageNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootTabNavigator;
