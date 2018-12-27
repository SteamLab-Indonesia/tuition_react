import { StyleSheet, Dimensions, Image } from 'react-native';

const PHONE_WIDTH = Dimensions.get('window').width
const PHONE_HEIGHT = Dimensions.get('window').height
const LOGO_WIDTH = PHONE_WIDTH*0.75
const LOGO_HEIGHT = PHONE_WIDTH*0.5

export const styles = StyleSheet.create({
    logo:{
        width:LOGO_WIDTH,
        height:LOGO_HEIGHT,
        resizeMode: 'contain'
    },  
    redColor: {
        color: 'red',
        fontWeight: 'bold'
    },        
    greenColor: {
        color: '#045757'
    },    
    loginContainer:{
        width:PHONE_WIDTH,
        // height:PHONE_HEIGHT - (Platform.select({ios:0,android:StatusBar.currentHeight})),
        height:PHONE_HEIGHT,
        backgroundColor:'#a6d2ff',
        alignItems:'center',
        paddingTop:PHONE_HEIGHT*0.02
    },
    companyName:{
        fontSize:PHONE_WIDTH*0.08,
        color:'red',
        fontWeight:'bold'
    },
    input:{
        width:PHONE_WIDTH*0.9,
        height:PHONE_HEIGHT*0.075,
        backgroundColor:'white',
        textAlign:'center',
        marginVertical:PHONE_HEIGHT*0.01,
        fontSize:(PHONE_HEIGHT*0.08)*0.4
    },
    loginButton:{
        width:PHONE_WIDTH*0.9,
        height:PHONE_HEIGHT*0.075,
        backgroundColor:'#045757',
        marginVertical:PHONE_HEIGHT*0.02,
        justifyContent:'center',
        alignItems:'center'
    },
    loginText:{
        color:'white',
        fontSize:(PHONE_HEIGHT*0.08)*0.3,
        fontWeight:'bold'
    },
    forgotButton:{
        width:PHONE_WIDTH*0.9,
        height:PHONE_HEIGHT*0.075,
        justifyContent:'center',
        alignItems:'center'
    },    
    forgotPasswordText:{
        color:'#045757'
    },    
    ownerInfoContainer:{
        width:PHONE_WIDTH,
        height:PHONE_HEIGHT*0.1,
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:PHONE_HEIGHT*0.08
    },
    ownerInfo:{
        fontSize:(PHONE_HEIGHT*0.1)*0.4,
        color:'red',
        fontWeight:'bold'
    }
})