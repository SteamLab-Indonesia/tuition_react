import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    redColor: {
        color: 'red',
        fontWeight: 'bold'
    },
    greenColor: {
        color: '#045757'
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#a6d2ff',
        justifyContent: 'center',
        padding: 20
    },    
    forgotPwdContainer: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        padding: 40
    },
    hintsText: {
        fontSize: 13
    },
    logo: {
      width: 300,
      height: 100,
      marginTop: 20,
      marginBottom: 20
    },
    profileLogo: {
      width: 60,
      height: 60,
      marginTop: 20,
      marginBottom: 20
    },    
    textInput: {
        height: 50,
        fontSize: 20,
        backgroundColor: '#FFF',
        marginBottom: 10,
        textAlign: 'center'        
    },
    buttonContainer:{
        backgroundColor: '#045757',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    drawerIcon: {
        marginRight: 20,
        marginLeft: 20,
        color: 'green'
    }          
});