import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Video from 'react-native-video';
import BottomTabNavigator from '../components/BottomNavigator';

const { width, height } = Dimensions.get('window');
const BOTTOM_NAV_HEIGHT = 60;

// Video array with URLs and locations
const videoData = [
  { url: require('../../assets/videos/vid1.mp4'), location: 'USA' },
  { url: require('../../assets/videos/vid2.mp4'), location: 'India' },
  { url: require('../../assets/videos/vid3.mp4'), location: 'UK' },
];

// List of answers
const answers = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'];

const Reels = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState('Select Answer');
  const [answerDropdownVisible, setAnswerDropdownVisible] = useState(false);

  const handleSwipe = ({ index }) => {
    setCurrentIndex(index);
  };

  const toggleCountryDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownVisible(false);
  };

  const toggleAnswerDropdown = () => {
    setAnswerDropdownVisible(!answerDropdownVisible);
  };

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
    setAnswerDropdownVisible(false);
  };

  // Filter videos based on selected country
  const filteredVideos = videoData.filter((video) => video.location === selectedCountry);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        {/* Video Section */}
        <View style={styles.videoContainer}>
          <SwiperFlatList
            autoplay={false}
            vertical
            showPagination={false}
            onChangeIndex={handleSwipe}
            data={filteredVideos}
            renderItem={({ item, index }) => (
              <View style={styles.slide}>
                <View style={styles.videoWrapper}>
                  <Video
                    source={item.url}
                    style={styles.video}
                    resizeMode="stretch"
                    repeat={true}
                    paused={currentIndex !== index}
                    onError={(error) => console.log('Video Error:', error)}
                  />
                </View>
              </View>
            )}
          />
        </View>

        {/* Bottom Navigator */}
        <View style={styles.bottomNav}>
          <BottomTabNavigator />
        </View>

        {/* Dropdown for selecting country */}
        <View style={styles.dropdownContainer}>
          <Text style={{ color: 'white' }}>Country:</Text>
          <TouchableOpacity style={styles.dropdownButton} onPress={toggleCountryDropdown}>
            <Text style={styles.dropdownButtonText}>{selectedCountry}</Text>
          </TouchableOpacity>
          {dropdownVisible && (
            <View style={styles.dropdownMenu}>
              <FlatList
                data={videoData.map((video) => video.location)}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => selectCountry(item)}
                  >
                    <Text style={styles.dropdownItemText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>

        {/* Dropdown for selecting answers */}
        <View style={styles.answerDropdownContainer}>
          <TouchableOpacity style={styles.answerDropdownButton} onPress={toggleAnswerDropdown}>
            <Text style={styles.answerDropdownButtonText}>{selectedAnswer}</Text>
          </TouchableOpacity>
          {answerDropdownVisible && (
            <View style={styles.answerDropdownMenu}>
              <FlatList
                data={answers}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.answerDropdownItem}
                    onPress={() => {selectAnswer(item);navigation.navigate('Result')}}
                  >
                    <Text style={styles.answerDropdownItemText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: BOTTOM_NAV_HEIGHT,
  },
  slide: {
    width,
    height: height - BOTTOM_NAV_HEIGHT,
    backgroundColor: '#1E1E1E',
  },
  videoWrapper: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: BOTTOM_NAV_HEIGHT,
    backgroundColor: 'transparent',
  },
  dropdownContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 120,
    zIndex: 10,
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
    marginTop: 5,
    backgroundColor: '#444',
    borderRadius: 5,
    overflow: 'hidden',
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemText: {
    color: '#fff',
    fontSize: 16,
  },
  answerDropdownContainer: {
    position: 'absolute',
    bottom: BOTTOM_NAV_HEIGHT + 50,
    alignSelf: 'center',
    width: 200,
  },
  answerDropdownButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  answerDropdownButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  answerDropdownMenu: {
    marginTop: 5,
    backgroundColor: '#444',
    borderRadius: 5,
    overflow: 'hidden',
  },
  answerDropdownItem: {
    padding: 15,
  },
  answerDropdownItemText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Reels;
