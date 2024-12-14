import React from "react";
import { View, Text, StyleSheet, Modal, Image, TouchableOpacity } from "react-native";

const Profile = ({ onClose }: { onClose: () => void }) => {
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
          <View style={styles.details}>
            <Text>
              <Text style={styles.label}>Name:</Text> John Doe
            </Text>
            <Text>
              <Text style={styles.label}>Email:</Text> john.doe@example.com
            </Text>
            <Text>
              <Text style={styles.label}>Joined:</Text> January 2024
            </Text>
          </View>
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
    fontFamily: "VT323, serif",
  },
  details: {
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    color: "#f5eed5",
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
    fontFamily: "VT323, serif",
    fontSize: 20,
    color: "#FFFDED",
  },
});

export default Profile;
