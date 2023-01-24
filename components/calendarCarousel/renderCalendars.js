import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import renderDates from "./renderDates";

//FlatList rederItem

const renderCalendars = (prevMonth, currentDate, nextMonth, changeMonth) => {
  // 달 하나를 render하는 함수
  const renderCalendar = (displayDate) => {
    const [selectedDate, setSelectedDate] = useState();

    const monthName = displayDate.getMonth() + 1;
    const year = displayDate.getFullYear();
    const month = displayDate.getMonth();

    // 선택된 date의 달의 마지막 날짜
    const lastDate = new Date(year, month + 1, 0).getDate();
    // getDay를 통해 선택된 달 1일의 day 구하기 (Sunday - Saturday : 0 - 6)
    const firstWeekday = new Date(year, month, 1).getDay();
    // getDay를 통해 선택된 달 마지막일의 day 구하기 (Sunday - Saturday : 0 - 6)
    const lastWeekday = new Date(year, month, lastDate).getDay();

    // for문을 통해 보여줄 요일 값을 구한다.
    const weekdays = [];

    for (let idx = 0; idx <= 6; idx++) {
      const matchMonth = new Date(2020, 5, idx);

      const weekDay = matchMonth
        .toLocaleString("default", {
          weekday: "narrow",
        })
        .slice(0, 3);

      weekdays.push(
        <View style={{ width: 47.14 }} key={idx}>
          <Text style={styles.weekdayText}>{weekDay}</Text>
        </View>
      );
    }

    // 선택될 달에 보여줄 이전달의 날짜 구하기
    const prevDates = [];
    // firstWeekDay === 3(수) 인 경우, 해당달 1일 이전에 빈칸은 세자리(일, 월, 화) 남게 된다.
    // 이전달의 마지막 날짜부터 차례대로 unshift
    for (let idx = 0; idx < firstWeekday; idx++) {
      const date = new Date(year, month, 0);

      date.setDate(date.getDate() - idx);
      prevDates.unshift(date);
    }

    // 선택된 달의 날짜 구하기
    const dates = [];

    for (let idx = 1; idx <= lastDate; idx++) {
      dates.push(new Date(year, month, idx));
    }

    // 선택된 달에 보여줄 다음달 날짜 구하기
    const nextDates = [];
    if (6 - lastWeekday >= 1) {
      for (let idx = 1; idx <= 6 - lastWeekday; idx++) {
        nextDates.push(new Date(year, month + 1, idx));
      }
    }

    // 선택된 달에 보여줄 모든 날짜
    const calendarDates = [...prevDates, ...dates, ...nextDates];

    return (
      <View style={styles.calendarContainer} key={displayDate.toString()}>
        <>
          <View style={styles.headerStyle}>
            <TouchableOpacity onPress={() => changeMonth(true)}>
              <Text style={styles.arrowText}> &#8249;</Text>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{monthName}월 </Text>
              <Text style={styles.yearText}>{year}</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.arrowText} onPress={() => changeMonth(false)}>
                &#8250;
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <>{weekdays}</>
          </View>
          <FlatList
            style={styles.dayContainer}
            data={calendarDates}
            numColumns={7}
            renderItem={({ item }) =>
              renderDates(item, selectedDate, setSelectedDate)
            }
            keyExtractor={(item, id) => id.toString()}
            scrollEnabled={false}
          />
        </>
      </View>
    );
  };

  // 전월 당월 익월 render
  return (
    <View style={styles.rowContainer}>
      <>
        {renderCalendar(prevMonth)}
        {renderCalendar(currentDate)}
        {renderCalendar(nextMonth)}
      </>
    </View>
  );
};

export default renderCalendars;

const styles = StyleSheet.create({
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
  },
  titleText: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  yearText: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
  },

  weekdayText: {
    textAlign: "center",
  },
});
