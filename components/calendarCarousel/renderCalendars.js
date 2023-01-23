import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const renderCalendars = (prevMonth, currentDate, nextMonth) => {
  const renderCalendar = (displayDate) => {
    //   const monthName = monthFormatter.format(displayDate);
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

    //FlatList rederItem
    const renderDates = (dateItem) => {
      const itemYear = dateItem.getFullYear();
      const itemMonth = dateItem.getMonth();
      const itemDay = dateItem.getDate();
      const setItemDay = new Date(itemYear, itemMonth, itemDay);

      const isToday = (dateItem) => {
        const today = new Date();

        return (
          dateItem.getDate() === today.getDate() &&
          dateItem.getMonth() === today.getMonth() &&
          dateItem.getFullYear() === today.getFullYear()
        );
      };

      // const hasEvent = (): boolean => {
      //   return (
      //     markedDates.includes(itemDay) &&
      //     markedMonths.includes(itemMonth) &&
      //     markedYears.includes(itemYear)
      //   );
      // };

      // // eslint-disable-next-line @typescript-eslint/no-shadow
      // const isSelected = (dateItem: Date): boolean => {
      //   return (
      //     dateItem.getDate() === selectedDate?.getDate() &&
      //     dateItem.getMonth() === selectedDate?.getMonth() &&
      //     dateItem.getFullYear() === selectedDate?.getFullYear()
      //   );
      // };

      return (
        <TouchableOpacity key={itemDay}>
          <View style={styles.defaultView}>
            <Text style={styles.notActiveText}>{`${itemDay}`}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.calendarContainer} key={displayDate.toString()}>
        <>
          <View style={styles.headerStyle}>
            <TouchableOpacity>
              <Text style={styles.arrowText}> &#8249;</Text>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{monthName}</Text>
              <Text style={styles.yearText}>{year}</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.arrowText}>&#8250;</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <>{weekdays}</>
          </View>
          <FlatList
            style={styles.dayContainer}
            data={calendarDates}
            numColumns={7}
            renderItem={({ item }) => renderDates(item)}
            keyExtractor={(item, id) => id.toString()}
            scrollEnabled={false}
          />
        </>
      </View>
    );
  };

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
