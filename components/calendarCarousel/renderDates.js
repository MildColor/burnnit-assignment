import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//요일 render
const renderDates = (dateItem, month, selectedDate, setSelectedDate) => {
  const itemYear = dateItem.getFullYear();
  const itemMonth = dateItem.getMonth();
  const itemDay = dateItem.getDate();
  const setItemDay = new Date(itemYear, itemMonth, itemDay);
  const itemId = `${itemYear}-${itemMonth}-${itemDay}`;

  const pressedBorderColor = itemId === selectedDate ? "royalblue" : "#ffffff";
  const pressedBorderRadius = itemId === selectedDate ? 23.5 : 0;
  const pressedBorderWidth = itemId === selectedDate ? 2 : 0;
  const besideDateColor = itemMonth === month ? "black" : "gray";

  return (
    <TouchableOpacity key={itemId} onPress={() => setSelectedDate(itemId)}>
      <View>
        <View
          style={[
            styles.defaultView,
            {
              borderRadius: pressedBorderRadius,
              borderColor: pressedBorderColor,
              borderWidth: pressedBorderWidth,
            },
          ]}
        >
          <Text
            style={[styles.notActiveText, { color: besideDateColor }]}
          >{`${itemDay}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default renderDates;

const styles = StyleSheet.create({
  defaultView: {
    width: 47,
    height: 47,

    justifyContent: "center",
    alignItems: "center",
  },

  notActiveText: {
    textAlign: "center",
  },
});
