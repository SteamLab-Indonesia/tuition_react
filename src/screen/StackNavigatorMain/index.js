import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import NavigationService from '../NavigationService';
import LoginStack from '../LoginStack';
import DrawerNavigation from '../DrawerNavigation';

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
    loginStack : {
        screen: LoginStack
    },
    drawerStack: {
        screen: DrawerNavigation
    }
},{
    initialRouteName: 'drawerStack',
    headerMode: 'none'
})

export default StackFile;