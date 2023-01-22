import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LibraryMain from "../screens/library/LibraryMain";

const LibraryStack = createNativeStackNavigator();

function LibraryNavigator() {
  return (
    <LibraryStack.Navigator initialRouteName="LibraryMain">
      <LibraryStack.Screen
        name="LibraryMain"
        component={LibraryMain}
        options={{ headerShown: false }}
      ></LibraryStack.Screen>
    </LibraryStack.Navigator>
  );
}

export default LibraryNavigator;
