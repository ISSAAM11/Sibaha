import { Text, Image, View ,StyleSheet,SafeAreaView, FlatList, TouchableOpacity, TextInput, ImageBackground,} from 'react-native';
import React, {useEffect, useState, useReducer} from "react";
import {FontAwesome,} from 'react-native-vector-icons/'
import SearchBar from '../SearchBar';
import FilterModalPool from './FilterModalPool';
export default function PoolList({route, navigation}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [prixMax, setPrixMax] = useState(0)
    const [rate, setRate] = useState(0)
    const [isHeated, setIsHeated] = useState(false)
    const [isOutDoor, setIsOutDoor] = useState(false)
    
    const {searchValue, } = route?.params;
    const [filterdData,setfilterdData] = useState();
    const [update, forceUpdate] = useReducer(x => x + 1, 0)

    useEffect(()=> {
        let newData = DATA
        if (searchValue) {
            newData = newData.filter((item)=> {
                const itemData = item.title ? item.title.toLocaleUpperCase(): ''.toUpperCase()
                const textData = searchValue.toUpperCase();
                return itemData.indexOf(textData) > -1
            })
        }  
        if ( favorite ){
            newData = newData.filter((item)=> {
                return item.favorite 
            })
        }
        if ( isHeated ){
            newData = newData.filter((item)=> {
                return item.isHeated 
            })
        }
        if ( isOutDoor ){
            newData = newData.filter((item)=> {
                return item.isOutDoor 
            })
        }
        if ( rate != 0 ){
            newData = newData.filter((item)=> { 
                return item.rate < rate 
            })
        }
          setfilterdData(newData)

    },[update])
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb28ba',
          title: 'Pool academy',
          description: "this pool it is new and it is also popular and you can find a lot of other stuff",
          prix: "50 DT",
          image: 'https://www.tarletonacademy.org/images/Pages/big_IMG_9537.jpg',
          location: "Dubai",
          favorite: true,
          rate: 4.1,
          isHeated: true,
          isOutDoor: false,
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8ba',
            title: 'Pool jamila',
            description: "this pool it is new and it is also popular there is so many famous athlet train here",
            prix: "80 DT",
            image: 'https://www.natare.com/wp-content/uploads/2015/12/competition-pool-2-parallax-image-1024x569.jpg',
            location: "Fujairah",
            favorite: false,
            rate: 4.8,
            isHeated: true,
            isOutDoor: false,
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa971f63',
          title: 'Pool mostafa',
          description: "there is so many famous athlet train here",
          prix: "65 DT",
          image: 'https://cdn3.creativecirclemedia.com/hvt/original/20210513-143743-pool%20(2).JPG',
          location: "Abu dabi",
          favorite: true,
          rate: 3.7,
          isHeated: false,
          isOutDoor: false,
        },
        {
          id: '58694a0f-3da1-4751f-bd96-145571e29d72',
          title: 'Pool manar',
          description: "this pool it is realy reommanded because it is new and it is for every one",
          prix: "80 DT",
          image: 'https://www.natare.com/wp-content/uploads/2015/12/competition-pool-2-parallax-image-1024x569.jpg',
          location: "fujairah",
          favorite: false,
          rate: 3.1,
          isHeated: false,
          isOutDoor: true,
        },
        {
            id: '58694sa0f-3da1-471f-bd96-145571e29d72',
            title: 'Pool 99',
            description: "it is new and it is for every one",
            prix: "70 DT",
            image: 'https://www.tarletonacademy.org/images/Pages/big_IMG_9537.jpg',
            location: "Abu dabi",
            favorite: false,
            rate: 2.7,
            isHeated: true,
            isOutDoor: false,
        },
        {
            id: '58d694a0f-3da1-471f-bd96-14557re29d72',
            title: 'new Pool',
            description: "this pool it is realy reommanded because it is new and it is for every one",
            prix: "80 DT",
            image: 'https://www.natare.com/wp-content/uploads/2015/12/competition-pool-2-parallax-image-1024x569.jpg',
            location: "Al-Ain",
            favorite: false,
            rate: 1.3,
            isHeated: true,
            isOutDoor: true,
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbdaa97f63',
            title: 'this Pool area',
            description: "there is so many famous athlet train here",
            prix: "80 DT",
            image: 'https://www.tarletonacademy.org/images/Pages/big_IMG_9537.jpg',
            location: "Dubai",
            favorite: false,
            rate: 4.3,
            isHeated: true,
            isOutDoor: false,
        }, 
        {
            id: '58694a0f-3da1-471f-96-145571e29d72',
            title: 'Pool sweet',
            description: "this pool it is realy reommanded because it is new and it is for every one",
            prix: "90 DT",
            image: 'https://www.tarletonacademy.org/images/Pages/big_IMG_9537.jpg',
            location: "Al-Ain",
            favorite: true,
            rate: 1.7,
            isHeated: false,
            isOutDoor: true,
        },
        {
            id: '3ac68afc-c605-48d3-fadf-fbd91aa97f63',
            title: 'Pool night',
            description: "there is so many famous athlet train here",
            prix: "70 DT",
            image: 'https://cdn3.creativecirclemedia.com/hvt/original/20210513-143743-pool%20(2).JPG',
            location: "Abudabi",
            favorite: true,
            rate: 3.5,
            isHeated: true,
            isOutDoor: false,
        },
    ];
    const PoolDetails = (item) => {
        navigation.navigate('DetailsPool', {
            id: item.id,
            title: item.title,
            prix: item.prix,
            image: item.image,
            location: item.location,
            description: item.description,
        });
        console.log(item)
    }
    const Item = ({item}) => (
        <TouchableOpacity onPress={()=> PoolDetails(item)} style={styles.item}>
                <Image
                    style={{ height:"100%",width:"100%",borderWidth:5, borderRadius:20, position: "absolute", }}
                    source={{ uri: item.image}}
                />
                <View  style={{       
                    flexDirection:"column" ,
                    width:"100%"  }}>
                    <View style={styles.ratingView}>
                        <FontAwesome name="star" size={24} color="#fff"/>
                        <Text style={{fontSize: 15, color: "white", fontWeight: "bold", }}>  ({item.rate}) </Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-end", flex:1, margin:15,  }}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                </View>
        </TouchableOpacity>
    );
    
  return (
    <View style={styles.container}>

        <View style={{height:135, zIndex:2}}>
            <SearchBar searchValue={searchValue} navigation={navigation} setModalVisible={setModalVisible}> mapVisivle={false}</SearchBar>
        </View>

        <FilterModalPool modalVisible={modalVisible} setModalVisible={setModalVisible}
            setFavorite={setFavorite} favorite={favorite} forceUpdate={forceUpdate}
            setPrixMax={setPrixMax} prixMax={prixMax} isOutDoor={isOutDoor} rate={rate}
            isHeated={isHeated} setIsOutDoor={setIsOutDoor} setRate={setRate}
            setIsHeated={setIsHeated}
        />

        <SafeAreaView >
            <FlatList style={{paddingHorizontal:15,paddingTop:10,}}
                data={filterdData}
                renderItem={({item}) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',   
    },
    SearchView:{
        zIndex:10, 
        backgroundColor: '#fff',
        shadowColor: "#000",
/*         paddingBottom: 10,
        shadowOffset: {
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
        width:120,
        height:40, 
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: "center",
        alignSelf: "flex-end",
        margin:10
    },

})