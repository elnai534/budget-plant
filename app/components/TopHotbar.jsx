import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Settings from "../settings"; // Import the Settings popup

const TopHotbar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Track Settings popup state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("FAQ"); // Tracks which section is active (FAQ or Help)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <View style={styles.container}>
      {/* Hamburger Button */}
      <TouchableOpacity onPress={toggleSidebar} style={styles.hamburgerTouchable}>
        <Image
          source={require("../../assets/images/hamburgericon.png")}
          style={styles.hamburgericon}
        />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.text}>BUDGET PLANT</Text>

      {/* Cogwheel Icon */}
      <TouchableOpacity onPress={toggleSettings} style={styles.cogwheelTouchable}>
        <Image
          source={require("../../assets/images/cogwheel.png")}
          style={styles.cogwheel}
        />
      </TouchableOpacity>

      {/* Sidebar */}
      {isSidebarOpen && (
        <View style={styles.sidebar}>
          {/* Close Button */}
          <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>✖</Text>
          </TouchableOpacity>

          {/* Navigation Buttons */}
          <View style={styles.navButtons}>
            <TouchableOpacity
              onPress={() => setActiveSection("FAQ")}
              style={[
                styles.navButton,
                activeSection === "FAQ" && styles.activeNavButton,
              ]}
            >
              <Text style={styles.navButtonText}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveSection("Help")}
              style={[
                styles.navButton,
                activeSection === "Help" && styles.activeNavButton,
              ]}
            >
              <Text style={styles.navButtonText}>Help</Text>
            </TouchableOpacity>
          </View>

          {/* Content Based on Active Section */}
          {activeSection === "FAQ" && (
            <View>
              <Text style={styles.sidebarTitle}>FAQ</Text>
              <Text style={styles.sidebarItem}>Question 1: Answer to question 1.</Text>
              <Text style={styles.sidebarItem}>Question 2: Answer to question 2.</Text>
              <Text style={styles.sidebarItem}>Question 3: Answer to question 3.</Text>
            </View>
          )}
          {activeSection === "Help" && (
            <View>
              <Text style={styles.sidebarTitle}>Help</Text>
              <Text style={styles.sidebarItem}>Help Topic 1: Details about help topic 1.</Text>
              <Text style={styles.sidebarItem}>Help Topic 2: Details about help topic 2.</Text>
              <Text style={styles.sidebarItem}>Help Topic 3: Details about help topic 3.</Text>
            </View>
          )}
        </View>
      )}

      {/* Settings Popup */}
      {isSettingsOpen && <Settings onClose={() => setIsSettingsOpen(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginBottom: "auto",
  },
  text: {
    fontFamily: "VT323, serif",
    fontSize: 96,
    fontWeight: "bold",
    color: "#f5eed5",
  },
  cogwheelTouchable: {
    position: "absolute",
    top: 15,
    right: 25,
  },
  cogwheel: {
    width: 75,
    height: 75,
  },
  hamburgerTouchable: {
    position: "absolute",
    top: 15,
    left: 25,
  },
  hamburgericon: {
    width: 50,
    height: 75,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    left: 1,
    width: 300,
    height: 1277,
    backgroundColor: "#4f455e",
    padding: 20,
    zIndex: 1000,
  },
  sidebarTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f5eed5",
    marginBottom: 20,
    fontFamily: "VT323, serif",
  },
  sidebarItem: {
    fontSize: 20,
    color: "#f5eed5",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "VT323, serif",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: "#f5eed5",
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: "#4f455e",
    padding: 10,
    borderRadius: 5,
  },
  activeNavButton: {
    backgroundColor: "#555",
  },
  navButtonText: {
    color: "#f5eed5",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "VT323, serif",
  },
});

export default TopHotbar;
