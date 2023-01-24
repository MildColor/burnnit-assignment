import React, { useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CalendarCarousel from "../../components/calendarCarousel/CalendarCarousel";

import Layout from "../../components/layout/Layout";

const date = new Date();

function CalendarMain() {
  const [currentDate, setCurrentDate] = useState(date);
  // const [prevMonth, setPrevMonth] = useState(true);
  // const [nextMonth, setNextMonth] = useState(false);

  return (
    <Layout justifyContent={"flex-start"}>
      <View>
        <ScrollView horizontal>
          <CalendarCarousel
            date={currentDate}
            onDateChanged={(dateProp) => setCurrentDate(dateProp)}
            // swipeLeft={setPrevMonth}
            // swipeRight={setNextMonth}
          />
        </ScrollView>
      </View>
    </Layout>
  );
}

export default CalendarMain;
