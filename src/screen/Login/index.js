import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, ScrollView, BackHandler, Alert } from 'react-native';
import { Spinner, H1, H3, Button, Input } from 'native-base';
import { styles } from './style';
import { login } from '../../action';
// import { connect } from 'react-redux';
import { saveAccount, getEntity, getDeviceId, getDeviceType, getDeviceToken } from '../../lib/localDB';
import firebase from 'react-native-firebase';

export default class Login extends Component{

    state={
        username: '',
        password: '',
        loading: false            
    }

    updateState(entity) {
        if (entity)
        {
            this.setState({
                username: entity.username,
                password: entity.password
            })    
        }
    }

    componentWillMount(){
        //StatusBar.setHidden(false);
    }
    
    async componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress',this.exitApp.bind(this));
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                user,
            });
            if (user)
            {
                if (user)
                {
                    firebase.firestore().collection('users').where("username", "==", user.email)
                    .get()
                    .then(function(querySnapshot) {
                        console.log('query result:');
                        querySnapshot.forEach(function(doc) {
                            // binded to the UI
                            console.log(doc.data());
                        });
                    });                                                        
                }

                this.props.navigation.navigate('Drawer');
            }
            else
            {
                const entity = getEntity();
                if (entity)
                {
                    this.updateState(entity);
                }
            }
        });

    }

    componentWillUnmount(){
        //this.props.onDestryApp();
        BackHandler.removeEventListener('hardwareBackPress',this.exitApp.bind(this));
    }

    exitApp(){

            Alert.alert(
                'Quit',
                'Are you sure want to quit?',
                [
                    {text: 'Yes', onPress: ()=> BackHandler.exitApp()},
                    {text: 'No', onPress: ()=> null}
                ],
                {cancelable: false}
            )
            return true;
    }

    async doLogin(username, password) {
        if(username && password)
        {
            this.setState({loading: true});
            const { username, password } = this.state;
            firebase.auth().signInAndRetrieveDataWithEmailAndPassword(username, password)
            .then((user) => {

                this.setState({loading: false});
                console.log('after login:');
                console.log(user);

                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the 
                // `onAuthStateChanged` listener we set up in App.js earlier
            })
            .catch((error) => {
                this.setState({loading: false});
                const { code, message } = error;

                console.log('login error:');
                console.log(code);
                console.log(message);
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
            });


            
            // if (!response)
            // {
            //     Alert.alert(
            //         'Error',
            //         'Unknown Error, Please Contact Administrator',
            //         [
            //             {text: 'OK', onPress: ()=> null}
            //         ],
            //         {cancelable: false}
            //     )
            // }
            // else if (response.Error)
            // {
            //     if (response.ErrorDesc)
            //     {
            //         Alert.alert(
            //             'Login',
            //             response.ErrorDesc,
            //             [
            //                 {text: 'OK', onPress: ()=> null}
            //             ],
            //             {cancelable: false}
            //         )                          
            //     }
            //     else
            //     {
            //         Alert.alert(
            //             'Login',
            //             'Please Contact Administrator',
            //             [
            //                 {text: 'OK', onPress: ()=> null}
            //             ],
            //             {cancelable: false}
            //         )
            //     }
            // }                
            // else if (response.Data)
            // {
            //     saveAccount(response.Data, entity_password);               
            //     this.props.navigation.navigate('Drawer');
            // }
            // else
            // {
            //     Alert.alert(
            //         'Error',
            //         'Please check your internet connection and try again',
            //         [
            //             {text: 'OK', onPress: ()=> null}
            //         ],
            //         {cancelable: false}
            //     )                
            // }
        }
    }
    async onButtonPress() {
        if (this.state.username && this.state.password)
            await this.doLogin(this.state.username, this.state.password);
    }    

    renderButton() {
        if (this.state.loading) {
            return <Spinner color="red" size="small" />;
        }

        return (
            <View>
                <TouchableOpacity style={styles.loginButton} onPress={this.onButtonPress.bind(this)}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.forgotButton} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.loginContainer}>                    
                    <Image style={styles.logo} source={require('../../images/logo.png')} />
                    <TextInput underlineColorAndroid='transparent' onChangeText={(username)=>{
                        this.setState({username});
                        }} value={this.state.username} 
                            style={styles.input} placeholder='Username'/>
                    <TextInput underlineColorAndroid='transparent' onChangeText={(password)=>{
                        this.setState({password});
                        }} secureTextEntry={true} value={this.state.password}
                            style={styles.input} placeholder='Password'/>
                    {this.renderButton()}
                    <View style={styles.ownerInfoContainer}>
                        <Text>Powered By</Text>
                        <Text style={styles.ownerInfo}>TribeApp</Text>
                    </View>                
                </View>
            </ScrollView>
        )
    }
}

// function select(store){
//     return{

//     }
// }

// function actions(dispatch){
//     return{
        
//     }
// }

// export default connect(select,actions)(Login);
