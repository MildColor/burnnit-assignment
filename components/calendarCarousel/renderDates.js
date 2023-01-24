import React, { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//요일 render
const renderDates = (dateItem, selectedDate, setSelectedDate) => {
  const itemYear = dateItem.getFullYear();
  const itemMonth = dateItem.getMonth();
  const itemDay = dateItem.getDate();
  const setItemDay = new Date(itemYear, itemMonth, itemDay);
  const itemId = `${itemYear}-${itemMonth}-${itemDay}`;

  const borderColor = itemId === selectedDate ? "royalblue" : "#ffffff";
  const borderRadius = itemId === selectedDate ? 23.5 : 0;
  const borderWidth = itemId === selectedDate ? 2 : 0;

  return (
    <TouchableOpacity key={itemId} onPress={() => setSelectedDate(itemId)}>
      <View>
        <View
          style={[
            styles.defaultView,
            {
              borderRadius: borderRadius,
              borderColor: borderColor,
              borderWidth: borderWidth,
            },
          ]}
        >
          <Text style={styles.notActiveText}>{`${itemDay}`}</Text>
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
