/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet} from 'react-native';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Reels from './src/screens/Reels';
import AddReel from './src/screens/AddReel';
import SplashPage from './src/screens/Splash';
import ResultPage from './src/screens/ResultPage';
import Profile from './src/screens/Profile';
import LeaderBoardPage from './src/screens/LeaderBoard';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashPage} />
        <Stack.Screen name="Result" component={ResultPage} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoardPage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Reels" component={Reels} />
        <Stack.Screen name="AddReel" component={AddReel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
