import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PlantImage = ({ totalAmount }) => {
  const [budget, setBudget] = useState(null);
  const [imageSource, setImageSource] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const savedBudget = await AsyncStorage.getItem("userBudget");
        if (savedBudget) setBudget(parseFloat(savedBudget));
      } catch (error) {
        console.error("Error fetching budget:", error);
      }
    };

    fetchBudget();
  }, []);

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

  return (
    <View style={styles.container}>
      {imageSource && (
        <>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.statusMessage}>{statusMessage}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 250,
    resizeMode: "contain",
  },
  statusMessage: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#f5eed5",
  },
});

export default PlantImage;
