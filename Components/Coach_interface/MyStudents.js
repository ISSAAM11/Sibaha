import { View,StyleSheet,Image ,Text, SafeAreaView, FlatList, TouchableOpacity} from "react-native"
import Hr from "react-native-hr-component";
import {AntDesign,FontAwesome} from 'react-native-vector-icons/'
import SearchBar from "../Home/SearchBar";
import React, {useEffect, useState} from "react";

export default function MyStudents( {navigation} ) {
    
    const searchValue = "";
    const [filterdData,setfilterdData] = useState();

    useEffect(()=> {
        setfilterdData(Data)
        if (searchValue) {
            const newData = Data.filter((item)=> {
                const itemData = item.name ? item.name.toLocaleUpperCase(): ''.toUpperCase()
                const textData = searchValue.toUpperCase();
                return itemData.indexOf(textData) > -1
            })
            setfilterdData(newData);
        }   else {
            setfilterdData(Data);
        }
          console.log(searchValue)
    },[])

    const Data = [{
        id: 'bd7acbea-c1w1-46c2-aed5-3ad3abb28ba',
        name: 'Adam salim',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
        description: "this paragraph it is just a test for the views area and to see how the paragraph displayed",
        Language: "Francais, Spain",
        location: "Dubai",
    },
    {
        id: 'bd7acbea-cqb1-s6c2-aed5-3ad3abbe8ba',
        name: 'Samir Ben Mohamed',
        image: 'https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=',
        description: "this paragraph it is just a test for the views area and to see how the paragraph displayed",
        Language: "Anglais, Arab",
        location: "Fujaira",
    },
    {
        id: 'bd7acbea-c1b1-46e2-aed5-3ad3abb28ba',
        name: 'Jamel ben Hamid',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU',
        description: "this paragraph it is just a test for the views area and to see how the paragraph displayed",
        Language: "Francais, Arab",
        location: "Fujaira",
    },
    {
        id: 'bd7acbea-c1b1-4da2-aed5-3ad3abb28ba',
        name: 'Selma Hajji',
        image: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg',
        description: "this paragraph it is just a test for the views area and to see how the paragraph displayed",
        Language: "Arab",
        location: "Fujaira",
    },
    {
        id: 'bd7acbea-c1b1-46a2-aed5-3aw3abb28ba',
        name: 'Fares Jlassi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU',
        description: "this paragraph it is just a test for the views area and to see how the paragraph displayed",
        Language: "Anglais",
        location: "Fujaira",
    },
    {
        id: 'bd7acbea-c1b1-46a2-aed5-3ad3abb18ba',
        name: 'Fares Jlassi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU',
        description: "this paragraph it is just a test for the views area and to see how the paragraph displayed",
        Language: "Anglais",
        location: "Fujaira",
    },
    ]
    const PoolDetails = (item) => {
        navigation.navigate('CoachDetails', {
            id: item.id,
            name: item.name,
            image:item.image,
            Language: item.Language,
            location: item.location,
            description: item.description,
        });
    }
    const Item = ({item}) => (
        <View>
            <TouchableOpacity onPress={()=> PoolDetails(item)} style={styles.coachContainer}>
                <View style={{flexDirection:"row" ,alignItems:'center', }}>                    
                    <Image
                        style={styles.image}
                        source={{uri: item.image}}
                    />
                    <View styles={{flexDirection: 'column', alignItems:'center', }}>
                        <Text style={{fontSize:20, fontWeight:'bold',marginBottom:3}}>{item.name}</Text>
                        <Text style={styles.textThin}>{item.location}</Text>
                        <Text style={styles.textThin}>{item.Language}</Text>
                    </View>
                </View>
                <AntDesign name="right" size={30} color="#3BADFF" />
                
            </TouchableOpacity>
            <View style={{width:'100%', borderWidth:0.6, borderColor: "#aaa",}}></View>                         
        </View>

    );
    return (
        <View style={styles.container}>

            <View style={{height:135, zIndex:2}}>
                <SearchBar searchValue={searchValue} navigation={navigation}></SearchBar>
            </View> 
            <SafeAreaView style={{flex:1,}}>
                <FlatList style={{paddingHorizontal:25,}}
                    data={filterdData}
                    renderItem={({item}) => <Item item={item} />}
                    keyExtractor={item => item.id}
                />
                {/*<Hr lineColor="#aaa" width={1}  />*/}
            </SafeAreaView> 
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        flex: 1,
    },
    Title:{
        fontSize: 25,
        fontWeight: "bold"
    },
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },
    image:{
        height:80,        
        width:80,
        borderRadius:100,  
        marginRight: 15      
    },

    coachContainer:{
        width:"100%", 
        flexDirection:"row" ,
        alignItems:'center', 
        justifyContent: "space-between", 
        paddingLeft:10,
        marginVertical: 10
    },
    textThin:{
        fontSize:12,
        fontWeight:'300'
    },
    item: {
        width:"100%",
        marginHorizontal: 10,
        flex:1,
    }
})