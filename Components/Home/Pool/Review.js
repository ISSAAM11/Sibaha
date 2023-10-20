import { View, StyleSheet,Text,Image } from "react-native";
import {FontAwesome,} from 'react-native-vector-icons/'

export default function Review ({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={[styles.Title,{marginVertical:15}]}>Pool Sport</Text>  
            <View style={{flexDirection: 'column', alignItems:'center', justifyContent: "space-between",width:'100%',marginBottom:15}}>
                
                <View style={{flexDirection: 'row', alignItems:'center', justifyContent: "space-between",width:"100%",paddingVertical:5}}>
                    <Text style={{color: '#555', fontWeight:'bold'}}>Academy</Text>
                    <View style={{flexDirection: 'row', alignItems:'center', justifyContent: "space-between",}}>
                        <FontAwesome name="star" size={20} color="#FFD400"/> 
                        <FontAwesome name="star" size={20} color="#FFD400"/> 
                        <FontAwesome name="star" size={20} color="#FFD400"/> 
                        <FontAwesome name="star" size={20} color="#FFD400"/> 
                        <FontAwesome name="star" size={20} color="#555"/>
                        <Text style={{fontWeight:'bold', color:"#555"}}> 4.5 (35)</Text>
                    </View>
                </View>
                
                <View style={{flexDirection: 'row', alignItems:'center', justifyContent: "space-between",width:"100%",paddingVertical:5}}>
                    <Text style={{color: '#555', fontWeight:'bold'}}>Pool</Text>
                    <View style={{flexDirection: 'row', alignItems:'center', justifyContent: "space-between",}}>
                        <FontAwesome name="star" size={20} color="#FFD400"/> 
                        <FontAwesome name="star" size={20} color="#FFD400"/> 
                        <FontAwesome name="star" size={20} color="#FFD400"/> 
                        <FontAwesome name="star" size={20} color="#FFD400"/> 
                        <FontAwesome name="star" size={20} color="#555"/>
                        <Text style={{fontWeight:'bold', color:"#555"}}> 4.0 (14)</Text>
                    </View>
                </View>

            </View>
            <View style={{width:'100%', borderWidth:0.6, borderColor: "#aaa",}}></View>
            
            <View style={{width:'100%', paddingVertical:15, }}>
                <View style={{flexDirection:"row" ,alignItems:'center', marginBottom:10}}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'}}
                    />
                    <View styles={{flexDirection: 'column', alignItems:'center', }}>
                        <Text style={{fontSize:15, fontWeight:'bold', }}>Mohamed salah - september 2021</Text>
                        <View style={{flexDirection: 'row', alignItems:'center', justifyContent: "flex-start",}}>
                            <FontAwesome name="star" size={17} color="#FFD400"/> 
                            <FontAwesome name="star" size={17} color="#FFD400"/> 
                            <FontAwesome name="star" size={17} color="#FFD400"/> 
                            <FontAwesome name="star" size={17} color="#555"/>
                            <FontAwesome name="star" size={17} color="#555"/>
                        </View>                        
                    </View>
                </View> 
                <Text>clean pool i recommend every noe to join us I did like this academy it is new and i really enjoy it there is a lot of great coaches.</Text> 
            </View>
            <View style={{width:'100%', borderWidth:0.6, borderColor: "#aaa",}}></View>

            <View style={{width:'100%', paddingVertical:15, }}>
                <View style={{flexDirection:"row" ,alignItems:'center', marginBottom:10}}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU='}}
                    />
                    <View styles={{flexDirection: 'column',  }}>
                        <Text style={{fontSize:15, fontWeight:'bold',}}>Mohamed salah - september 2021</Text>
                        <View style={{flexDirection: 'row', alignItems:'center', justifyContent: "flex-start",}}>
                            <FontAwesome name="star" size={17} color="#FFD400"/>  
                            <FontAwesome name="star" size={17} color="#FFD400"/>  
                            <FontAwesome name="star" size={17} color="#FFD400"/>  
                            <FontAwesome name="star" size={17} color="#555"/> 
                            <FontAwesome name="star" size={17} color="#555"/> 
                        </View>                        
                    </View>
                </View> 
                <Text>i really enjoy it there is a lot of great coaches and clean pool i recommend it.</Text> 
            </View>
            <View style={{width:'100%', borderWidth:0.6, borderColor: "#aaa",}}></View>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        flex: 1,
        paddingHorizontal:20,
        alignItems: 'center'
    },
    Title:{
        fontSize: 25,
        fontWeight: "bold"
    },
    image:{
        height:60,        
        width:60,
        borderRadius:100,  
        marginRight: 15      
    },

})