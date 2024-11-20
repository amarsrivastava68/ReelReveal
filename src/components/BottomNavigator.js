import React from 'react';
import { View, StyleSheet , Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const BottomTabNavigator = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <View style={styles.tabContainer}>
        
        <Pressable onPress={() => {navigation.navigate('LeaderBoard')}} style={styles.iconContainer}>
          <Icon name="trophy" size={24} color="#000" />
        </Pressable>
        <Pressable onPress={() => {navigation.navigate('AddReel')}} style={styles.iconContainer}>
          <Icon name="plus-circle" size={24} color="#000" />
        </Pressable>
       
        <Pressable onPress={() => {navigation.navigate('Profile')}} style={styles.iconContainer}>
          <Icon name="user" size={24} color="#000" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1, 
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12
    ,
    backgroundColor: '#fff',
    
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomTabNavigator;