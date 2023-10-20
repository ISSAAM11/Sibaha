import React, {useEffect, useState} from "react";
import { Text, View ,StyleSheet,SafeAreaView, TouchableOpacity, TextInput,} from 'react-native';

export default function ChangePassword({ navigation }) {
    return(
        <View style={styles.container}> 

            <View style={{marginBottom:30, paddingHorizontal:20}}>
                <View style={{flexDirection: 'row',alignItems:'center',justifyContent: "space-between", marginBottom:15 }}>
                    <Text style={{fontWeight:'bold', fontSize: 20}}>Old password</Text>
                    <View style={styles.redLine}></View>
                </View>
                
                <View style={styles.input}>
                    <TextInput style={styles.inputText}
                        placeholder='Your current password'> 
                    </TextInput>
                </View>
            </View>
            
            <View style={{marginBottom:10, paddingHorizontal:20}}>
                <View style={{flexDirection: 'row',alignItems:'center',justifyContent: "space-between", marginBottom:15 }}>
                    <Text style={{fontWeight:'bold', fontSize: 20}}>New password</Text>
                    <View style={styles.redLine}></View>
                </View>

                <View style={styles.input}>
                    <TextInput style={styles.inputText}
                        placeholder='New password'>
                    </TextInput>
                </View>
                <View style={styles.input}>
                    <TextInput style={styles.inputText}
                        placeholder='Confirm new password'>
                    </TextInput>
                </View>
            </View>

 

            <View style={styles.footerSave} >
                <TouchableOpacity style={styles.btnReserve} >
                    <Text style={{color:"white"}}> Save </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',     
        paddingVertical:20
    },
    input:{
        flexDirection:"row",
        alignItems:"center",
        borderRadius:8,
        borderWidth:1,
        borderColor:'#888',
        width: '100%',
        height:45,
        marginTop: 5,
    },
    btnReserve:{
        height:50,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        alignItems:'center', 
        justifyContent: 'center',
        backgroundColor:"#3d99ff"
    },
    inputText:{
        flex:1,
        height:35, 
        marginHorizontal:20,
    },

    footerSave:{ borderTopWidth:1, 
        borderColor:"#bbb",
        width:"100%",
        height:70,
        zIndex:10,
        backgroundColor: '#fff',
        padding: 10,         
        justifyContent: 'center',
        position:'absolute',
        bottom:0
    },
    redLine:{
        flex:1,
        marginLeft:25, 
        borderWidth:2, 
        borderColor: "#3d99ff", 
    }
})