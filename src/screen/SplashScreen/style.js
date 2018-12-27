import { StyleSheet, Dimensions, Image, StatusBar, Platform } from 'react-native';
import { WINDOWS_SCREEN, STATUS_BAR_HEIGHT } from '../../config/constVariable';
import { LOGIN_BACKGROUND, MAIN_COLOR, ALERT_IMAGE_CONTAINER_BAKCGROUND } from '../../config/color';

const IMAGE_CONTAINER_SIZE = WINDOWS_SCREEN.height*0.45;
const INPUT_CONTAINER_PADDING = WINDOWS_SCREEN.width*0.075;
const LOGIN_BUTTON_WIDTH = WINDOWS_SCREEN.width*0.85;
const LOGIN_BUTTON_HEIGHT = WINDOWS_SCREEN.height*0.08;
const ALERT_BOX_HEIGHT = WINDOWS_SCREEN.height*0.7;
const ALERT_BOX_WIDTH = WINDOWS_SCREEN.width*0.85;
const ALERT_IMAGE_SIZE = ALERT_BOX_WIDTH*0.1;
const ALERT_TITLE_HEIGHT = ALERT_BOX_HEIGHT*0.1;
const ALERT_TITLE_FONT_SIZE = ALERT_BOX_WIDTH*0.06;
const ALERT_BUTTON_WIDTH = ALERT_BOX_WIDTH*0.4;
const ALERT_BUTTON_HEIGHT = ALERT_BOX_HEIGHT*0.1;

const PHONE_WIDTH = Dimensions.get('window').width
const PHONE_HEIGHT = Dimensions.get('window').height
const LOGO_WIDTH = PHONE_WIDTH*0.75
const LOGO_HEIGHT = PHONE_WIDTH*0.75

export const styles = StyleSheet.create({
    logo:{
        width:LOGO_WIDTH,
        height:LOGO_HEIGHT,
        resizeMode: 'contain'
    },
    emptySpace:{
        height:PHONE_HEIGHT*0.08
    },    
    redColor: {
        color: 'red',
        fontWeight: 'bold'
    },        
    greenColor: {
        color: '#045757'
    },    
    splashContainer:{
        width:PHONE_WIDTH,
        height:PHONE_HEIGHT,
        backgroundColor:'#a6d2ff',
        alignItems:'center',
        paddingTop:PHONE_HEIGHT*0.05
    },
    topContainer:{
        width:PHONE_WIDTH,
        height:PHONE_HEIGHT*0.2,
        backgroundColor:'#a6d2ff',
        alignItems:'center',
        paddingTop:PHONE_HEIGHT*0.05
    },
    mainContainer:{
        width:PHONE_WIDTH,
        height:PHONE_HEIGHT*0.5,
        alignItems:'center',
        paddingTop:PHONE_HEIGHT*0.01
    },
    bottomContainer:{
        width:PHONE_WIDTH,
        height:PHONE_HEIGHT*0.3,
        alignItems:'center',
    },
    companyName:{
        fontSize:PHONE_WIDTH*0.08,
        color:'red',
        fontWeight:'bold'
    },  
    ownerInfo:{
        fontSize:(PHONE_HEIGHT*0.1)*0.4,
        color:'red',
        fontWeight:'bold'
    }, 
})