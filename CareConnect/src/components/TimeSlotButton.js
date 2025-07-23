import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// TimeSlotButton component for selecting time slots
const TimeSlotButton = ({ time, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isSelected ? styles.selected : {}]}
      onPress={onPress}
    >
      <Text style={[styles.text, isSelected ? styles.selectedText : {}]}>
        {time}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
    margin: 5,
  },
  selected: {
    backgroundColor: '#007bff',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    color: '#fff',
  },
});

export default TimeSlotButton;