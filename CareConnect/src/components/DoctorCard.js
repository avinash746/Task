import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// DoctorCard component for rendering each doctor in the list
const DoctorCard = ({ doctor, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: doctor.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialization}>{doctor.specialization}</Text>
        <Text style={styles.details}>{doctor.experience} • {doctor.location}</Text>
        <Text style={styles.rating}>Rating: {doctor.rating} ({doctor.reviews} reviews)</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  specialization: {
    fontSize: 16,
    color: '#555',
    marginTop: 2,
  },
  details: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
  rating: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
});

export default DoctorCard;