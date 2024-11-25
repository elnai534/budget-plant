import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const records = Array.from({ length: 50 }, (_, index) => `Record ${index + 1}`);

const ScrollableHistory = () => {
    return(
        <View style={styles.container}>
        <ScrollView 
            style={styles.scrollableSection}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
          {records.map((record, index) => (
            <View key={index} style={styles.record}>
              <Text style={styles.recordText}>{record}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 500,
      padding: 10,
      backgroundColor: "3E364A",
      width: "100%",
      paddingBottom: 50
    },
    scrollableSection: {
      flex: 1, 
      backgroundColor: "3E364A",
      borderRadius: 15,
      padding: 10,
      borderWidth: 3,
      borderColor: "#ddd",
    },
    record: {
      padding: 15,
      paddingBottom: 30,
      paddingTop: 30,
      borderBottomWidth: 1,
      borderBottomColor: "#eee",
    },
    recordText: {
      fontSize: 24,
      color: "#FFFFFF",
      fontFamily:'VT323, serif',
    },
  });

export default ScrollableHistory