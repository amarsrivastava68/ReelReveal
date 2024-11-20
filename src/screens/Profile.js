import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';

const Profile = () => {
  const screenWidth = Dimensions.get('window').width;

  const reels = [
    { id: '1', thumbnail: 'https://via.placeholder.com/100' },
    { id: '2', thumbnail: 'https://via.placeholder.com/100' },
    { id: '3', thumbnail: 'https://via.placeholder.com/100' },
    { id: '4', thumbnail: 'https://via.placeholder.com/100' },
    { id: '5', thumbnail: 'https://via.placeholder.com/100' },
    { id: '6', thumbnail: 'https://via.placeholder.com/100' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.username}>@PlayerOne</Text>

      {/* Profile Info Section */}
      <View style={styles.profileInfo}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profilePic}
        />
        <View style={styles.stats}>
          <Text style={styles.statNumber}>15</Text>
          <Text style={styles.statLabel}>Reels</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statNumber}>1200</Text>
          <Text style={styles.statLabel}>Points</Text>
        </View>
      </View>

      {/* Full Name */}
      <Text style={styles.fullName}>John Doe</Text>

      {/* Reels Section */}
      <FlatList
        data={reels}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.thumbnail }}
            style={{
              width: screenWidth / 3 - 10,
              height: screenWidth / 3 - 10,
              margin: 5,
              borderRadius: 10,
            }}
          />
        )}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#343a40',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#6c757d',
  },
  stats: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#495057',
  },
  statLabel: {
    fontSize: 14,
    color: '#868e96',
  },
  fullName: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#212529',
  },
  grid: {
    justifyContent: 'center',
  },
});
