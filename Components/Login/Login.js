import React, { useState, useContext } from "react";
import {TouchableOpacity, Text, View ,StyleSheet,Image, Button, TextInput, ImageBackground} from 'react-native';
import axios from 'axios';
import { CheckBox } from "react-native-elements"
import { AuthContext } from '../../AuthContext';

export default function Login( {navigation} ) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState('');

    const [error, setError] = useState("");
    const [rememberMe, setRememberMe] = useState(false)
    const setEmailInput = (val) => {setEmail(val); setError("")}
    const sePasswordInput = (val) => {setPassword(val); setError("")}

   const { signIn } = useContext(AuthContext);

    const Login = () => {
        const data = {
            email,
            password
        }
        if(data.email == "" || data.email == null)
            setError("Provide your email")
        else if( data.password == "" || data.password ==null){
            setError("Provide your password")
            console.log(error)}
        else {
            signIn(data.email, data.password) 
        }
    }

    const RememberMeBtn = (value) => {
        console.log(value)
        setRememberMe(!value)
    }

    return (
        <ImageBackground style={styles.container}
        source={require('../../assets/Background3.jpg')}>
            <Text style={styles.LoginTitle} >Login </Text>

            <View style={styles.inputLogin}>     
                <TextInput 
                    style={styles.input} 
                    value={email}
                    onChangeText={val => setEmailInput(val)}
                    placeholder='Email'> 
                </TextInput>
                <TextInput 
                    style={styles.input} 
                    onChangeText={val => sePasswordInput(val)}
                    value={password} secureTextEntry={true}
                    placeholder='Password' >  
                </TextInput>
                <View style={{flexDirection: 'row',alignItems: 'center',}}>
                    <CheckBox 
                        onPress={()=> RememberMeBtn(rememberMe)}
                        checked={rememberMe}
                    />
                    <Text>Remember me</Text>
                </View>
                                {error.length > 0 &&
                    <Text style={styles.Error}>{error}</Text>
                } 
                <TouchableOpacity  onPress={() => Login()  }   >
                    <View 
                        style={styles.addWrapper}>
                        <Text style={styles.addText}>Login </Text>
                    </View>
                </TouchableOpacity> 
            <Text 
                style={styles.forgotPassword} 
                onPress={() => navigation.navigate("ForgotPassword") }          
            >Forgot Password?
            </Text>

            </View>
            <Text style={styles.noAccount} >Don't have account?
                <Text 
                    style={styles.SingUp}
                    onPress={() => navigation.navigate("SignUp") }          
                >  Sing up</Text>
            </Text>

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
        margin :15,
    },
    input:{
        borderRadius:20,
        borderWidth:1,
        borderColor:'#777',
        width: 300,
        padding: 5,
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
    }, 
    Error:{
        color:"red",
        marginBottom:10,
        alignSelf: 'center'
    },
    LoginTitle: {
        fontSize: 35,
        fontWeight:'bold',
        marginBottom: 60,
    },
    RememberMe:{
        marginTop:10,
        marginLeft:20
    },
    
    forgotPassword: {
        fontWeight: "bold",
        margin: 20,
        alignSelf: 'center',
        color: "blue",
        
    },
    noAccount:{
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
        marginBottom: 45
    },
    SingUp:{
        color: "blue",
        fontWeight: "bold",
    
    },
    
    addWrapper: {
        width:300,
        height:38,
        backgroundColor:'#2196f3',
        borderRadius:60,
        justifyContent: 'center',
        alignItems:'center'
    },
    addText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
    },
    
    SignupButton: {
        width:100,
        height:38,
        backgroundColor:'#2196f3',
        borderRadius:60,
        justifyContent: 'center',
        alignItems:'center'
    },
});
      