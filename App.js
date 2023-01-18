import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <FontAwesome5 name="dumbbell" size={24} color="black" />
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: pink;
  align-items: center;
  justify-content: center;
`;
