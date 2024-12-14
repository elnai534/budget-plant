import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import NewEntryPopup from "./NewEntryPopup"; // Import the new popup component
import { useRecords } from "../components/recordsData"; // Import the hook for managing records
import Profile from "../Profile";
import History from "../History";

const Taskbar = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null); // To track hover state

  const { addRecord } = useRecords(); // Access addRecord from the shared context

  const toggleHistoryPopup = () => {
    setIsHistoryOpen(!isHistoryOpen);
    setIsProfileOpen(false);
    setIsNewEntryOpen(false);
  };

  const toggleProfilePopup = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsHistoryOpen(false);
    setIsNewEntryOpen(false);
  };

  const toggleNewEntryPopup = () => {
    setIsNewEntryOpen(!isNewEntryOpen);
    setIsProfileOpen(false);
    setIsHistoryOpen(false);
  };

  const getButtonStyle = (buttonName) => ({
    backgroundColor: hoveredButton === buttonName ? "#f5eed5" : "#FCB761",
    color: hoveredButton === buttonName ? "#000" : "#FFF",
    ...styles.button,
  });

  return (
    <View style={styles.taskbar}>
      {/* History Button */}
      <TouchableOpacity
        style={getButtonStyle("history")}
        onPress={toggleHistoryPopup}
        onPressIn={() => setHoveredButton("history")}
        onPressOut={() => setHoveredButton(null)}
      >
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>

      {/* New Entry Button */}
      <TouchableOpacity
        style={getButtonStyle("newEntry")}
        onPress={toggleNewEntryPopup}
        onPressIn={() => setHoveredButton("newEntry")}
        onPressOut={() => setHoveredButton(null)}
      >
        <Text style={styles.buttonText}>New Entry</Text>
      </TouchableOpacity>

      {/* Profile Button */}
      <TouchableOpacity
        style={getButtonStyle("profile")}
        onPress={toggleProfilePopup}
        onPressIn={() => setHoveredButton("profile")}
        onPressOut={() => setHoveredButton(null)}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>

      {/* Render Popups */}
      <NewEntryPopup isOpen={isNewEntryOpen} onClose={toggleNewEntryPopup} addRecord={addRecord} />
      {isHistoryOpen && <History onClose={toggleHistoryPopup} />}
      {isProfileOpen && <Profile onClose={toggleProfilePopup} />}
    </View>
  );
};

const styles = StyleSheet.create({
  taskbar: {
    flexDirection: "row", // Align buttons horizontally
    justifyContent: "center",
    alignItems: "center",
    gap: 20, // Use `gap` with React Native >= 0.71 or Expo SDK >= 49
    padding: 20,
  },
  button: {
    width: "30%",
    height: 75,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "VT323, serif", // Ensure you load this font in your project
    color: "#FFF", // Default button text color
  },
});

export default Taskbar;
