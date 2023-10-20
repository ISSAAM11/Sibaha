import { Text, View, StyleSheet,TouchableOpacity, StatusBar, TextInput} from 'react-native'
import React, { Component, useState } from 'react'
import {FontAwesome5,Feather,AntDesign} from 'react-native-vector-icons/'

const Search = ({route,navigation}) => {
  const {searchtype} = route?.params;

  const [searchValue, setSearchValue] = useState("")
  const CityList = ["Dubai","Abou Dabi","Charjah","Ras el Khaïmah","Oumm al Qaïwaïn" ]

  const Search = (searchtype) => {
    if(searchtype == "Academy name")
      navigation.navigate('AcademyList',{searchValue:searchValue})
    else if(searchtype == "Pool name")
      navigation.navigate('PoolList',{searchValue:searchValue})
    else if(searchtype == "Coach name")
      navigation.navigate('CoachList',{searchValue:searchValue})
    else if(searchtype == "Your city")
      navigation.navigate('AcademyList',{searchValue:searchValue})
  }
    return (
      <View style={styles.container}>
        <View style={styles.ViewSearchByArea}>

            <AntDesign name="left" size={35} color="#000" 
                onPress={() => navigation.goBack()} 
                style={styles.backButton}
            />

            <Text style={{fontWeight:'700'}}>{searchtype}</Text>
            <View  style={[styles.search,styles.rowCenterContent, {margin:10}]}>
                <Feather name="search" size={25} color={"#555"} style={{marginRight:10}} 
                         onPress={()=>{Search(searchtype)}} />
                <TextInput placeholder={"Search"} 
                    onChangeText={val => setSearchValue(val)}
                    value={searchValue}
                    style={{flex:1,height:'100%' ,}}
                ></TextInput>
            </View>  
{/*
            <TouchableOpacity  onPress={()=>navigation.navigate("Map",)}
            style={[styles.nearToMe,styles.rowCenterContent,{justifyContent:"center"}]}>
                <FontAwesome5 style={{paddingHorizontal:4}} name="map-marker-alt" size={20} color={"#555"} />
                <Text>Near to me</Text>
            </TouchableOpacity>  
*/}            
        </View>
      </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight     
    },
    search:{
        width:250,
        height:50,
        borderWidth:1,
        borderColor: "#111",
        borderRadius:50
      },
      nearToMe:{
        width:140,
        height:37,
        borderWidth:1,
        borderColor: "#111",
        borderRadius:50
      },
      ViewSearchByArea:{
        alignItems:"center",
        alignContent:"center"
      },
      rowCenterContent:{
        flexDirection:"row",  
        justifyContent: "flex-start",
        alignItems:"center",
        paddingHorizontal:12,
      },
      backButton:{
        borderRadius:50,
        height:37,
        width: 40,
        backgroundColor:"#fff",
        margin: 15,
        alignSelf:"flex-start"
    },
})  