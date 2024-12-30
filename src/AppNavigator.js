import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Movies' }} />
    <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Search Movies' }} />
    <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Movie Details' }} />
  </Stack.Navigator>
);

export default AppNavigator;
