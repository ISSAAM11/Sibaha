import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyStudents from './MyStudents';
const Stack = createNativeStackNavigator();

export class CoachStack extends Component {
  render() {
    return (
      <Stack.Navigator >
        <Stack.Screen name="MyStudents" component={MyStudents} options={{headerShown: false,}} />
      </Stack.Navigator>
    )
  }
}

export default CoachStack




