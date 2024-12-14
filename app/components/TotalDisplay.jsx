import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useRecords } from "./recordsData"; // Use the context hook
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";

const TotalDisplay = () => {
  const { calculateTotalAmount } = useRecords(); // Access the function to calculate the total amount
  const totalAmount = calculateTotalAmount(); // Dynamically calculate the total
  const [budget, setBudget] = useState(null);
  const [distanceFromGoal, setDistanceFromGoal] = useState(null);

  const [fontsLoaded] = useFonts({
    VT323: require("../../assets/fonts/VT323-Regular.ttf"), // Adjust the path as necessary
  });

  // Load the budget from AsyncStorage
  const loadBudget = async () => {
    try {
      const savedBudget = await AsyncStorage.getItem("userBudget");
      if (savedBudget !== null) {
        const budgetValue = parseFloat(savedBudget);
        if (!isNaN(budgetValue)) {
          setBudget(budgetValue);

          // Calculate the distance from the budget goal
          const distance = Math.abs(budgetValue - totalAmount);
          setDistanceFromGoal(distance);
        } else {
          Alert.alert("Error", "Saved budget is not a valid number.");
        }
      } else {
        setBudget(null);
        setDistanceFromGoal(null);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load budget.");
    }
  };

  // Load budget when component mounts
  useEffect(() => {
    loadBudget();
  }, []);

  // Recalculate the distance whenever the total amount or budget changes
  useEffect(() => {
    if (budget !== null) {
      const distance = Math.abs(budget - totalAmount);
      setDistanceFromGoal(distance);
    }
  }, [totalAmount, budget]);

  // Fallback while fonts are loading
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Net Balance:{" "}
        <Text style={[styles.text, { color: totalAmount < 0 ? "#FF6B6B" : "#4CAF50" }]}>
          ${totalAmount.toFixed(2)}
        </Text>
      </Text>
      {budget === null ? (
        <Text style={styles.subtext}>
          No budget set. Please set a budget in your profile to track your goal.
        </Text>
      ) : (
        distanceFromGoal !== null && (
          <Text style={styles.subtext}>
            {totalAmount >= 0
              ? `You are $${distanceFromGoal.toFixed(2)} away from your $${budget.toFixed(
                  2
                )} goal.`
              : `You are $${distanceFromGoal.toFixed(2)} away from your $${budget.toFixed(
                  2
                )} goal, considering your negative balance.`}
          </Text>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#3E364A",
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    color: "#f5eed5",
    fontFamily: "VT323", // Ensure consistent font usage
  },
  subtext: {
    fontSize: 20,
    color: "#f5eed5",
    fontFamily: "VT323", // Ensure consistent font usage
    marginTop: 10,
    textAlign: "center",
  },
});

export default TotalDisplay;
