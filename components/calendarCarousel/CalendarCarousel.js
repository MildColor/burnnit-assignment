import React, { useRef, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import renderCalendars from "./renderCalendars";
function CalendarCarousel({
  date = new Date(),

  //   monthFormatter = new Intl.DateTimeFormat("en", { month: "long" }),
}) {
  const scrollRef = useRef(null);
  const [layoutWidth, setLayoutWidth] = useState(330);

  // 선택된 날짜
  const [currentDate, setCurrentDate] = useState(date);

  //  currentDate 기준 전월
  const prevMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    currentDate.getDate()
  );

  // currentDate 기준 익월
  const nextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate()
  );

  const scrollToMiddleCalendar = () => {
    scrollRef.current?.scrollTo({
      x: Math.floor(layoutWidth),
      animated: false,
    });
  };

  return (
    <SafeAreaView
      style={styles.wrapperContainer}
      onLayout={(e) => {
        setLayoutWidth(e.nativeEvent.layout.width);
        scrollToMiddleCalendar();
      }}
    >
      <ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        contentOffset={{ x: layoutWidth, y: 0 }}
        ref={scrollRef}
      >
        <>{renderCalendars(prevMonth, currentDate, nextMonth)}</>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CalendarCarousel;

const CalenderContainer = styled.View`
  flex-direction: row;
  border: 1px solid black;
  flex-wrap: wrap;
`;
const CalenderDate = styled.View`
  flex-direction: row;
  border: 1px solid black;
`;

const styles = StyleSheet.create({
  wrapperContainer: {
    paddingTop: 40,
    width: 330,
    height: 470,
    paddingBottom: 40,
  },
  calendarContainer: {
    height: 390,
  },
  dayContainer: {
    width: 330,
    height: 350,
  },
  headerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 30,
  },
  arrowText: {
    color: "royalblue",
    fontSize: 30,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
  },
  titleText: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    width: 300,
  },
  yearText: {
    fontSize: 12,
    textAlign: "center",
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
  },
  weekdayText: {
    textAlign: "center",
    color: "#4F4F4F",
    fontSize: 20,
  },
  defaultView: {
    width: 47,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
  },
  otherDaysText: {
    color: "lightgray",
    textAlign: "center",
  },
  currentDayView: {
    width: 47,
    height: 47,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#109CF1",
  },
  activeView: {
    width: 47,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#F0F8FD",
  },
  currentDayText: {
    color: "white",
    textAlign: "center",
  },
  notActiveText: {
    textAlign: "center",
  },
  activeText: {
    color: "#109CF1",
    textAlign: "center",
  },
  mark: {
    width: 4,
    height: 4,
    borderRadius: 50,
    backgroundColor: "#109CF1",
  },
  eventContainer: {
    width: 320,
    height: 50,
    backgroundColor: "#109CF1",
    borderRadius: 30,
    paddingTop: 15,
    flexDirection: "row",
  },
  eventText: {
    color: "white",
    fontWeight: "600",
    paddingLeft: 30,
    fontSize: 14,
  },
  eventDate: {
    fontWeight: "900",
    paddingLeft: 25,
    color: "white",
  },
});
