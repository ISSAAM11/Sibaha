import { View,StyleSheet,Image ,Text} from "react-native"
import Hr from "react-native-hr-component";
import {AntDesign,} from 'react-native-vector-icons/'

export default function AcademyCoach( { navigation} ) {
    
    return (
        <View style={styles.container}>
            <View style={{marginVertical:15}}>
                <Text style={styles.Title}>Academy Sport</Text>  
                <Text style={styles.Title}>8 coaches</Text>  
            </View>
            
            <View style={{width:'100%', borderWidth:0.6, borderColor: "#aaa",}}></View>

            <View style={styles.coachContainer}>
                <View style={{flexDirection:"row" ,alignItems:'center', }}>

                    <Image
                        style={styles.image}
                        source={{uri: 'https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=',}}
                    />
                    <View styles={{flexDirection: 'column', alignItems:'center', }}>
                        <Text style={{fontSize:20, fontWeight:'bold',marginBottom:3}}>Jamel ben selem</Text>
                        <Text style={styles.textThin}>Specialities: kids</Text>
                        <Text style={styles.textThin}>English, Italien</Text>
                        
                    </View>
                </View>
                <AntDesign name="right" size={30} color="#3BADFF" />
            </View>

            <View style={{width:'100%', borderWidth:0.6, borderColor: "#aaa",}}></View>


            <View style={styles.coachContainer}>
                <View style={{flexDirection:"row" ,alignItems:'center', }}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'}}
                    />
                    <View styles={{flexDirection: 'column', alignItems:'center', }}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Mohamed salah </Text>
                        <Text style={styles.textThin}>Specialities: kids</Text>
                        <Text style={styles.textThin}>English, Italien</Text>
                        
                    </View>
                </View>
                <AntDesign name="right" size={30} color="#3BADFF" />
            </View>
            <View style={{width:'100%', borderWidth:0.6, borderColor: "#aaa",}}></View>

            {/*<Hr lineColor="#aaa" width={1}  />*/}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        flex: 1,
        paddingHorizontal:15,
        alignItems: 'center'
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
    }
})