import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import UsersList from './screen/UserList';
import UsersDetailScreen from './screen/UserDetailScreen';
import CreateUserScreen from './screen/CreateUserScreen';

const MyStack =() =>
  <Stack.Navigator>
    <Stack.Screen name='createUser' component={CreateUserScreen}/>
    <Stack.Screen name='userList' component={UsersList}/>
    <Stack.Screen name='detailUser' component={UsersDetailScreen}/>
  </Stack.Navigator>

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  ); 
}
