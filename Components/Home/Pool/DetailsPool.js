import React from "react";
import { Text,ScrollView, TouchableOpacity, View, FlatList,Image,StyleSheet, ImageBackground} from 'react-native';
import MapView from 'react-native-maps';
import {AntDesign,FontAwesome,Octicons} from 'react-native-vector-icons/'

export default function Pooldetails( {route, navigation} ) {
    const DATA= [
        {
            id:1,
            uri: "https://www.natare.com/wp-content/uploads/2015/12/competition-pool-2-parallax-image-1024x569.jpg",
        },
        {
            id:2,
            uri: "https://media.wgrz.com/assets/WGRZ/images/ba4c5b56-1711-4d78-a4bb-254ccd2f7bce/ba4c5b56-1711-4d78-a4bb-254ccd2f7bce_1920x1080.jpg",
        },
        {
            id:3,
            uri: "https://cdn3.creativecirclemedia.com/hvt/original/20210513-143743-pool%20(2).JPG"
        }
    ]
    const { id, prix, title , description , image, location} = route.params;

    const Item = ({item}) => (
        <Image source={{uri: item.uri}} style={{ width: 250, height: 200, margin:10 }} />
    )

    return(
        <View style={styles.container}>
            <View style={{ height:"30%"}}>
                <ImageBackground
                    style={styles.Image}
                    source={{uri: image}}
                >                 
                    <AntDesign name="left" size={35} color="#000" 
                        onPress={() => navigation.goBack() } 
                        style={styles.backButton}
                    />
                </ImageBackground>
            </View>
            <ScrollView style={{marginBottom: 70, }}>
                <View style={{marginHorizontal: 15}}>

                    <View style={styles.TitleView}>
                        <View style={{flexDirection: 'row', alignItems:'center', justifyContent: "space-between",}}>
                            <Text style={styles.Title}>{title}</Text>
                            <Text style={styles.prix}>{prix}/M</Text>
                        </View>
                        <Text style={{color:'#5D5D5D'}}>21 Rue central </Text>
                        <Text style={{color:'#5D5D5D'}}>8054 Tunis</Text>
                    </View>
                </View>

                    <View style={{ marginBottom:10}}>
                        <TouchableOpacity  style={styles.buttons} onPress={()=>navigation.navigate("Review")}>
                            <View style={{flexDirection:"row", alignItems:'center',justifyContent:"center"}}>
                                <FontAwesome name="star" size={22} color="#FFD400"/> 
                                <FontAwesome name="star" size={22} color="#FFD400"/> 
                                <FontAwesome name="star" size={22} color="#FFD400"/> 
                                <FontAwesome name="star" size={22} color="#FFD400"/> 
                                <FontAwesome name="star" size={22} color="#555"/>
                                <Text style={{fontWeight:'bold', color:"#5D5D5D"}}>  4.1 (40)</Text>
                            </View>
                            <AntDesign name="right" size={30} color="#3BADFF" />
                        </TouchableOpacity> 
                        <TouchableOpacity  style={styles.buttons} onPress={()=>navigation.navigate("PoolAcademy")}>
                            <Text style={{fontWeight:'bold'}}>Academy: Sport center</Text>
                            <AntDesign name="right" size={30} color="#3BADFF" />
                        </TouchableOpacity> 
                        <TouchableOpacity  style={styles.buttons}  onPress={()=>navigation.navigate("AcademyCoach") }>
                            <Text style={{fontWeight:'bold'}}>Coach list (8)</Text>
                            <AntDesign name="right" size={30} color="#3BADFF" />
                        </TouchableOpacity> 
                    </View>
                    <View style={{marginHorizontal: 15}}>

                        <Text style={styles.description}>
                            <Text style={{fontWeight:'bold'}}>Location:</Text> {location}
                        </Text>
                        
                        <Text style={styles.description}>
                            <Text style={{fontWeight:'bold'}}>Description:</Text>  {description}
                        </Text>
                        <Text style={styles.description}>
                            <Text style={{fontWeight:'bold'}}>Dimention :</Text> 30 * 60
                        </Text>
                        <Text style={styles.description}>
                            <Text style={{fontWeight:'bold'}}>Showers  :</Text> 10
                        </Text>
                        <Text style={styles.description}>
                            <Text style={{fontWeight:'bold'}}>Opening time  :</Text> 
                        </Text>
                            <View style={{flexDirection:"row", justifyContent:"space-between",marginBottom:10 }}>
                                <Text><Octicons name="dot-fill" size={15} color="#3BADFF"/>  Monday</Text>
                                <Text>08:00 to 18:00</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between",marginBottom:10 }}>
                                <Text><Octicons name="dot-fill" size={15} color="#3BADFF"/>  Tuesday</Text>
                                <Text>08:00 to 18:00</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between",marginBottom:10 }}>
                                <Text><Octicons name="dot-fill" size={15} color="#3BADFF"/>  Wednesday</Text>
                                <Text>08:00 to 18:00</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between",marginBottom:10 }}>
                                <Text><Octicons name="dot-fill" size={15} color="#3BADFF"/>  Thursday</Text>
                                <Text>08:00 to 18:00</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between",marginBottom:10 }}>
                                <Text><Octicons name="dot-fill" size={15} color="#3BADFF"/>  Friday</Text>
                                <Text>08:00 to 18:00</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between",marginBottom:10 }}>
                                <Text><Octicons name="dot-fill" size={15} color="#3BADFF"/>  Saturday</Text>
                                <Text>08:00 to 18:00</Text>
                            </View>
                    </View>

                <View style={{flexDirection: 'row',alignItems:'center',justifyContent: "space-between", paddingHorizontal:15,marginBottom:10}}>
                    <Text style={{ fontSize: 15,fontWeight:'bold',}}>Photos </Text>
                    <View style={{flex:1, marginLeft:25, borderWidth:1, borderColor: "#3BADFF"}}></View>
                </View>
                    <FlatList style={{zIndex: 10}}
                        data={DATA}
                        renderItem={({item}) => <Item item={item} />}
                        keyExtractor={item => item.id}
                        horizontal
                    />
                
                <View style={{flexDirection: 'row',alignItems:'center',justifyContent: "space-between", paddingHorizontal:15,marginBottom:10 }}>
                    <Text style={{ fontSize: 15,fontWeight:'bold',}}>Map </Text>
                    <View style={{flex:1, marginLeft:25, borderWidth:1, borderColor: "#3BADFF",}}></View>
                </View>
                
                <View style={{ margin:15, width: '93%',  height: 200 }}>
                    <MapView style={{width: '100%',  height: '100%'  }} />
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
                    <Text style={{color:"white",fontSize:15, fontWeight:'bold',}}> Reserve now </Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',        
        paddingTop:30,
    },
    Title: {
        fontSize: 29,
        fontWeight:'bold',
    },
    description:{
        fontSize: 15,
        marginBottom:15
    },
    Image:{
        height:"100%",
        width:"100%",
    },
    backButton:{
        borderRadius:50,
        height:37,
        width: 40,
        backgroundColor:"#fff",
        margin: 15
    },
    text:{
        Margin:50,
        padding:5,
    },
    prix:{
        fontWeight:'bold',
        color: "#444",
    },
    btnReserve:{
        height:50,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        alignItems:'center', 
        justifyContent: 'center',
        backgroundColor:"#3BADFF"
    },

    buttons:{
        borderBottomWidth:1,
        borderColor:"#D3D3D3",
        height:55,  
        width:"100%", 
        backgroundColor:'#F5F5F5' ,    
        flexDirection:"row" ,
        alignItems:'center', 
        justifyContent: "space-between", 
        paddingHorizontal:15
    },
    TitleView:{ 
        paddingBottom: 5, marginVertical:5,
    }
})