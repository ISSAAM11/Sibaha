import React, { useState } from "react";
import {ImageBackground,TouchableOpacity, Text, View ,StyleSheet, Button, TextInput} from 'react-native';
import axios from 'axios';

export default function ForgotPassword( {navigation} ) {

    const [email, setEmail] = useState ()

    const SendEmail = (thisEmail) => {
        const email =  thisEmail
        axios.post('http://192.168.1.2:3000/reset-password-ByEmail/init', email).then(
            res => {
                console.log(res)
            },
        ).catch(
            err => {
                console.log( err)
            }
        )

    }

    const setEmailInput = (value) => {setEmail(value)}
return (
    <ImageBackground style={styles.container}
    source={require('../../assets/Background3.jpg')}>
        <Text style={styles.ForgotPasswordtitle} >Forgot Password</Text>
        
        <View style={styles.inputLogin}>     
            <Text style={styles.Enteryouremail} >Enter your email to receive an eamil to reset your password</Text>
            <TextInput 
                value={email}
                onChangeText={ val => setEmailInput(val) }
                style={styles.input} 
                placeholder='Email'> 
            </TextInput>
        </View>        
        <TouchableOpacity onPress={ ()=> SendEmail(email) }>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>Send</Text>
            </View>
        </TouchableOpacity> 
        <Text 
            onPress={() => navigation.goBack() }          
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
        margin :15,
        alignItems: 'center',
    },
    input:{
        borderRadius:20,
        borderWidth:1,
        borderColor:'#777',
        width: 300,
        padding: 5,
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15
    }, 
    ForgotPasswordtitle: {
        fontSize: 30,
        fontWeight:'bold',
        marginBottom: 45,
    },
    Enteryouremail:{
        marginBottom:10,
        paddingLeft:40,
        paddingRight:40
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
        marginBottom:15,
    },
    addText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
    },

});
      