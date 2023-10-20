import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const Stack = createNativeStackNavigator();

  const LoginStack = () => {
    return (
      <Stack.Navigator >
          <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}  /> 
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false,}} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false,}} />
      </Stack.Navigator >
    )
}

export default LoginStack