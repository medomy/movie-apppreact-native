import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/home';
import BottomTabBarMain from './bottomTabs';
import MovieDetailsComponent from '../screens/details';
import SearchScreen from '../screens/searchScreen';

const StackNavigator = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName='root' screenOptions={({ route, navigation }) => (
        {
          headerShown: false
        }
      )}>
        <StackNavigator.Screen name='root' component={BottomTabBarMain} options={({ route, navigation }) => (
          {

          }
        )} />
        <StackNavigator.Screen name='details' component={MovieDetailsComponent} options={({ route, navigation }) => (
          {

          }
        )} />
        <StackNavigator.Screen name='search' component={SearchScreen} options={({ route, navigation }) => (
          {

          }
        )} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})