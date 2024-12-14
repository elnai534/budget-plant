import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font"; // Import the useFonts hook
import ScrollableHistory from "./components/History";

const History = ({ onClose }) => {
  const [fontsLoaded] = useFonts({
    VT323: require("../assets/fonts/VT323-Regular.ttf"), // Adjust path as necessary
  });

  // Fallback while fonts are loading
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Modal transparent={true} animationType="fade" visible={true}>
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={styles.header}>History</Text>
          <ScrollableHistory />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "#3E364A",
    padding: 30,
    width: 500,
    maxWidth: "90%", // Responsive width for smaller screens
    borderWidth: 5,
    borderColor: "#9083A5",
    borderRadius: 15,
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Shadow is effective for iOS
  },
  header: {
    fontSize: 24,
    color: "#f5eed5",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "VT323", // Apply custom font
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#FFC0CB",
    borderWidth: 2,
    borderColor: "#9083A5",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    fontFamily: "VT323", // Apply custom font
    fontSize: 20,
    color: "#FFFDED",
  },
});

export default History;
