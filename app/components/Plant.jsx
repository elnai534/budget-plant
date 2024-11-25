import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const PlantImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/leaf.png')} // Ensure the path is correct
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  image: {
    
  },
});

export default PlantImage;
