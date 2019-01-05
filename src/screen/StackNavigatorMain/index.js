import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import SplashScreen from '../SplashScreen';
import LoginScreen from '../Login';
import DrawerScreen from '../DrawerMenu';
import ForgotPasswordScreen from '../ForgotPassword';
import NavigationService from '../NavigationService';
import { HeaderBackButton } from 'react-navigation';
import StudentAttendance from '../StudentAttendance';
import TeacherAttendance from '../TeacherAttendance';
import TeacherList from '../TeacherList';
import StudentList from '../StudentList';
import ParentView from '../ParentView';

class StackFile extends Component{
    render(){
        return(
            <Stack ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
        )
    }
}

const Stack = StackNavigator({
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
    },    
    Drawer:{
        screen:({navigation})=> <DrawerScreen mainNavigateProps={navigation}/>,
        navigationOptions:{
            header:null
        }
    },
    StudentAttendance: {
        screen: StudentAttendance,
        navigationOptions: {
            header: null
        }
        
    },
    TeacherAttendance: {
        screen: TeacherAttendance,
        navigationOptions: {
            header: null
        }
        
    },
    TeacherList: {
        screen: TeacherList,
        navigationOptions: {
            header: null
        }
        
    },
    StudentList: {
        screen: StudentList,
        navigationOptions: {
            header: null
        }
        
    },
    ParentView: {
        screen: ParentView,
        navigationOptions: {
            header: null
        }
        
    }
},{
    initialRouteName: 'ParentView'
})

export default StackFile;