import React, { useState } from "react";
import {ImageBackground, TouchableOpacity,StyleSheet, Text, View , Button, TextInput} from 'react-native';
import { CheckBox } from "react-native-elements"
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown'

export default function SignUp({navigation}) {

  const [accept, setAccept] = useState(false)
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const AcceptBtn = (value) => {
    console.log(value)
    setAccept(!value)
  }

  const setEmailInput = (value) => {setEmail(value)}
  const setUsernameInput = (value) => {setUsername(value)}
  const setPasswordInput = (value) => {setPassword(value)}
  const setConfirmPasswordInput = (value) => {setConfirmPassword(value)}

  const SignUp = () => {
    const data = {
      username,
      email,
      password,
      role : 1
    }
    if(data.username == "" || data.username == null)
        setError("Provide your username")
    else if(data.email == "" || data.email == null)
        setError("Provide your email")
    else if( data.password == "" || data.password ==null)
        setError("Provide your password")
    else if( confirmPassword != data.password)
        setError("Incorrect password confirmation")
    else {
      axios.post("http://192.168.1.3:3000/users", data).then(
        res => { 
          setError("Success")
          console.log(res)
          navigation.navigate("Login") 
      })   
        .catch(err => {
          console.log(err)
          setError("Incorrect credentials")
          alert(JSON.stringify("Incorrect credentials"))
      })   
    }
  }


    const countries = ["User", "Coach", "academy Admin"]

  return (
  <ImageBackground style={styles.container} source={require('../../assets/Background3.jpg')}>
    <Text style={styles.LoginText} >Sign up</Text>
    <View style={styles.inputLogin}>      

      <TextInput 
        value={username}
        onChangeText={val => setUsernameInput(val)}  
        style={styles.input} 
        placeholder='Username'> 
      </TextInput>
      <TextInput 
        value={email}
        onChangeText={val => setEmailInput(val)}      
        style={styles.input} 
        placeholder='Email' >  
      </TextInput>
      <TextInput 
        value={password}
        onChangeText={val => setPasswordInput(val)}      
        style={styles.input} 
        placeholder='Password' >  
      </TextInput>
      <TextInput 
        value={confirmPassword}
        onChangeText={val => setConfirmPasswordInput(val)}   
        style={styles.input} 
        placeholder='Confirm password' >  
      </TextInput>

      <SelectDropdown
        data={countries}
        defaultButtonText="Account type"
        onSelect={(selectedItem, index) => {console.log(selectedItem, index)}}
        buttonTextAfterSelection={(selectedItem, i) => {return "Account: " + selectedItem}}
        rowTextForSelection={(item, i) => {return item}}
        buttonStyle={{backgroundColor: 'rgba(0, 0, 0, 0.1)',
          borderRadius:20,
          borderWidth:1,
          borderColor:'#777',
          width: 300,
          height:43,
          padding: 7,
          marginTop: 10,
          paddingLeft: 15,
          paddingRight: 15
        }}
        buttonTextStyle={{fontSize: 15}}
        rowTextStyle={{fontSize: 15}}
      />

      <View style={{flexDirection: 'row',alignItems: 'center',}}>
        <CheckBox         
          onPress={()=> AcceptBtn(accept)}
          checked={accept}
        />
        <Text>Accept privacy policy</Text>
      </View>
    </View>
    {error.length > 0 && <Text style={styles.Error}>{error}</Text>}
    <TouchableOpacity onPress={()=> SignUp()}>
      <View style={styles.addWrapper}>
      <Text style={styles.addText}>Sign up</Text>
      </View>
    </TouchableOpacity> 
    <Text 
      onPress={() => navigation.goBack()}          
      style={styles.Back}
    >Back</Text>


  </ImageBackground>
  )   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLogin:{
    margin :30
  },
  input:{
    borderRadius:20,
    borderWidth:1,
    borderColor:'#777',
    width: 300,
    padding: 7,
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15
  }, 
  CheckBox:{
    margin:20
  },
  LoginText: {
    fontSize: 35,
    fontWeight:'bold',
    marginBottom: 25,
  },
  RememberMe:{
    marginTop:10,
    marginLeft:20
  },

  forgotPassword: {
    fontWeight: "bold",
    margin: 20,
    alignItems: 'center',
    color: "blue",

  },
  noAccount:{
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    marginBottom: 45
  },
  Back:{
    color: "blue",
    fontWeight: "bold",
    marginLeft : 250,
    marginTop : 20

  },

  addWrapper: {
    width:300,
    height:38,
    backgroundColor:'#2196f3',
    borderRadius:60,
    justifyContent: 'center',
    alignItems:'center',
    marginBottom: 15,
    
  },
  addText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  Error:{
    color:"red",
    marginBottom:10
  },
});
  