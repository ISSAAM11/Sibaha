import React, {useEffect, useState} from "react";
import { Text, Image, StatusBar, View ,StyleSheet, TouchableOpacity, TextInput, } from 'react-native';
import {MaterialCommunityIcons,FontAwesome,FontAwesome5,Feather} from 'react-native-vector-icons/'
import MapView from 'react-native-maps';
import AcademyList from "./Academy/AcademyList";
import PoolList from "./Pool/PoolList";
import CoachList from "./Coach/CoachList";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function HomePage({ navigation }) {

    const [search, setSearch] = useState();
    const [filterdData,setfilterdData] = useState();
    const [showMap ,setShowMap] = useState(false)
    const [poolColor, setPoolColor ] = useState("#3BADFF")
    const [academyColor, setAcademyColor ] = useState("#777")
    const [mapColor, setMapColor ] = useState("#777")
    const [coachColor, setCoachColor ] = useState("#777")

    const [loading, setLoading] = useState(false)
    useEffect(()=> {
        setfilterdData(DATA)
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 4000);
    },[search])

    const PoolDetails = (item) => {
        navigation.navigate('DetailsPool', {
            id: item.id,
            title: item.title,
            prix: item.prix,
            description: item.description,
        });
        console.log(item)
    }
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb28ba',
          title: 'Pool academy',
          description: "this pool it is new and it is also popular and you can find a lot of other stuff",
          prix: "50 DT",
          image: 'https://www.tarletonacademy.org/images/Pages/big_IMG_9537.jpg',
          location: "Dubai",
          favorite: true
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8ba',
            title: 'Pool jamila',
            description: "this pool it is new and it is also popular there is so many famous athlet train here",
            prix: "80 DT",
            image: 'https://www.natare.com/wp-content/uploads/2015/12/competition-pool-2-parallax-image-1024x569.jpg',
            location: "Fujairah",
            favorite: false
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa971f63',
          title: 'Pool mostafa',
          description: "there is so many famous athlet train here",
          prix: "65 DT",
          image: 'https://cdn3.creativecirclemedia.com/hvt/original/20210513-143743-pool%20(2).JPG',
          location: "Abu dabi",
          favorite: true
        },
        {
          id: '58694a0f-3da1-4751f-bd96-145571e29d72',
          title: 'Pool manar',
          description: "this pool it is realy reommanded because it is new and it is for every one",
          prix: "80 DT",
          image: 'https://www.natare.com/wp-content/uploads/2015/12/competition-pool-2-parallax-image-1024x569.jpg',
          location: "fujairah",
          favorite: false
        },
        {
            id: '58694sa0f-3da1-471f-bd96-145571e29d72',
            title: 'Pool 3',
            description: "it is new and it is for every one",
            prix: "70 DT",
            image: 'https://www.tarletonacademy.org/images/Pages/big_IMG_9537.jpg',
            location: "Abu dabi",
            favorite: false
        },
        {
            id: '58d694a0f-3da1-471f-bd96-14557re29d72',
            title: 'new Pool',
            description: "this pool it is realy reommanded because it is new and it is for every one",
            prix: "80 DT",
            image: 'https://www.natare.com/wp-content/uploads/2015/12/competition-pool-2-parallax-image-1024x569.jpg',
            location: "Al-Ain",
            favorite: false
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbdaa97f63',
            title: 'this Pool ',
            description: "there is so many famous athlet train here",
            prix: "80 DT",
            image: 'https://www.tarletonacademy.org/images/Pages/big_IMG_9537.jpg',
            location: "Dubai",
            favorite: false
        }, 
        {
            id: '58694a0f-3da1-471f-96-145571e29d72',
            title: 'Pool academy',
            description: "this pool it is realy reommanded because it is new and it is for every one",
            prix: "90 DT",
            image: 'https://www.tarletonacademy.org/images/Pages/big_IMG_9537.jpg',
            location: "Al-Ain",
            favorite: false
        },
        {
            id: '3ac68afc-c605-48d3-fadf-fbd91aa97f63',
            title: 'academy',
            description: "there is so many famous athlet train here",
            prix: "70 DT",
            image: 'https://cdn3.creativecirclemedia.com/hvt/original/20210513-143743-pool%20(2).JPG',
            location: "Abudabi",
            favorite: false
        },
        {
            id: '58694a0f-3da1-dccd-aes-145571e29d72',
            title: 'Pool 3',
            description: "this pool it is realy reommanded because it is new and it is for every one",
            prix: "50 DT",
            image: 'https://www.tarletonacademy.org/images/Pages/big_IMG_9537.jpg',
            location: "Dubai",
            favorite: false
        },
        {
            id: '3ac68afc-ssfd-sdva-a4f8-fbd91aa97f63',
            title: 'Pool 2',
            description: "there is so many famous athlet train here",
            prix: "80 DT" ,       
            image: 'https://cdn3.creativecirclemedia.com/hvt/original/20210513-143743-pool%20(2).JPG',
            location: "Dubai",
            favorite: false
        },
    ];
    const Item = ({item}) => (
        <TouchableOpacity onPress={()=> PoolDetails(item)} style={styles.item}>
                <Image
                    style={{ height:"100%",width:"100%",borderWidth:5, borderRadius:20, position: "absolute", }}
                    source={{ uri: item.image}}
                >

                </Image>
                <View  style={{       
                    flexDirection:"column" ,
                    width:"100%"  }}>
                    <View style={styles.ratingView}>
                        <FontAwesome name="star" size={24} color="#fff"/>
                        <Text style={{fontSize: 15, color: "white", fontWeight: "bold", }}> 4.1 '152'</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-end", flex:1, margin:15,  }}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                </View>
        </TouchableOpacity>
    );
    const serachHandler = (text) => {
        if (text) {
            const newData = DATA.filter((item)=> {
                const itemData = item.title ? item.title.toLocaleUpperCase(): ''.toUpperCase()
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            })
            setfilterdData(newData);
            setSearch(text)
        }   else {
            setfilterdData(DATA);
            setSearch(text)
        }
    }
    const Map = () => {
        return(
        <View>
            <MapView style={{width: '100%',  height: '100%'  }} />
        </View>
    )}
    
    let pool = true
    let academy = false
    let coach = false
    let map = false

    const searchType = (type) => {
        setPoolColor("#777")
        setAcademyColor("#777")
        setCoachColor("#777")
        setMapColor("#777")
        if (type == "pool"){
            setPoolColor("#3BADFF")
            pool= true
            academy = false
        }
        else if (type == "academy"){
            setAcademyColor('#3BADFF')
            pool= false
            academy = true
        }
        else if (type == "coach"){
            setCoachColor('#3BADFF')
        }
        else if (type == "map"){
            setMapColor('#3BADFF')
        }
        console.log(pool)
        console.log(academy)
    }

    return (
        <View style={styles.container}>
            <View style={styles.SearchView}>
                <View style={{flexDirection:"row" ,justifyContent: "space-between", alignItems:"center",}}>
                    <View style={styles.Search}>
                        <Feather name="search" size={25} color={"#3BADFF"} style={{marginRight:10}} />
                        <TextInput  
                            placeholder="Search"
                            value={search}
                            onChangeText={(text) => serachHandler(text)}
                            style={{flex:1}}
        //                    underlineColorAndroid="trasparent"
                        />
                    </View>
                    <MaterialCommunityIcons name="clipboard-text-search-outline" size={30} color="#777"/>
                </View>
                  
{/*                <View  style={styles.TypeSerach}>
                    <TouchableOpacity style={styles.TypeSerachElement} onPress={() => searchType("pool")}>
                        <MaterialCommunityIcons style={{paddingHorizontal:4}} name="pool" size={31} color={poolColor}/> 
                        <Text style={{paddingHorizontal:4, color:{poolColor}}}> Pool </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TypeSerachElement} onPress={() => searchType("academy")}>{/*style={styles.TypeSerachElement}
                        <FontAwesome5 style={{paddingHorizontal:4}}name="hotel" size={26} color={academyColor} />
                        <Text style={{color:{academyColor}, paddingHorizontal:4}}>Academy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TypeSerachElement} onPress={() => searchType("coach")}>
                        <FontAwesome style={{paddingHorizontal:4}} name="user" size={31} color={coachColor}/> 
                        <Text style={{paddingHorizontal:4}}>Coach</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TypeSerachElement} onPress={() => searchType("map")}>
                        <FontAwesome5 style={{paddingHorizontal:4}} name="map-marked-alt" size={29} color={mapColor} />
                        <Text style={{paddingHorizontal:4}}>Map</Text>
                    </TouchableOpacity>
                </View>
*/}
            </View>


                <Tab.Navigator screenOptions={{swipeEnabled: false, }} >
                    <Tab.Screen name="AcademyList" component={AcademyList}  
                    initialParams={{searchValue: search}}         
    
                    options = {{  title: ({color, focused,}) =>(
                        <View style={styles.TypeSerachElement}>
                            <FontAwesome5 style={{paddingHorizontal:4}} name="hotel" size={26} 
                            color={focused ? '#3BADFF': '#777'}/> 
                            <Text style={{paddingHorizontal:4}}>Academy</Text>
                        </View>)
                    }}/>
    
                    <Tab.Screen name="PoolList" component={PoolList} 
                        initialParams={{searchValue: search}}
    
                    options = {{ title: ({color, focused,}) =>
                        <View style={styles.TypeSerachElement}>
                            <MaterialCommunityIcons 
                            style={{paddingHorizontal:4}} name="pool" size={31} 
                            color={focused ? '#3BADFF': '#777'}/> 
                            <Text style={{paddingHorizontal:4}}>Pool</Text>
                        </View>
                    }}
                    />
                    <Tab.Screen name="CoachList" component={CoachList} 
                    options = {{ title: ({color, focused,}) =>
                        <View style={styles.TypeSerachElement}>
                        <FontAwesome name="user" style={{paddingHorizontal:4}} size={31}
                            color={focused ? '#3BADFF': '#777'}/> 
                            <Text style={{paddingHorizontal:4}}>Coach</Text>
                        </View>
                    }}/>
                    
                    <Tab.Screen name="Map" component={Map} 
                    options = {{ title: ({color, focused,}) =>
                        <View style={styles.TypeSerachElement}>
                            <FontAwesome5  style={{paddingHorizontal:4}} name="map-marked-alt" size={29} 
                            color={focused ? '#3BADFF': '#777'}/> 
                            <Text style={{paddingHorizontal:4, }}>Map</Text>
                        </View>
                    }}/>
                </Tab.Navigator>




{/*            
            {showMap
                ? <MapView style={{width: '100%',  height: '100%'  }} />
                : <></>
            }
            <SafeAreaView >
                <FlatList style={{paddingHorizontal:15,paddingTop:10,}}
                    data={filterdData}
                    renderItem={({item}) => <Item item={item} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView> 

           <View
                style={styles.footer}>
                    <TouchableOpacity onPress={() => navigation.navigate("HomePage")} style={{flex: 0.51, alignItems:'center'}} >
                        <Feather name="search" size={24} color="#3BADFF"></Feather>
                        <Text  style={{color:"#3BADFF"}}> Search </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("HomePage")} style={{flex: 0.51, alignItems:'center'}} >
                        <Feather name="heart" size={23} color="#777"></Feather>
                        <Text  style={{color:"#777"}}> My List </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("AccountDetails")} style={{flex: 0.51, alignItems:'center'}} >
                        <MaterialCommunityIcons name="account" size={25} color="#777"></MaterialCommunityIcons>
                        <Text style={{color:"#777"}}> Account </Text>
                    </TouchableOpacity>
            </View>
*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',   
        paddingTop: StatusBar.currentHeight     
    },

    SearchView:{
        zIndex:10, 
        backgroundColor: '#fff',
        shadowColor: "#000",
        paddingBottom: 10,
/*        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
*/      
        paddingTop:10,paddingHorizontal:25,
        flexDirection:"column" ,
    },
    title: {
        color:"#fff",
        fontSize : 25,
        fontWeight :'bold',  
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    Logout:{
        top: 10, //Here is the trick
        color: "blue", 
        left:-10
    },
    item: {
        width:"100%",
        height:220,
        marginVertical: 10,
        flex:1,

        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
      },
    description:{
        fontSize: 10,
        marginLeft: 12,
        marginRight: 5,
        marginVertical:2
    },
    Search:{
        marginRight:15,
        flexDirection: "row",
        alignItems: "center",
        borderRadius:30,
        backgroundColor:"#fff",
        flex:1,
        paddingHorizontal:10,
        height:40,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }, 
    Prix:{
        size: 15,
        fontWeight:'bold',
        color: "#C19b1f",
        alignSelf: "flex-end"
    },
    TypeSerach:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between", 
        marginTop:25,
    },
    TypeSerachElement:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent: "flex-end", 
        backgroundColor:"#fff",
        height:40,
        borderRadius:5
    },
    ratingView:{
        width:130,
        height:40, 
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: "center",
        alignSelf: "flex-end",
        margin:10
    },
/*    footer:{
        zIndex:10,
        backgroundColor: '#F8F8F8',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignContent:"flex-end",
        padding: 10, 
        position:'absolute',
        bottom:0
    }*/
})