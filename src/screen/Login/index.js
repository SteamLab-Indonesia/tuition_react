import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, ScrollView, BackHandler, Alert } from 'react-native';
import { Spinner, H1, H3, Button, Input } from 'native-base';
import { styles } from './style';
import { login } from '../../lib/User';
import { saveAccount, getEntity, getDeviceId, getDeviceType, getDeviceToken } from '../../lib/localDB';

export default class Login extends Component{

    state={
        username: '',
        password: '',
        loading: false            
    }

    updateState = (entity) => {
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
    
    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress',this.exitApp.bind(this));
        let loginUser = getEntity();
        if (loginUser && !loginUser.logout)
        {
            this.updateState(loginUser);
            this.doLogin(loginUser.username, loginUser.password);
        }
    }

    componentWillUnmount = () => {
        //this.props.onDestryApp();
        BackHandler.removeEventListener('hardwareBackPress',this.exitApp.bind(this));
    }

    exitApp = () => {

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

    doLogin = (username, password) => {
        if(username && password)
        {
            this.setState({loading: true});
            login(username, password, ((err, user) => {
                this.setState({loading: false});
                if (err)
                {
                    alert(err.message);
                }
                else
                {
                    saveAccount(user, password);
                    this.props.navigation.navigate('drawerStack');
                }
            }));
        }
    }
    
    onButtonPress = () => {
        if (this.state.username && this.state.password)
            this.doLogin(this.state.username, this.state.password);
    }    

    renderButton = () => {
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
