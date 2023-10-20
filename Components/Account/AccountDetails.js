import {Text, View, StyleSheet,TextInput,Image,ScrollView, TouchableOpacity} from 'react-native';
import {AntDesign,Feather,MaterialCommunityIcons} from 'react-native-vector-icons';
import { AuthContext } from '../../AuthContext';
import React from 'react';
export default function AccountDetails( { navigation} ) {
    
    const {signOut} = React.useContext(AuthContext)

    const ModifyInformation = () => {
        console.log(" test ")
    }
    return (
        <View style={styles.container}>
            

            <ScrollView >
                <View style={[styles.imageContainer]}>

                </View>
                <View style={{marginTop:-35,backgroundColor: "#fff", zIndex:1, borderTopLeftRadius:40, borderTopRightRadius:40}}>
                    <View style={{alignItems:"center",marginTop: -80}}>
                        <Image
                            style={styles.image}
                            source={{uri: 'https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=',}}
                        />
                        <Text style={styles.userName}>  Nom Prénom </Text>
                    </View>
                    <View style={styles.descriptionButtons}>
                        <Text style={styles.textDescription}> Info </Text>
                    </View>
                    <TouchableOpacity  style={styles.buttons} onPress={()=>navigation.navigate("MyInformation")}>
                            <Text style={styles.textButton}> My information </Text>
                            <AntDesign name="rightcircleo" size={30} color="#aaa" />
                    </TouchableOpacity> 
                    <TouchableOpacity  style={styles.buttons}>
                            <Text style={styles.textButton}> My Reservation </Text>
                            <AntDesign name="rightcircleo" size={30} color="#aaa" />
                    </TouchableOpacity>
                    <View style={styles.descriptionButtons}>
                        <Text style={styles.textDescription}> More </Text>
                    </View>
                    <TouchableOpacity  style={styles.buttons} onPress={()=> navigation.navigate("ChangePassword")}>
                            <Text style={styles.textButton}> Change password </Text>
                            <AntDesign name="rightcircleo" size={30} color="#aaa" />
                    </TouchableOpacity> 
                    <TouchableOpacity  style={styles.buttons}>
                            <Text style={styles.textButton}> Language: English </Text>
                            <AntDesign name="rightcircleo" size={30} color="#aaa" />
                    </TouchableOpacity> 

                    <TouchableOpacity  style={styles.buttons} onPress={() => signOut() }>
                            <Text style={[styles.textButton,{color:"#e44"}]}> Disconnect </Text>
                    </TouchableOpacity> 
                </View>
            </ScrollView>
{/*           
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
        backgroundColor:"#fff",
        flex: 1,
    },
    buttons:{
        backgroundColor: '#F5F5F5',        
        borderBottomWidth:1,
        borderColor:"#bbb",
        height:70,           
        flexDirection:"row" ,
        alignItems:'center', 
        justifyContent: "space-between", 
        paddingHorizontal:25
    },
    image:{
        height:170,        
        width:170,
        borderWidth:5, 
        borderColor:"fff",
        borderRadius:100,
        marginBottom:10,
        
    },
    imageContainer:{
        backgroundColor:"#3BADFF",
        paddingTop:60,
        alignItems:'center', 
        flexDirection: "column",
        width:"100%",
        height:160,  
    },
    userName:{
        fontSize: 25,
        fontWeight:'bold',
        marginBottom: 10,
    },
    viewDetailes:{
        flexDirection:"column" ,
        justifyContent: "center", 
        alignItems:'center', 
    },
    textButton: {
        color: "#111",
        fontSize: 15,
        fontWeight: "bold",
    },
    descriptionButtons:{
        backgroundColor:"#fff",
        height:70,  
        justifyContent: "center", 
        borderBottomWidth:1,
        borderColor:"#aaa"
    },
    textDescription:{
        color: "#999",
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 25
    },
    footer:{
        zIndex:10,
        backgroundColor: '#F8F8F8',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignContent:"flex-end",
        padding: 10, 
        position:'absolute',
        bottom:0
    }
})