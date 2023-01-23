import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CalendarCarousel from "../../components/calendarCarousel/CalendarCarousel";

import Layout from "../../components/layout/Layout";

function CalendarMain() {
  return (
    <Layout justifyContent={"flex-start"}>
      <View>
        <ScrollView horizontal>
          <CalendarCarousel
            date={new Date()}
            // swipeLeft={setPrevMonth}
            // swipeRight={setNextMonth}
          />
        </ScrollView>
      </View>
    </Layout>
  );
}

export default CalendarMain;
