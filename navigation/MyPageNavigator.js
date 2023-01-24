import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPageMain from "../screens/mypage/MyPageMain";

const MyPageStack = createNativeStackNavigator();

function MyPageNavigator() {
  return (
    <MyPageStack.Navigator initialRouteName="MyPageMain">
      <MyPageStack.Screen
        name="MyPageMain"
        component={MyPageMain}
        options={{ headerShown: false }}
      ></MyPageStack.Screen>
    </MyPageStack.Navigator>
  );
}

export default MyPageNavigator;
