import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";

function CalendarMain() {
  return (
    <Layout justifyContent={"flex-start"}>
      <CalenderContainer>
        <View
          style={{
            flex: 1 / 7,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>1</Text>
        </View>
      </CalenderContainer>
    </Layout>
  );
}

export default CalendarMain;

const CalenderContainer = styled.View`
  flex-direction: row;
  border: 1px solid black;
  flex-wrap: wrap;
`;
const CalenderDate = styled.View`
  flex-direction: row;
  border: 1px solid black;
`;
