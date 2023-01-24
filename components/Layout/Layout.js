import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

function Layout({ children, alignItems, justifyContent }) {
  return (
    <SafeAreaView>
      <Container alignItems={alignItems} justifyContent={justifyContent}>
        {children}
      </Container>
    </SafeAreaView>
  );
}

export default Layout;

const Container = styled.View`
  display: flex;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
`;
