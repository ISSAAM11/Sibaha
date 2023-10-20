import { View, Text,StyleSheet, StatusBar,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {MaterialCommunityIcons,FontAwesome,FontAwesome5,Feather} from 'react-native-vector-icons/'

const HomeRoot = ({navigation}) => {

  return (
    <View style={styles.container}>


      <View style={styles.imageContainer}>
        <Image
            style={styles.image}
            source={require('../../assets/PoolBackground.jpeg')}
        >
        </Image>
          <View style={styles.TextContainer}>
            <Text style={styles.userName}>Welcome Username</Text>
            <Text style={styles.Text}>Start your swimming courses</Text>
          </View>

        <View style={{flex:1, justifyContent: "center", }}>
          <View style={styles.serchTypeContainer}>
                <Text style={{fontSize:15, color:"#555",}}>Search by</Text>
              
              <View style={{flex:1, width:'100%', flexDirection:"row", justifyContent: "space-around",alignItems:"center",}}>
                <TouchableOpacity style={styles.TypeSerachElement}
                  onPress={()=> navigation.navigate("Search",{searchtype:"Academy name"}) }>
                    <FontAwesome5 name="hotel" size={26} color='#777'/> 
                    <Text style={{fontSize:14}}>Academy</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.TypeSerachElement}
                  onPress={()=>navigation.navigate("Search",{searchtype:"Pool name"})}>
                    <MaterialCommunityIcons name="pool" size={31} color='#777'/> 
                    <Text >Pool</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.TypeSerachElement}
                  onPress={()=>navigation.navigate("Search",{searchtype:"Coach name"})}>
                    <FontAwesome name="user" size={31} color='#777'/> 
                    <Text >Coach</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>

      </View>

      <View style={{height:"30%", alignItems:"center",justifyContent:"center"}}>
          <Text style={styles.yourcity}>Your city</Text>

          <TouchableOpacity  onPress={()=>navigation.navigate("Search",{searchtype:"Your city"})}
          style={[styles.search,styles.rowCenterContent, {margin:10}]}>
            <Feather name="search" size={25} color={"#555"} style={{marginRight:10}} />
            <Text style={{color:"#777"}}>Search</Text>
          </TouchableOpacity>  

          <TouchableOpacity  onPress={()=>navigation.navigate("Map",)}
          style={[styles.nearToMe,styles.rowCenterContent,{justifyContent:"center"}]}>
            <FontAwesome5 style={{paddingHorizontal:4}} name="map-marker-alt" size={20} color={"#555"} />
            <Text>Near to me</Text>
          </TouchableOpacity>  

      </View> 



    </View>
  )
}
export default HomeRoot

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',   
      paddingTop: StatusBar.currentHeight     
  },
  imageContainer:{
    width:"100%",
    height: "50%",
    alignContent:"center",
  },
  TextContainer:{
    padding:15
  },
  userName:{
    fontSize:25,
    fontWeight:'700',
    color:"white",
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 15, 
  },
  Text:{
    fontSize:15,
    fontWeight:'600',
    color:"white",
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10, 
  },
  image:{
    height:"100%",width:"100%",
    borderBottomLeftRadius:30, 
    borderBottomRightRadius:30, 
    position: "absolute",
  },
  serchTypeContainer:{
    alignSelf:"center",
    backgroundColor:"#fff",
    width:"75%",
    height: 110,
    borderRadius:20,
    flexDirection:"column",  
    justifyContent: "space-around",
    alignContent:"stretch",
    alignItems:"center",
    paddingTop:5
  },
  TypeSerachElement:{
    flexDirection:"column",
    alignItems:"center",
    justifyContent: "center", 
    backgroundColor:"#eee",
    height:65,
    width:65,
    borderRadius:50
  },
  yourcity:{
    fontWeight:"700",
    fontSize:15

  },
  ViewSearchByArea:{
    alignItems:"center",
    alignContent:"center"
  },
  search:{
    width:200,
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
  rowCenterContent:{
    flexDirection:"row",  
    justifyContent: "flex-start",
    alignItems:"center",
    paddingHorizontal:12,
  }
})