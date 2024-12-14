import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Settings = ({ onClose }) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.popup}>
        {/* Exit Button */}
        <TouchableOpacity onPress={onClose} style={styles.exitButton}>
          <Text style={styles.exitButtonText}>✖</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Settings</Text>

        {/* Volume Toggle */}
        <View style={styles.item}>
          <Text style={styles.label}>Volume:</Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/toggle-off.png")}
              style={styles.toggleImage}
            />
          </TouchableOpacity>
        </View>

        {/* Light Mode Toggle */}
        <View style={styles.item}>
          <Text style={styles.label}>Light Mode:</Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/toggle-on.png")}
              style={styles.toggleImage}
            />
          </TouchableOpacity>
        </View>

        {/* Dark Mode Toggle */}
        <View style={styles.item}>
          <Text style={styles.label}>Dark Mode:</Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/toggle-off.png")}
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
    padding: 30,
    width: 300,
    borderWidth: 5,
    borderColor: "#9083A5",
    borderRadius: 15,
    textAlign: "center",
    position: "relative",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#f5eed5",
    textAlign: "center",
    fontFamily: "VT323, serif",
  },
  item: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: "#f5eed5",
    fontFamily: "VT323, serif",
  },
  toggleImage: {
    width: 50,
    height: 25,
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
