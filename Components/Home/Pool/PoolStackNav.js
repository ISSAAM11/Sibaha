import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Review from './Review';
import DetailsPool from './DetailsPool'

const Stack = createNativeStackNavigator();

const PoolStackNav = () => {
  return (
    <Stack.Navigator >
      {/* <Stack.Screen name="DetailsPool" component={DetailsPool} options={{headerShown: false}}/> */}
      <Stack.Screen name="Review" component={Review}  />
    </Stack.Navigator>
  )
}

export default PoolStackNav