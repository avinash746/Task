import React, { useState } from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import TimeSlotButton from '../components/TimeSlotButton';
import { addBooking } from '../store/slices/bookingSlice';

// Static time slots
const timeSlots = ['10:00 AM', '12:00 PM', '2:00 PM'];

// DoctorDetailScreen for viewing details and booking
const DoctorDetailScreen = ({ route }) => {
  const { doctor } = route.params;
  const [selectedTime, setSelectedTime] = useState(null);
  const dispatch = useDispatch();

  // Handle booking action
  const handleBooking = async () => {
    if (!selectedTime) {
      Toast.show({
        type: 'error',
        text1: 'Please select a time slot',
      });
      return;
    }

    const booking = {
      id: `${doctor.id}_${Date.now()}`,
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialization: doctor.specialization,
      timeSlot: selectedTime,
      date: new Date().toISOString(),
    };

    try {
      // Store booking in AsyncStorage
      const existingBookings = await AsyncStorage.getItem('bookings');
      const bookings = existingBookings ? JSON.parse(existingBookings) : [];
      bookings.push(booking);
      await AsyncStorage.setItem('bookings', JSON.stringify(bookings));

      // Update Redux store
      dispatch(addBooking(booking));

      // Show success toast
      Toast.show({
        type: 'success',
        text1: 'Booking Confirmed',
        text2: `Appointment with ${doctor.name} at ${selectedTime}`,
      });

      // Reset selected time
      setSelectedTime(null);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error saving booking',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: doctor.image }} style={styles.image} />
      <Text style={styles.name}>{doctor.name}</Text>
      <Text style={styles.specialization}>{doctor.specialization}</Text>
      <Text style={styles.details}>{doctor.experience} • {doctor.location}</Text>
      <Text style={styles.rating}>Rating: {doctor.rating} ({doctor.reviews} reviews)</Text>
      
      <Text style={styles.sectionTitle}>Available Time Slots</Text>
      <FlatList
        data={timeSlots}
        keyExtractor={item => item}
        horizontal
        renderItem={({ item }) => (
          <TimeSlotButton
            time={item}
            isSelected={selectedTime === item}
            onPress={() => setSelectedTime(item)}
          />
        )}
        style={styles.timeSlotList}
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Book Appointment" onPress={handleBooking} color="#007bff" />
      </View>
      
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  specialization: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    marginTop: 4,
  },
  details: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
    marginTop: 4,
  },
  rating: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
    marginTop: 4,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  timeSlotList: {
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default DoctorDetailScreen;