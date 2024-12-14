import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useRecords } from "../components/recordsData"; // Import the hook
import { useFonts } from "expo-font";

const ScrollableHistory = () => {
  const [fontsLoaded] = useFonts({
    VT323: require("../../assets/fonts/VT323-Regular.ttf"),
  });

  // Ensure font is loaded before rendering
  if (!fontsLoaded) {
    return null; // Show nothing until the font is loaded
  }

  const { records } = useRecords(); // Access the dynamic records state

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
                { color: record.amount < 0 ? "#FF6B6B" : "#4CAF50" }, // Color for negative/positive amounts
              ]}
            >
              ${record.amount}
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
    height: "30%",
    padding: 10,
    backgroundColor: "#3E364A",
    width: "100%",
  },
  scrollableSection: {
    flex: 1,
    backgroundColor: "#3E364A",
    borderRadius: 15,
    padding: 10,
    borderWidth: 3,
    borderColor: "#ddd",
  },
  record: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  recordTitle: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "VT323", // Removed `serif` as custom fonts don’t support fallbacks
  },
  recordAmount: {
    fontSize: 20,
    fontFamily: "VT323",
    marginTop: 5,
  },
  recordCategory: {
    fontSize: 16,
    color: "#888",
    marginTop: 5,
    fontFamily: "VT323",
  },
  recordDescription: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 5,
    fontFamily: "VT323",
  },
});

export default ScrollableHistory;
