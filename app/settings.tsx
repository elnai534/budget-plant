import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";

const { height, width } = Dimensions.get("window"); // Get screen dimensions

interface SettingsProps {
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onClose }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [fontsLoaded] = useFonts({
    VT323: require("../assets/fonts/VT323-Regular.ttf"), // Ensure correct path
  });

  // Fallback for font loading
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.overlay, { height, width }]}>
      <View style={styles.popup}>
        {/* Exit Button */}
        <TouchableOpacity onPress={onClose} style={styles.exitButton}>
          <Text style={styles.exitButtonText}>✖</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Settings</Text>

        <View style={styles.item}>
          <Text style={styles.label}>Dark Mode:</Text>
          <TouchableOpacity onPress={() => setIsDarkMode((prev) => !prev)}>
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
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 998,
  },
  popup: {
    backgroundColor: "#3E364A",
    padding: 20,
    width: 350,
    borderWidth: 2,
    borderColor: "#9083A5",
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#f5eed5",
    textAlign: "center",
    fontFamily: "VT323", // Updated font usage
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: "#f5eed5",
    fontFamily: "VT323", // Updated font usage
  },
  toggleImage: {
    width: 50,
    height: 25,
    marginTop: 8,
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
    fontFamily: "VT323", // Updated font usage
  },
});

export default Settings;
