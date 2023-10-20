import { Text, View } from 'react-native'
import React, { Component } from 'react'
import myAcademy from './MyAcademy';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export class MyAcademyStack extends Component {
  render() {
    return (
      <Stack.Navigator >
        <Stack.Screen name="myAcademy" component={myAcademy} options={{headerShown: false,}} />
      </Stack.Navigator>
    )
  }
}

export default MyAcademyStack