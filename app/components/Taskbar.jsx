import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import NewEntryPopup from "./NewEntryPopup"; // Import the new popup component
import { useRecords } from "../components/recordsData"; // Import the hook for managing records
import Profile from "../Profile";
import History from "../History";

const Taskbar = () => {
  const [selectedButton, setSelectedButton] = useState(null); // Track which button is selected
  const { addRecord } = useRecords(); // Access addRecord from the shared context

  // Handle button press and popup toggling
  const handleButtonPress = (buttonName) => {
    setSelectedButton((prev) => (prev === buttonName ? null : buttonName));
  };

  return (
    <View style={styles.taskbar}>
      {/* History Button */}
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === "history" && styles.buttonActive,
        ]}
        onPress={() => handleButtonPress("history")}
      >
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>

      {/* New Entry Button */}
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === "newEntry" && styles.buttonActive,
        ]}
        onPress={() => handleButtonPress("newEntry")}
      >
        <Text style={styles.buttonText}>New Entry</Text>
      </TouchableOpacity>

      {/* Profile Button */}
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === "profile" && styles.buttonActive,
        ]}
        onPress={() => handleButtonPress("profile")}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>

      {/* Render Popups */}
      {selectedButton === "newEntry" && (
        <NewEntryPopup isOpen={true} onClose={() => setSelectedButton(null)} addRecord={addRecord} />
      )}
      {selectedButton === "history" && (
        <History onClose={() => setSelectedButton(null)} />
      )}
      {selectedButton === "profile" && (
        <Profile onClose={() => setSelectedButton(null)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  taskbar: {
    flexDirection: "row",
    justifyContent: "space-around", // Distribute buttons evenly
    alignItems: "center",
    padding: 20,
    zIndex: 0,
    position: "absolute",
    bottom: 0,
     // Optional taskbar background color
  },
  button: {
    width: Dimensions.get("window").width / 4, // Dynamic button width
    height: 60,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCB761",
  },
  buttonActive: {
    backgroundColor: "#f5eed5", // Highlight color for active button
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "VT323", // Ensure font is preloaded globally
    color: "#333",
  },
});

export default Taskbar;
