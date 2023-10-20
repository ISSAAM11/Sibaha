import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyInformation from './MyInformation'
import AccountDetails from './AccountDetails'
import ChangePassword from './ChangePassword';

const Stack = createNativeStackNavigator()

const StackAccount = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name="AccountDetails" component={AccountDetails} options={{headerShown: false,}} />
        <Stack.Screen name="MyInformation"  component={MyInformation}  />
        <Stack.Screen name="ChangePassword" component={ChangePassword}  />
    </Stack.Navigator>
  )
}

export default StackAccount