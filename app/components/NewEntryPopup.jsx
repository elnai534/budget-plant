import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const NewEntryPopup = ({ isOpen, onClose, addRecord }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleAddRecord = () => {
    if (!title || !amount || !category || !description) {
      alert("All fields are required!");
      return;
    }

    if (isNaN(amount)) {
      alert("Amount must be a valid number!");
      return;
    }

    addRecord({
      title,
      amount: parseFloat(amount),
      category,
      description,
    });

    setTitle("");
    setAmount("");
    setCategory("");
    setDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <View style={styles.popupOverlay}>
      <ScrollView contentContainerStyle={styles.popupContent}>
        <Text style={styles.header}>New Entry</Text>
        <View style={styles.formSection}>
          <Text style={styles.label}>Title:</Text>
          <TextInput
            style={styles.inputField}
            value={title}
            onChangeText={setTitle}
            placeholder="Enter title"
            placeholderTextColor="#ccc"
          />
          <Text style={styles.label}>Amount:</Text>
          <TextInput
            style={styles.inputField}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholder="Enter amount"
            placeholderTextColor="#ccc"
          />
          <Text style={styles.label}>Category:</Text>
          <TextInput
            style={styles.inputField}
            value={category}
            onChangeText={setCategory}
            placeholder="Enter category"
            placeholderTextColor="#ccc"
          />
          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.textareaField}
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
            placeholder="Enter description"
            placeholderTextColor="#ccc"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAddRecord}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  popupOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popupContent: {
    backgroundColor: "#3E364A",
    padding: 20,
    borderWidth: 5,
    borderColor: "#9083A5",
    borderRadius: 15,
    width: "90%",
    maxWidth: 500,
    textAlign: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  header: {
    marginBottom: 20,
    fontSize: 24,
    color: "#fff",
    fontFamily: "VT323, serif",
    textAlign: "center",
  },
  formSection: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
    fontFamily: "VT323, serif",
  },
  inputField: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 8,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#9083A5",
    fontFamily: "VT323, serif",
  },
  textareaField: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 8,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#9083A5",
    fontFamily: "VT323, serif",
    textAlignVertical: "top",
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  addButton: {
    backgroundColor: "#AFE593",
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#9083A5",
    flex: 0.45,
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#FFC0CB",
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#9083A5",
    flex: 0.45,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFDED",
    fontFamily: "VT323, serif",
  },
});

export default NewEntryPopup;
