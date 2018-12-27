import { StyleSheet } from 'react-native'
import { WINDOWS_SCREEN } from '../../config/data'

const BUTTON_SIZE = WINDOWS_SCREEN.width*0.35
const ACTIVITIES_BUTTON = (WINDOWS_SCREEN.height*0.125)-WINDOWS_SCREEN.width*0.1
const PROFILE_AVATAR_CONTAINER_HEIGHT = WINDOWS_SCREEN.height*0.125
const PROFILE_AVATAR_SIZE = PROFILE_AVATAR_CONTAINER_HEIGHT*0.6

export const styles = StyleSheet.create({
    profileDetailContainer:{
        width:WINDOWS_SCREEN.width,
        height:PROFILE_AVATAR_CONTAINER_HEIGHT,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'white'
    },
    activitiesButtonContainer:{
        width:WINDOWS_SCREEN.width,
        height:WINDOWS_SCREEN.height*0.12,
//        padding:WINDOWS_SCREEN.width*0.02,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    activitiesButton:{
        width:WINDOWS_SCREEN.width*0.9,
        height:ACTIVITIES_BUTTON,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    activitiesButtonText:{
        color:'white',
        fontSize: ACTIVITIES_BUTTON*0.35,
        fontWeight:'bold'
    },
    buttonContainer:{
        width:WINDOWS_SCREEN.width,
        height:WINDOWS_SCREEN.height*0.5,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    button:{
        width:BUTTON_SIZE,
        height:BUTTON_SIZE,
        borderRadius:BUTTON_SIZE/2,
        margin:WINDOWS_SCREEN.width*0.05,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonImage:{
        width:BUTTON_SIZE,
        height:BUTTON_SIZE,
        borderRadius:BUTTON_SIZE/2,
    },
    buttonText:{
        position:'absolute',
        fontSize:BUTTON_SIZE*0.25,
        fontWeight:'bold',
    }
})