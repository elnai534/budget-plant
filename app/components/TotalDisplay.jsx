import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, Image } from "react-native";
import { useRecords } from "./recordsData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";

const TotalDisplay = () => {
  const { calculateTotalAmount } = useRecords();
  const totalAmount = calculateTotalAmount();
  const [budget, setBudget] = useState(null);
  const [distanceFromGoal, setDistanceFromGoal] = useState(null);
  const [imageSource, setImageSource] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const [fontsLoaded] = useFonts({
    VT323: require("../../assets/fonts/VT323-Regular.ttf"),
  });

  // Load the budget from AsyncStorage
  const loadBudget = async () => {
    try {
      const savedBudget = await AsyncStorage.getItem("userBudget");
      if (savedBudget !== null) {
        const budgetValue = parseFloat(savedBudget);
        if (!isNaN(budgetValue)) {
          setBudget(budgetValue);
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

  // Recalculate distance and determine image based on budget and total amount
  useEffect(() => {
    if (budget !== null) {
      const adjustedBudget = Number(budget) + Number(totalAmount);
      const calculatedPercentage = (adjustedBudget / budget) * 100;

      // Determine the plant image and status message
      if (calculatedPercentage >= 100) {
        setImageSource(require("../../assets/images/flower.png"));
        setStatusMessage("Your Flower is Blooming & Thriving and so is Your Budget!");
      } else if (calculatedPercentage < 100 && calculatedPercentage >= 80) {
        setImageSource(require("../../assets/images/leaf.png"));
        setStatusMessage("Your Plant is in Good Condition! Keep it Healthy!");
      } else if (calculatedPercentage < 80 && calculatedPercentage >= 50) {
        setImageSource(require("../../assets/images/dyingleft1.png"));
        setStatusMessage("Uh Oh! Your Plant and Budget are Starting to Look Bad!");
      } else if (calculatedPercentage < 50 && calculatedPercentage >= 20) {
        setImageSource(require("../../assets/images/dyingleef.png"));
        setStatusMessage("Your Budget is Struggling and So is Your Plant!");
      } else {
        setImageSource(require("../../assets/images/dead.png"));
        setStatusMessage("Things Aren't Looking Too Good! Your Plant Has Withered!");
      }
    }
  }, [budget, totalAmount]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Image and Status Message */}
      {imageSource && (
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.statusMessage}>{statusMessage}</Text>
        </View>
      )}
      
      {/* Net Balance */}
      <Text style={styles.text}>
        Net Balance:{" "}
        <Text style={[styles.text, { color: totalAmount < 0 ? "#FF6B6B" : "#4CAF50" }]}>
          ${totalAmount.toFixed(2)}
        </Text>
      </Text>

      {/* Distance from Goal */}
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
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 250,
    resizeMode: "contain",
  },
  statusMessage: {
    marginTop: 10,
    fontSize: 16,
    color: "#f5eed5",
    textAlign: "center",
  },
  text: {
    fontSize: 36,
    color: "#f5eed5",
    fontFamily: "VT323",
    marginTop: 10,
  },
  subtext: {
    fontSize: 20,
    color: "#f5eed5",
    fontFamily: "VT323",
    marginTop: 10,
    textAlign: "center",
  },
});

export default TotalDisplay;
