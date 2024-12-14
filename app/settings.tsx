import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
interface SettingsProps {
  onClose: () => void; 
}
const Settings: React.FC<SettingsProps> = ({ onClose }) => {
  //const [isLightMode, setIsLightMode] = useState(true); 
  const [isDarkMode, setIsDarkMode] = useState(false); 
  return (
    <View style={styles.overlay}>
      <View style={styles.popup}>
        {/* Exit Button */}
        <TouchableOpacity onPress={onClose} style={styles.exitButton}>
          <Text style={styles.exitButtonText}>✖</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Settings</Text>
        
        <View style={styles.item}>
            <Text style={styles.label}>Dark Mode:</Text>
            <TouchableOpacity
            onPress={() => setIsDarkMode((prev) => !prev)}>
              <Image
                source={
                  isDarkMode
                    ? require("../assets/images/toggle-on.png")
                    : require("../assets/images/toggle-off.png")
                }
                style={styles.toggleImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "#3E364A",
    padding: 20,
    width: 350,
    borderWidth: 2,
    borderColor: "#9083A5",
    borderRadius: 10,
    alignItems: "center", 
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#f5eed5",
    textAlign: "center",
    fontFamily: "VT323, serif",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%", 
    paddingHorizontal: 15, 
    marginTop: 0,
  },
  label: {
    fontSize: 16,
    color: "#f5eed5",
    fontFamily: "VT323, serif",
  },
  toggleButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  toggleImage: {
    width: 50,
    height: 25,
    resizeMode: "contain", 
  },
  exitButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "transparent",
    padding: 5,
  },
  exitButtonText: {
    fontSize: 18,
    color: "#f5eed5",
  },
});

export default Settings;
