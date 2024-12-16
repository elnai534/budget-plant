import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const slideAnim = new Animated.Value(-300); // Initial position of sidebar

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Hamburger Button */}
      <TouchableOpacity style={styles.hamburgerButton} onPress={toggleSidebar}>
        <Text style={styles.hamburgerText}>☰</Text>
      </TouchableOpacity>

      {/* Sidebar */}
      <Animated.View
        style={[
          styles.sidebar,
          { left: slideAnim }, // Bind the animated value to the sidebar's position
        ]}
      >
        <TouchableOpacity style={styles.closeButton} onPress={toggleSidebar}>
          <Text style={styles.closeText}>✖</Text>
        </TouchableOpacity>
        <Text style={styles.sidebarHeader}>FAQ</Text>
        <View style={styles.sidebarContent}>
          <Text style={styles.sidebarItem}>
            <Text style={styles.bold}>Question 1: How do I set or update my budget?</Text> Go to the Profile section, find the budget input field, enter your desired budget, and tap "Save Budget.
          </Text>
          <Text style={styles.sidebarItem}>
            <Text style={styles.bold}>Question 2:</Text> Answer to question 2.
          </Text>
          <Text style={styles.sidebarItem}>
            <Text style={styles.bold}>Question 3:</Text> Answer to question 3.
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  hamburgerButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1000,
    backgroundColor: 'transparent',
  },
  hamburgerText: {
    fontSize: 24,
    color: '#333',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: -300,
    width: 300,
    height: Dimensions.get('window').height,
    backgroundColor: '#333',
    zIndex: 999,
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeText: {
    fontSize: 24,
    color: 'white',
  },
  sidebarHeader: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  sidebarContent: {
    flex: 1,
  },
  sidebarItem: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Sidebar;
