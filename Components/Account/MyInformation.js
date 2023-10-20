import React, {useEffect, useState} from "react";
import { Text, View ,StyleSheet,ScrollView, TouchableOpacity, TextInput,} from 'react-native';
import {MaterialCommunityIcons, FontAwesome5} from 'react-native-vector-icons/';

export default function MyInformation({ navigation }) {
    return(
        <View style={styles.container}> 
            <ScrollView style={{paddingVertical: 10}}>

            <View style={{marginBottom:10, paddingHorizontal:20}}>
                <Text>Name</Text>
                <View style={styles.input}>
                    <MaterialCommunityIcons name="account" size={25} color="#3d99ff" style={{paddingHorizontal:15}}/>
                    <TextInput style={{flex:1,height:40}} ></TextInput>
                </View>
            </View>
            <View style={{marginBottom:10, paddingHorizontal:20}}>
                <Text>LastName</Text>
                <View style={styles.input}>
                    <MaterialCommunityIcons name="account" size={25} color="#3d99ff" style={{paddingHorizontal:15}}/>
                    <TextInput style={{flex:1,height:40,}} ></TextInput>
                </View>
            </View>
            <View style={{marginBottom:10, paddingHorizontal:20}}>
                <Text>Email</Text>
                <View style={styles.input}>
                    <MaterialCommunityIcons name="email" size={25} color="#3d99ff" style={{paddingHorizontal:15}}/>
                    <TextInput style={{flex:1,height:40,}}></TextInput>
                </View>
            </View>
            <View style={{marginBottom:10, paddingHorizontal:20}}>
                <Text>Adress</Text>
                <View style={styles.input}>
                    <FontAwesome5 name="map-marker-alt" size={25} color="#3d99ff" style={{paddingHorizontal:15}}/>
                    <TextInput style={{flex:1, height:40,}}></TextInput>
                </View>
            </View>
            <View style={{marginBottom:10, paddingHorizontal:20}}>
                <Text>City</Text>
                <View style={styles.input}>
                    <FontAwesome5 name="map-marker-alt" size={25} color="#3d99ff" style={{paddingHorizontal:15}}/>
                    <TextInput style={{flex:1, height:40}}></TextInput>
                </View>
            </View>
            <View style={{marginBottom:20, paddingHorizontal:20}}>
                <Text>Postal code</Text>
                <View style={styles.input}>
                    <FontAwesome5 name="map-marker-alt" size={25} color="#3d99ff" style={{paddingHorizontal:15}}/>
                    <TextInput style={{flex:1, height:40}}></TextInput>
                </View>
            </View>
            
        </ScrollView>

            <View
                style={{ borderTopWidth:1, 
                    borderColor:"#bbb",
                    width:"100%",
                    height:70,
                    zIndex:10,
                    backgroundColor: '#fff',
                    padding: 10,         
                    justifyContent: 'center',
                    position:'absolute',
                    bottom:0
                }}>

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
        paddingBottom: 70
    },
    input:{
        flexDirection:"row",
        alignItems:"center",
        borderRadius:8,
        borderWidth:1,
        borderColor:'#888',
        width: '100%',
        height:40,
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
})