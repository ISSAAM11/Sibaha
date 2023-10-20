import { Text, View ,ActivityIndicator} from 'react-native'
import React, { Component } from 'react'

export class SplashScreen extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: "center"}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

export default SplashScreen