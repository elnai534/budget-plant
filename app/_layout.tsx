import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Load Google Fonts
  const [fontsLoaded] = useFonts({
    VT323: require("../assets/fonts/VT323-Regular.ttf"),
    "JosefinSans-Light": require("../assets/fonts/JosefinSans-Light.ttf"),
    "JosefinSans-Bold": require("../assets/fonts/JosefinSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    // Show a loading spinner until fonts are ready
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9083A5" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3E364A", // Optional: Match your app's background color
  },
});
