import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import OnboardingScreen from './OnboardingScreen';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='OnboardingScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default index

const styles = StyleSheet.create({})
// https://medium.com/@gm_99/building-a-beautiful-onboarding-section-with-react-native-reanimated-39b7eec94892