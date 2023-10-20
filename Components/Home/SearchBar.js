import { Text, Image, View ,StyleSheet,SafeAreaView, FlatList, TouchableOpacity, TextInput, StatusBar,} from 'react-native';
import React, {useEffect, useState} from "react";
import {FontAwesome,AntDesign,MaterialCommunityIcons,Feather,FontAwesome5} from 'react-native-vector-icons/'

const SearchBar = (props) => {

  return (
    <View style={styles.container}>
        <View style={styles.SearchView}>
            <View style={{flexDirection:"row" ,justifyContent: "space-between", alignItems:"center",}}>
                <AntDesign name="left" size={45} color="#000" 
                    onPress={() => props.navigation.navigate("HomeRoot")}                 
                    style={styles.backButton}
                />
                <View style={{flex:1,height:100, }}>
                
                    <TouchableOpacity  onPress={()=> props.navigation.goBack() }
                        style={[styles.search,styles.rowCenterContent, {marginBottom:10,marginTop:5}]}>
                        <Feather name="search" size={25} color={"#555"} style={{marginRight:10}} />
                        <Text style={{alignSelf:"center",}}> 
                            {props.searchValue} 
                        </Text>
                    </TouchableOpacity>  

                    <View style={{flexDirection:'row',}}>
                        {props.mapVisivle ?
                            <></>
                            :
                            <TouchableOpacity  onPress={()=>props.navigation.navigate("Map")}
                                style={[styles.nearToMe,styles.rowCenterContent,{justifyContent:"center"}]}>
                                <FontAwesome5 style={{paddingHorizontal:4}} name="map-marker-alt" size={20} color={"#555"} />
                                <Text>Near to me</Text>
                            </TouchableOpacity> 
                        }

                        <TouchableOpacity onPress={() => props.setModalVisible(true)}
                        style={[styles.nearToMe,styles.rowCenterContent,{justifyContent:"center",width:100}]}>
                            <MaterialCommunityIcons name="clipboard-text-search-outline"style={{paddingHorizontal:4}} size={20} color={"#555"} />
                            <Text>Filters</Text>
                        </TouchableOpacity>  
                    </View>

                </View>
            </View>
        </View>   
        
             
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',   
    },

    SearchView:{
        paddingTop: StatusBar.currentHeight+5,  
        zIndex:10, 
        backgroundColor: '#fff',
        shadowColor: "#000",
    /*      paddingBottom: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    */    elevation: 3,
        paddingHorizontal:15,
        flexDirection:"column" ,
        height:135
    },  
    backButton:{
        borderRadius:50,
        height:45,
        width: 50,
        backgroundColor:"#eee",
        margin: 5,
        marginRight: 10,
        alignSelf:"flex-start"
    },
    search:{
        height:43,
        backgroundColor: "#eee",
        borderRadius:50,
    },
    rowCenterContent:{
        flexDirection:"row",  
        justifyContent: "flex-start",
        alignItems:"center",
        paddingHorizontal:12,
    },
        nearToMe:{
        width:120,
        marginRight:5,
        height:35,
        borderColor: "#111",
        borderRadius:50,
        elevation: 2,
    },
})  