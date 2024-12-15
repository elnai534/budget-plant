import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";

const Profile = ({ onClose }) => {
  const [budget, setBudget] = useState("");
  const [name, setName] = useState(""); // State for Name
  const [email, setEmail] = useState(""); // State for Email
  const [fontsLoaded] = useFonts({
    VT323: require("../assets/fonts/VT323-Regular.ttf"), // Ensure the correct font path
  });

  // Load saved data (budget, name, email) when the modal is opened
  useEffect(() => {
    const loadData = async () => {
      try {
        const savedBudget = await AsyncStorage.getItem("userBudget");
        const savedName = await AsyncStorage.getItem("userName");
        const savedEmail = await AsyncStorage.getItem("userEmail");

        if (savedBudget) setBudget(savedBudget); // Load saved budget
        if (savedName) setName(savedName); // Load saved name
        if (savedEmail) setEmail(savedEmail); // Load saved email
      } catch (error) {
        Alert.alert("Error", "Failed to load user data.");
      }
    };
    loadData();
  }, []);

  // Save the budget, name, and email to AsyncStorage
  const saveData = async () => {
    if (!budget || isNaN(parseFloat(budget))) {
      Alert.alert("Error", "Please enter a valid numeric budget.");
      return;
    }
    if (!name || !email) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      await AsyncStorage.setItem("userBudget", budget);
      await AsyncStorage.setItem("userName", name);
      await AsyncStorage.setItem("userEmail", email);
      Alert.alert("Success", "Profile updated successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to save profile data.");
    }
  };

  // Fallback while fonts are loading
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Modal transparent={true} animationType="fade" visible={true}>
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Image
            source={{
              uri: "https://cdn4.iconfinder.com/data/icons/rounded-black-basic-ui/139/Profile01-RoundedBlack-512.png",
            }}
            style={styles.profilePicture}
          />
          <Text style={styles.heading}>Profile</Text>

          {/* Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#a9a9a9"
            value={name}
            onChangeText={setName}
          />

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#a9a9a9"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {/* Budget Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your budget"
            placeholderTextColor="#a9a9a9"
            keyboardType="numeric"
            value={budget}
            onChangeText={setBudget}
          />

          {/* Save Button */}
          <TouchableOpacity style={styles.saveButton} onPress={saveData}>
            <Text style={styles.saveButtonText}>Save Profile</Text>
          </TouchableOpacity>

          {/* Close Button */}
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
    borderWidth: 5,
    borderColor: "#9083A5",
    borderRadius: 15,
    textAlign: "center",
    alignItems: "center",
    width: 400,
    maxWidth: "90%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Shadow is effective for iOS
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#FFFDED",
  },
  heading: {
    marginBottom: 20,
    fontSize: 24,
    color: "#f5eed5",
    textAlign: "center",
    fontFamily: "VT323", // Updated to apply the custom font
  },
  input: {
    height: 40,
    borderColor: "#FFFDED",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "80%",
    color: "#FFFDED",
    backgroundColor: "#4A4452",
    fontFamily: "VT323", // Updated to apply the custom font
  },
  saveButton: {
    backgroundColor: "#57C785",
    borderWidth: 2,
    borderColor: "#9083A5",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  saveButtonText: {
    fontFamily: "VT323", // Updated to apply the custom font
    fontSize: 20,
    color: "#FFFDED",
  },
  closeButton: {
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
    fontFamily: "VT323", // Updated to apply the custom font
    fontSize: 20,
    color: "#FFFDED",
  },
});

export default Profile;
