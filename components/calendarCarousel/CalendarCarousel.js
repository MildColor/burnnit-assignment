import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import renderCalendars from "./renderCalendars";
function CalendarCarousel({ date = new Date(), onDateChanged }) {
  const scrollRef = useRef(null);
  const [layoutWidth, setLayoutWidth] = useState(330);
  const [currentDate, setCurrentDate] = useState(date);
  // 선택된 날짜

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

  // 화살표 press시 이동한 달을 currentDate로 설정
  const changeMonth = (toPrevMonth) => {
    if (toPrevMonth) {
      const update = prevMonth;

      setCurrentDate(update);

      return onDateChanged?.(update);
    }

    const update = nextMonth;

    setCurrentDate(update);

    return onDateChanged?.(update);
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
        <>{renderCalendars(prevMonth, currentDate, nextMonth, changeMonth)}</>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CalendarCarousel;

const styles = StyleSheet.create({
  wrapperContainer: {
    // paddingTop: 40,
    width: 330,
    height: 500,
    // paddingBottom: 40,
  },
});
