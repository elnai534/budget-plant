import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Taskbar = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <View style={styles.taskbar}>
      {/* Section 1 */}
      <TouchableOpacity
        style={[
          styles.section,
          hoveredSection === 'history' && styles.hoveredSection,
        ]}
        onPress={() => alert('History clicked!')}
        onMouseEnter={() => setHoveredSection('history')}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <Text style={hoveredSection === 'history' ? styles.hoveredText : styles.text}>
          History
        </Text>
      </TouchableOpacity>

      {/* Section 2 */}
      <TouchableOpacity
        style={[
          styles.section,
          hoveredSection === 'newEntry' && styles.hoveredSection,
        ]}
        onPress={() => alert('New Entry clicked!')}
        onMouseEnter={() => setHoveredSection('newEntry')}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <Text style={hoveredSection === 'newEntry' ? styles.hoveredText : styles.text}>
          New Entry
        </Text>
      </TouchableOpacity>

      {/* Section 3 */}
      <TouchableOpacity
        style={[
          styles.section,
          hoveredSection === 'profile' && styles.hoveredSection,
        ]}
        onPress={() => alert('Profile clicked!')}
        onMouseEnter={() => setHoveredSection('profile')}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <Text style={hoveredSection === 'profile' ? styles.hoveredText : styles.text}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskbar: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderTopWidth: 3,
    borderTopColor: '#ddd',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  section: {
    paddingTop: 50,
    paddingBottom: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s',
  },
  hoveredSection: {
    backgroundColor: 'white', 
  },
  text: {
    fontSize: 32,
    color: '#ffffff',
    fontFamily: 'VT323, serif',
  },
  hoveredText: {
    fontSize: 32,
    color: '#000000', 
    fontFamily: 'VT323, serif',
  },
});

export default Taskbar;
