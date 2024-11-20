// ResultPage.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const ResultPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.resultText}>Hurraay! Your answer was right! 🎉</Text>
        <Text style={styles.resultText}>5 coins 🪙</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.locationTitle}>Location Details</Text>
          <Text style={styles.label}>Country:</Text>
          <Text style={styles.value}>United States</Text>
          
          <Text style={styles.label}>Place:</Text>
          <Text style={styles.value}>Yellowstone National Park</Text>
          
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.description}>
            Yellowstone National Park is a natural wonder featuring dramatic canyons, 
            alpine rivers, lush forests, hot springs and gushing geysers, including 
            its most famous, Old Faithful. It's also home to hundreds of animal species, 
            including bears, wolves, bison, elk and antelope.
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Back to Reels</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  locationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: '#888',
    marginBottom: 5,
  },
  value: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
  backButton: {
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ResultPage;