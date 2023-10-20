import { Text, Image, View ,StyleSheet,SafeAreaView, FlatList, TouchableOpacity, Modal, StatusBar,} from 'react-native';
import React, {useEffect, useState, useReducer} from "react";
import {FontAwesome,AntDesign,MaterialCommunityIcons,Feather,FontAwesome5} from 'react-native-vector-icons/'
import SearchBar from '../SearchBar'
import FilterModal from './FilterModal';
export default function AcademyList({route,navigation}) {

  const {searchValue} = route?.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [prixMax, setPrixMax] = useState(0)
  const [languages, setLanguages] = useState([])
  const [category, setCategory] = useState([])


  const [update, forceUpdate] = useReducer(x => x + 1, 0)
  const [filterdData,setfilterdData] = useState();

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
    if ( prixMax !=0 ){
        newData = newData.filter((item)=> { 
            return item.rateAmount < prixMax 
        })
    }
    if ( languages.length !=0 ){
        newData = newData.filter(item => {
            for(let i = 0; i < item.languages.length; i++){
                if(languages.includes(item.languages[i]))
                    return true
            }
        });
    }
    if ( category.length !=0 ){
        newData = newData.filter(item => {
            for(let i = 0; i < item.category.length; i++){
                if(category.includes(item.category[i]))
                    return true
            }
        });
    }

    /*
    const rate = 4.2
    const prix = 50
    if ( rate ){
        newData = newData.filter((item)=> {
            return item.rate >= rate
        })
    }
    if (prix){
        newData = newData.filter((item)=> {
            return item.prix >= prix
        })
    }
    */
    setfilterdData(newData);
  },[update])

  const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb28ba',
        title: 'Academy Sports + Outdoors',
        description: "this paragraph it is just a test for the views area and to see how the paragraph displayed",
        prix: "50 DT",
        image: 'https://images.contentstack.io/v3/assets/blt964243cdd7810dea/blt4d9da19ddcb8cf93/61a64386ca1df41124c1a934/store-desktop.jpg',
        location: "Dubai",
        rate: 4.2,
        rateAmount: 70,
        favorite: true,
        longitude: 55.274712,
        latitude: 25.238429,
        languages:["English", "Arabic"],
        category:["Adult","Family","Kids"]
      },
      {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8ba',
          title: 'Bangladech Academy',
          description: "this pool it is new and it is also popular there is so many famous athlet train here",
          prix: "80 DT",
          image: 'https://doscadet.solutionart.net/academy/pabna2.PNG',
          location: "Fujairah",
          rate: 3.5,
          rateAmount: 30,
          favorite: false,
          latitude: 25.147664,
          longitude: 55.203229,
          languages:["French", "English"],
          category:[ "Family"]

      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa971f63',
        title: 'Academy mostafa',
        description: "there is so many famous athlet train here",
        prix: "65 DT",
        image: 'https://images.barrons.com/im-558766?size=1.5',
        location: "Abu dabi",
        rate: 4.8,
        rateAmount: 50,
        favorite: true,
        latitude: 25.177664,
        longitude: 55.233229,
        languages:[ "Arabic", ],
        category:["Adult",]

      },
      {
        id: '58694a0f-3da1-4751f-bd96-145571e29d72',
        title: 'Academy manar',
        description: "this pool it is realy reommanded because it is new and it is for every one",
        prix: "80 DT",
        image: 'https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2020/03/18/capture.jpg',
        location: "fujairah",
        rate: 4.1,
        rateAmount: 107,
        favorite: false,
        latitude : 25.217664,
        longitude: 55.243229,
        languages:[ "English", ],
        category:["Kids"]

      },
      {
          id: '58694sa0f-3da1-471f-bd96-145571e29d72',
          title: 'Academy 3',
          description: "it is new and it is for every one",
          prix: "70 DT",
          image: 'https://fastly.4sqi.net/img/general/600x600/OHg3_srUUUtJ-a3s33kQFHjgpxUSE9BWvl36oEuwWcQ.jpg',
          location: "Abu dabi",
          rate: 3.0,
          rateAmount: 15,
          favorite: false,
          latitude : 25.227664,
          longitude: 55.213229,
          languages:[ "Englich", "Arabic"],
          category:["Family","Kids"]

      },
      {
          id: '58d694a0f-3da1-471f-bd96-14557re29d72',
          title: 'Academy Pool',
          description: "this pool it is realy reommanded because it is new and it is for every one",
          prix: "80 DT",
          image: 'https://www.gateshead.ac.uk/storage/app/media/_daykinthumbs/edia-campuses-and-facilities-campus20and20facilities-academyforsportgc-0b6bc6d5a9b30dc4dbc6d55f7dcab84d.jpg',
          location: "Al-Ain",
          rate: 5,
          rateAmount: 3,
          favorite: false,
          longitude: 55.253229,
          latitude: 25.207664,
          languages:[ "French",],
          category:["Adult","Family"]

      },

  ];
  const PoolDetails = (item) => {
      navigation.navigate('AcademyDetails', {
          id: item.id,
          title: item.title,
          image: item.image,
          location: item.location,
          description: item.description,
          favorite: item.favorite,
          latitude: item.latitude,
          longitude: item.longitude,
      });
      console.log(item)
  }
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
                      <Text style={{fontSize: 15, color: "white", fontWeight: "bold", }}> {item.rate} ({item.rateAmount})</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"flex-end",justifyContent:'space-between' ,flex:1, margin:15,  }}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={{
                        color:"#fff",
                        fontSize : 18,
                        fontWeight :'600', alignItems:"flex-end", 
                        textShadowColor: 'rgba(0, 0, 0, 1)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10, 
                        marginLeft:10}}
                       
                      >{item.location}</Text>

                  </View>
              </View>
      </TouchableOpacity>
  );
return (
    <View style={styles.container}>
        <View style={{height:135, zIndex:2}}>
            <SearchBar searchValue={searchValue} navigation={navigation} setModalVisible={setModalVisible}></SearchBar>
        </View> 
        
        <FilterModal modalVisible={modalVisible} setModalVisible={setModalVisible}
            setFavorite={setFavorite} favorite={favorite} forceUpdate={forceUpdate}
            setPrixMax={setPrixMax} prixMax={prixMax} setLanguages={setLanguages}
            languages={languages} setCategory={setCategory} category={category}
        />


        <SafeAreaView style={{flex:1}}>
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
  backButton:{
    borderRadius:50,
    height:45,
    width: 50,
    backgroundColor:"#eee",
    margin: 5,
    alignSelf:"flex-start"
  },
  nearToMe:{
    width:120,
    marginRight:5,
    height:35,
    borderColor: "#111",
    borderRadius:50,
    elevation: 2,
   },





  title: {
      width:'60%',
      color:"#fff",
      fontSize : 23,
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