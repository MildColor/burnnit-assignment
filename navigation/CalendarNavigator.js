import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalendarMain from "../screens/calendar/CalendarMain";

const CalendarStack = createNativeStackNavigator();

function CalendarNavigator() {
  return (
    <CalendarStack.Navigator initialRouteName="CalendarMain">
      <CalendarStack.Screen
        name="CalendarMain"
        component={CalendarMain}
        options={{ headerShown: false }}
      ></CalendarStack.Screen>
    </CalendarStack.Navigator>
  );
}

export default CalendarNavigator;
