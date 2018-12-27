import React from 'react';
import { View, Text } from 'react-native';
//self made components
import { HeaderThreeSection } from '../components/Header'
//import screen
import TabNavigator  from './TabNavigator'

export default class ParentView extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <HeaderThreeSection pageTitle="Lala" />
                <TabNavigator />
            </View>
        )
    }
}