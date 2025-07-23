import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import DoctorCard from '../components/DoctorCard';
import SearchBar from '../components/SearchBar';
import doctorsData from '../assets/doctors.json';

// DoctorListScreen to display and filter doctors
const DoctorListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter doctors based on search query
  const filteredDoctors = doctorsData.filter(
    doctor =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      <FlatList
        data={filteredDoctors}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <DoctorCard
            doctor={item}
            onPress={() => navigation.navigate('DoctorDetail', { doctor: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default DoctorListScreen;