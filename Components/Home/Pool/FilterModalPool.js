import { View, Modal, StyleSheet, Text, Pressable  } from 'react-native'
import React, {useState} from 'react'
import {Row, Table} from 'react-native-table-component'
import { CheckBox } from "react-native-elements"
import RadioGroup from 'react-native-radio-buttons-group';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Slider from "react-native-a11y-slider";


const FilterModalPool = (props) => {
    const [isChecked, setIsChecked] = useState(false)
    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            value: 'option1'
        },
        {
            id: '2',
            value: 'option2'
        }
    ]); 

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

    const addLanguage = (lang) => {
        if (!props.languages.includes(lang)){
            props.setLanguages([...props.languages, lang]); 
        } else {
            const newList = props.languages.filter(item => item !== lang);
            props.setLanguages(newList);
        }
    }

    const addCategory = (element) => {
        if (!props.category.includes(element)){
            props.setCategory([...props.category, element]); 
        } else {
            const newList = props.category.filter(item => item !== element);
            props.setCategory(newList);
        }
    }
  return (
    <View>
        <Modal 
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                props.setModalVisible(!props.modalVisible);
              }}>

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.titleModal}>Filters</Text>
                    <View style={{width:'100%',marginBottom:15, borderWidth:0.6, borderColor: "#aaa",}}></View>

                    <View style={styles.tableLines}>
                    
                        <View style={{flexDirection:"row",width:"100%",justifyContent: "space-between", }}>
                            <Text>Favorite</Text>

                            <BouncyCheckbox size={22}
                                style={styles.checkBox}
                                fillColor="#2196F3"
                                iconStyle={{ borderColor: "#2196F3" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                isChecked={props.favorite}
                                onPress={()=> props.setFavorite(!props.favorite)}
                            />
                        </View>

                        <View style={{flexDirection:"row",width:"100%",justifyContent: "space-between", }}>
                            <Text>Heated</Text>

                            <BouncyCheckbox size={22}
                                style={styles.checkBox}
                                fillColor="#2196F3"
                                iconStyle={{ borderColor: "#2196F3" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                isChecked={props.isHeated}
                                onPress={()=> props.setIsHeated(!props.isHeated)}
                            />
                        </View>          

                        <View style={{flexDirection:"row",width:"100%",justifyContent: "space-between", }}>
                            <Text>Out door</Text>

                            <BouncyCheckbox size={22}
                                style={styles.checkBox}
                                fillColor="#2196F3"
                                iconStyle={{ borderColor: "#2196F3" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                isChecked={props.isOutDoor}
                                onPress={()=> props.setIsOutDoor(!props.isOutDoor)}
                            />
                        </View> 

                        <View style={{flexDirection:"row",width:"100%",justifyContent: "space-between", }}>
                            <Text>Showers </Text>

                            <BouncyCheckbox size={22}
                                style={styles.checkBox}
                                fillColor="#2196F3"
                                iconStyle={{ borderColor: "#2196F3" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                isChecked={props.favorite}
                                onPress={()=> props.setFavorite(!props.favorite)}
                            />
                        </View>  

                        <View style={{flexDirection:"row",width:"100%",justifyContent: "space-between", }}>
                            <Text style={styles.modalText}>Rate</Text>
                        </View> 

                        <Slider min={0} max={6} values={100} 
                            setA11yMarkerProps={ (e)=> {props.setRate(e.value) }}
                        />

                        <View style={{flexDirection:"row",width:"100%",justifyContent: "space-between", }}>
                            <Text style={styles.modalText}>Prix max</Text>
                        </View>

                        <Slider min={0} max={99} values={99}  
                        setA11yMarkerProps={ (e)=> {props.setPrixMax(e.value) }}/>

                    </View>

                    <View style={{flexDirection:"row",justifyContent: "space-around",}}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => props.setModalVisible(false)}>
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonfilter]}
                            onPress={() => {props.setModalVisible(!props.modalVisible);
                                            props.forceUpdate()} }>
                            <Text style={styles.textStyle}>Filter</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default FilterModalPool

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    titleModal:{
        alignContent:"center",
        fontWeight:"700",
        fontSize: 20,
        marginBottom:10
    },
    modalView: {
        width: "90%",
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: 'red',
        margin:10

    },
    buttonfilter: {
        backgroundColor: '#2196F3',
        margin:10
    },
    textStyle: {
        fontSize:15,
        marginHorizontal:15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginTop:10,
        marginBottom:5,
        fontWeight:"600",
        alignSelf: 'flex-start',
    },
    checkBox:{
        marginBottom: 5,
        alignSelf:"flex-end"
    },
    Line:{
        flexDirection:"row" ,
        alignItems:'center', 
        justifyContent: "space-between", 
    },
    tableLines:{
        flexDirection:"column",width:"100%",
        alignItems:'flex-end',paddingTop:15,
        justifyContent: "space-between", 
    },
    underTitle:{
        flexDirection:"row",width:"100%",
        justifyContent: "space-between",
        paddingLeft:15, 
    }
})