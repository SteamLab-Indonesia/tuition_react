import React, { Component } from 'react';
import { View, Text } from 'native-base';
import { TouchableOpacity, ScrollView, Image } from 'react-native';
import { WINDOWS_SCREEN } from '../../config/constVariable';
import { CONTACT_ALPHABET_CONTAINER_BACKGROUND, SEARCH_BOX_CONTAINER_BACKGROUND } from '../../config/color';
import { getContacts, getExtensionContacts } from '../../action/localDB';
import _ from 'lodash';

function ContactInfoRow({ _onPress, name, number, imageUri }){
    return (
        <TouchableOpacity onPress={_onPress}>
            <View style={{backgroundColor:'white',borderBottomWidth:1,borderColor:CONTACT_ALPHABET_CONTAINER_BACKGROUND,alignItems:'center',flexDirection:'row',height:(WINDOWS_SCREEN.height*0.1),justifyContent:'flex-start'}}>
                <Image source={imageUri} style={{height:(WINDOWS_SCREEN.height*0.06),width:(WINDOWS_SCREEN.height*0.06),marginLeft:7,marginRight:7,borderRadius:(WINDOWS_SCREEN.height*0.06)/2}}/>
                <View style={{flex:1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <Text>{name}</Text>
                    <Text style={{marginTop: 8}}>{number}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default class AllContacts extends Component{
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.all != this.props.all)
            return true;
        return false;
    }

    renderContactRow() {        
        let contacts = null;
        let views = null;

        if (this.props.all)
        {
            contacts = getContacts();
            views = contacts.map((contact, index) => {
                if (contact && contact.length > 0)
                {
                    let chr = String.fromCharCode(65 + index);
                    return (
                        <View key={chr}>
                            <View style={{backgroundColor:CONTACT_ALPHABET_CONTAINER_BACKGROUND,height:(WINDOWS_SCREEN.height*0.06),justifyContent:'center'}}>
                                <Text style={{marginLeft: 20}}>{chr}</Text>
                            </View>
                            {
                                contact.map((detail) => {
    
                                    let ext_number = '';
                                    if (detail.phoneNumbers && detail.phoneNumbers.length > 0)
                                    {                                    
                                        _.each(detail.phoneNumbers, function(phone) {
                                            if (phone.label == 'mobile' && phone.number)
                                            {
                                                ext_number = phone.number;
                                            }
                                            else if (phone.label == 'phone' && phone.number)
                                            {
                                                ext_number = phone.number
                                            }
                                        })
                                    }
                                    
                                    let full_name = detail.givenName;
                                    let key = detail.recordID;

                                    if (!key)
                                        key = ext_number;
                                    if (full_name && full_name != '' && detail.familyName)
                                        full_name += ' ';
                                    if (detail.familyName && detail.familyName != '')
                                        full_name += detail.familyName;

                                    return (
                                        <ContactInfoRow key={key} imageUri={require("../../images/personImage.png")} 
                                            _onPress={()=> {
                                                if (ext_number != '')
                                                {
                                                    //this.props.screenProps.backToLogin.navigate('OutgoingCall',{targetNumber: ext_number});                                                    
                                                    this.props.navigation.navigate('Call',{name: full_name, sip: ext_number, autoCall: 0});
                                                }                                                
                                            }} 
                                            name={full_name} number={ext_number} />
                                    )                                    
                                })
                            }
                        </View>
                    )
                }
                else
                {
                    return;
                }
            });            
        }            
        else
        {
            contacts = getExtensionContacts();
            views = contacts.map((contact) => {
                if (contact)
                {
                    let ext_number = '';
                    let full_name = contact.givenName;

                    if (contact.phoneNumbers && contact.phoneNumbers.length > 0)
                    {                                    
                        _.each(contact.phoneNumbers, function(phone) {
                            if (phone.label == 'other' && phone.number)
                            {
                                isExtension = true;
                                ext_number = phone.number;
                            }
                            else
                            {
                                ext_number = contact.recordID;
                            }
                        })
                    }

                    return (
                        <View key={ext_number}>
                            <ContactInfoRow key={contact.recordID} imageUri={require("../../images/personImage.png")} 
                                _onPress={()=> {
                                    if (ext_number != '')
                                    {
                                        //this.props.screenProps.backToLogin.navigate('OutgoingCall',{targetNumber: ext_number});
                                        this.props.navigation.navigate('Call',{name: full_name, sip: ext_number, autoCall: 0});
                                    }                                                
                                }} 
                                name={full_name} number={ext_number}
                            />
                        </View>
                    )
                }
                else
                {
                    return;
                }
            });              
        }
        return views;
    }
    render(){
        return(
            <View>
                {/* <View style={{padding:20,justifyContent:'center',height:WINDOWS_SCREEN.height*0.07,backgroundColor:SEARCH_BOX_CONTAINER_BACKGROUND}}>
                    <TextInput style={{borderRadius:10,fontSize:12,height:WINDOWS_SCREEN.height*0.055,textAlign:'center',backgroundColor:'white'}} underlineColorAndroid="transparent" placeholder={"Search Box"}/>
                </View> */}
                <View height={WINDOWS_SCREEN.height} width={WINDOWS_SCREEN.width} flexDirection='row'>
                    <ScrollView width={WINDOWS_SCREEN.width*0.95} height={WINDOWS_SCREEN.height*0.66} style={{backgroundColor:'#eeeeee'}}>
                        {this.renderContactRow()}
                    </ScrollView>
                    {/* <View style={{backgroundColor:'white',width:(WINDOWS_SCREEN.width*0.05),height:(WINDOWS_SCREEN.height*0.66),backgroundColor:'white'}}>
                        <Image style={{resizeMode:Image.resizeMode.contain,height:WINDOWS_SCREEN.height*0.66,width:WINDOWS_SCREEN.width*0.05}} source={require('../../images/alphabetSearchBar.png')}/>
                    </View> */}
                </View>
            </View>
        )
    }
}
