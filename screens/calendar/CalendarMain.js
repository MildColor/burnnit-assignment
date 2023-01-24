import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import CalendarCarousel from "../../components/calendarCarousel/CalendarCarousel";

import Layout from "../../components/layout/Layout";

const date = new Date();

function CalendarMain() {
  const [currentDate, setCurrentDate] = useState(date);

  return (
    <Layout justifyContent={"flex-start"}>
      <ScrollView horizontal>
        <CalendarCarousel
          date={currentDate}
          onDateChanged={(dateProp) => setCurrentDate(dateProp)}
        />
      </ScrollView>
    </Layout>
  );
}

export default CalendarMain;
