import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const countries = ['USA', 'India', 'UK', 'Australia'];

const AddReel = () => {
  
  const [reelName, setReelName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Select Country');
  const [description, setDescription] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownVisible(false);
  };

  const handleSubmit = () => {
    console.log({ reelName, selectedCountry, description });
    alert('Reel submitted successfully (Demo Only)');
  };

  const renderContent = () => (
    <>
      {/* Reel Name */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Reel Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter reel name"
          placeholderTextColor="#888"
          value={reelName}
          onChangeText={setReelName}
        />
      </View>

      {/* Country Dropdown */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Country:</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
          <Text style={styles.dropdownButtonText}>{selectedCountry}</Text>
        </TouchableOpacity>
        {dropdownVisible && (
          <FlatList
            data={countries}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => selectCountry(item)}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            )}
            style={styles.dropdownMenu}
          />
        )}
      </View>

      {/* Brief Description */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Brief Description:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter a brief description of the reel"
          placeholderTextColor="#888"
          value={description}
          onChangeText={setDescription}
          multiline
        />
      </View>

      {/* Video Upload Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Upload Reel Video:</Text>
        <TouchableOpacity style={styles.uploadPlaceholder}>
          <Text style={styles.uploadText}>Tap to Upload Video</Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <FlatList
      data={[{ key: 'content' }]}
      keyExtractor={(item) => item.key}
      renderItem={() => renderContent()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  dropdownContainer: {
    width: '100%',
    marginBottom: 20,
  },
  dropdownButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  dropdownButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  dropdownMenu: {
    backgroundColor: '#444',
    borderRadius: 5,
    marginTop: 5,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemText: {
    color: '#fff',
    fontSize: 16,
  },
  uploadPlaceholder: {
    height: 150,


    backgroundColor: '#333',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    color: '#888',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddReel;
