import { StackNavigator } from 'react-navigation';
import React from 'react';
import SplashScreen from './SplashScreen';
import LoginScreen from './Login';
import ForgotPasswordScreen from './ForgotPassword';
import NavigationService from './NavigationService';
import { HeaderBackButton } from 'react-navigation';

const LoginStack = StackNavigator({
    Splash : {
        screen: SplashScreen,
        navigationOptions:{
            header:null
        }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            header:null
        }
    },
    ForgotPassword:{
        screen: ForgotPasswordScreen,
        navigationOptions:{
            headerTitle: 'STEAMLAB',
            headerStyle: {backgroundColor: '#a6d2ff'},
            headerTitleStyle: {
                fontWeight: 'bold',
                color: 'red'
            },            
            headerLeft: <HeaderBackButton title='Login' onPress={() => NavigationService.navigate('Login')}/>
        }
    }
},{
    initialRouteName: 'Splash'
})

export default LoginStack;