import {Text, View, StyleSheet,TextInput,Image,ScrollView, TouchableOpacity} from 'react-native';
import {AntDesign,Octicons,MaterialCommunityIcons} from 'react-native-vector-icons';

export default function CoachDetails( {route, navigation} ) {
    
    const {id, name, image, Language, location, description } = route?.params;

    const ModifyInformation = () => {
        console.log(" test ")
    }
    return (
            <ScrollView style={{flex:1, backgroundColor:"#fff"}}>
            <View style={{paddingHorizontal:20,paddingTop:20}}>
                <Image
                    style={styles.image}
                    source={{uri: image}}
                />
                <Text style={styles.userName}>{name} </Text>
                <View style={{paddingBottom:10}}>
                    <View style={{flexDirection:"row",alignItems:'center'}}>
                        <MaterialCommunityIcons name="account" size={25} color="#3d99ff" style={{paddingRight:5}}/>
                        <Text >50 Student</Text>
                    </View>
                    <Text>member since october 2020</Text>
                </View>
            </View>
            <TouchableOpacity  style={styles.buttons} onPress={()=>navigation.navigate("PoolAcademy")}>
                <Text style={{fontWeight:'bold'}}>Academy: Sport center</Text>
                <AntDesign name="right" size={30} color="#3BADFF" />
            </TouchableOpacity> 

            <View style={{paddingHorizontal:20,}}>
                <Text style={styles.sousTitre}>Info</Text>

                <View style={{flexDirection:"row", paddingBottom:10}}>
                    <View style={{flexDirection:"column",marginRight:20,}}>
                        <Text>Gender</Text>
                        <Text>Age</Text>
                        <Text>Nationality</Text>
                        <Text>Speciality</Text>
                        <Text>Qualifications</Text>
                        <Text>Language</Text>
                    </View>

                    <View style={{flexDirection:"column"}}>
                        <Text>Male</Text>
                        <Text>30</Text>
                        <Text>USA</Text>
                        <Text>Adult, kids</Text>
                        <Text>Diploma</Text>
                        <Text>English</Text>
                    </View>
                </View>

                <View style={{width:'100%', borderWidth:0.6, borderColor: "#aaa",marginBottom:10}}></View>
                <Text style={styles.sousTitre}>Contact</Text>

                <View style={{flexDirection:"row",paddingBottom:10}}>
                    <View style={{flexDirection:"column",marginRight:20,}}>
                        <Text>age</Text>
                        <Text>Email</Text>
                        <Text>Phone</Text>
                        <Text>Location</Text>
                    </View>

                    <View style={{flexDirection:"column"}}>
                        <Text>30</Text>
                        <Text>Example@mail.com</Text>
                        <Text>+210 541 214 365</Text>
                        <Text>Dubai</Text>
                    </View>
                </View>
                
                <View style={{width:'100%', borderWidth:0.6, borderColor: "#aaa",marginBottom:10}}></View>

                <Text style={styles.sousTitre}>More</Text>

                <View style={{flexDirection:"row",paddingBottom:20}}>
                    <Text>Hi, I'm a swimming coach and I've been teaching for 10 years, and actually i am in this academy, you are welcome any time</Text>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({

    image:{
        height:110,        
        width:110,
        borderRadius:100,
    },
    imageContainer:{
        paddingVertical:15,
        backgroundColor:"#eee",
        alignItems:'center', 
        flexDirection: "column",
        width:"100%",
        height:190,  
    },
    userName:{
        fontSize: 25,
        fontWeight:'bold',
    },
    backButton:{
        borderRadius:50,
        height:37,
        width: 40,
        backgroundColor:"#fff",
        margin: 15,
        alignSelf:'flex-start'
    },
    sousTitre:{
        fontWeight:"700",
        fontSize:17,
        marginBottom:10
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
        paddingHorizontal:15,
        marginBottom:10,
    },
})