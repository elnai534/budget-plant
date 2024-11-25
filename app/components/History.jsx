import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { records } from "./recordsData"; // Import the records array

const ScrollableHistory = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollableSection}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {records.map((record, index) => (
          <View key={index} style={styles.record}>
            <Text style={styles.recordTitle}>{record.title}</Text>
            <Text
              style={[
                styles.recordAmount,
                { color: record.amount < 0 ? "#FF6B6B" : "#4CAF50" }, // Color based on positive/negative
              ]}
            >
              ${record.amount.toFixed(2)}
            </Text>
            <Text style={styles.recordCategory}>{record.category}</Text>
            <Text style={styles.recordDescription}>{record.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
    padding: 10,
    backgroundColor: "#3E364A", // Fixed background color (add missing #)
    width: "100%",
    paddingBottom: 50,
  },
  scrollableSection: {
    flex: 1,
    backgroundColor: "#3E364A",
    borderRadius: 15,
    padding: 10,
    borderWidth: 3,
    borderColor: "#f5eed5",
  },
  record: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  recordTitle: {
    fontSize: 24,
    color: "#f5eed5",
    fontFamily: "VT323, serif",
  },
  recordAmount: {
    fontSize: 20,
    fontFamily: "VT323, serif",
    marginTop: 5,
  },
  recordCategory: {
    fontSize: 16,
    color: "#888",
    marginTop: 5,
    fontFamily: "VT323, serif",
  },
  recordDescription: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 5,
    fontFamily: "VT323, serif",
  },
});

export default ScrollableHistory;
