import { View, Text,StatusBar,StyleSheet ,TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import MapView, { Callout, Marker } from 'react-native-maps';
import SearchBar from '../SearchBar'
import * as Location from 'expo-location'
import {Svg, Image as ImageSvg} from 'react-native-svg';
import {AntDesign,MaterialCommunityIcons,FontAwesome} from 'react-native-vector-icons/'

const Map = ({navigation}) => {
  const DATA2 =     [  {
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
    latitude: 25.238429
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
      latitude: 25.137664,
      longitude: 55.203229
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
    longitude: 55.233229
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
    longitude: 55.243229
  },
  {
      id: '58694sa0f-3da1-471f-bd96-145571e29d72',
      title: 'Academy marina',
      description: "it is new and it is for every one",
      prix: "70 DT",
      image: 'https://fastly.4sqi.net/img/general/600x600/OHg3_srUUUtJ-a3s33kQFHjgpxUSE9BWvl36oEuwWcQ.jpg',
      location: "Abu dabi",
      rate: 3.0,
      rateAmount: 15,
      favorite: false,
      latitude : 25.127664,
      longitude: 55.213229
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
      latitude: 25.207664
  },];
  
  const[ mapRegion , setMapRegion ] = useState({
    latitude: 25.104224242203385,   
    longitude: 55.19990192666907,
    latitudeDelta: 0.4922,
    longitudeDelta: 0.0421,
  })

  useEffect(() => {
    userLocation(); 
  }, [])

  const userLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted'){
      console.log("error")
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true
    })
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })
    console.log(location.coords.latitude, location.coords.longitude)
  }

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

  return (
    <View>
        <View style={styles.mapBar}>
          <AntDesign name="left" size={45} color="#000" 
                  onPress={() => navigation.goBack()}                 
                  style={styles.backButton}
          />
          <Text style={styles.titleMap}> Near to me </Text>
            <TouchableOpacity  
                style={[styles.nearToMe,styles.rowCenterContent,{justifyContent:"center",width:100,}]}>
                <MaterialCommunityIcons name="clipboard-text-search-outline"style={{paddingHorizontal:4}} size={20} color={"#555"} />
                <Text>Filtres</Text>
            </TouchableOpacity>  
        </View>


        <View style={{width: '100%',  height: '100%',}}>
          <MapView 
            style={{width: '100%',  height: '100%'  }} 
            initialRegion={mapRegion}
          >
            { DATA2 && DATA2.map((marker,i) => (
              <Marker key={i}
                  coordinate={{
                    latitude: marker.latitude,   
                    longitude: marker.longitude,
                  }}
                  title={marker.title}
                  onCalloutPress ={()=> PoolDetails(marker)}
              >
                <Callout tooltip>
                  <View>
                    <View style={styles.bubble}>
                      
                      <Text style={styles.title}>{marker.title}</Text>
                      <Svg width={120} height={80} style={{alignSelf:"center"}}>
                        <ImageSvg
                            width={'100%'} 
                            height={'100%'}
                            preserveAspectRatio="xMidYMid slice"
                            href={{ uri: marker.image}}
                        />
                      </Svg>

                    </View>
                    {/* <View style={styles.arrowBorder}/>
                    <View style={styles.arrow}/> */}
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView> 
        </View>
    </View>
  )
}
export default Map

const styles = StyleSheet.create({
  bubble:{
    backgroundColor:"white",
    alignSelf:"flex-start",
    flexDirection:'column',
    borderWidth:0.5,
    borderRadius:6,
    padding:10,
    width: 150
  },
  title:{
    alignSelf:"center",
    fontSize: 15,
    fontWeight:'600',
  },
  titleMap: {
    alignSelf:"center",
    fontSize: 20,
    fontWeight:'600'
  },
  arrow:{
    backgroundColor:'transparent',
    borderColor:'transparent',
    borderTopColor: "white",
    borderWidth:'center',
    marginTop:-32,
  },
  arrowBorder:{
    backgroundColor: 'transparent',
    borderColor:'transparent',
    borderWidth:16,
    borderTopColor: "#007a87",
    alignSelf:'center',
    marginTop: -0.5
  },
  image:{
    width:120,
    height:80,
    resizeMode: 'cover'
  },
  mapBar:{
    paddingHorizontal:15,
    paddingTop: StatusBar.currentHeight ,    
    height:85, 
    flexDirection: 'row', 
    alignItems:'center', 
    justifyContent: "space-between",
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
  backButton:{
    borderRadius:50,
    height:45,
    width: 50,
    backgroundColor:"#eee",
    margin: 5,
    marginRight: 10,
    alignSelf:"flex-start"
  },

})