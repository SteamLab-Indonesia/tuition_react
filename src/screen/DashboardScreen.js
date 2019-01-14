import React from 'react';
import { ScrollView, View, Text } from 'react-native';
//self-made component
import { DefaultHeader } from '../components/Header'
import { BigRow } from '../components/Row'
import { MySwiper } from '../components/Swiper'
import { GridButton } from '../components/Button'
import NavigationService from './NavigationService'

export default class DashboardScreen extends React.Component{
    goToCourse(){
        NavigationService.navigate('Course List')
    }

    toggleDrawer(){
        NavigationService.toggleDrawer()
    }

    render(){
        return(
            <ScrollView>
                <View>
                    <DefaultHeader pageTitle="STEAMLAB" handleClick={this.toggleDrawer}/>
                    <MySwiper />
                    <BigRow>
                        <GridButton buttonText="COURSES" onPressButton={this.goToCourse}/>
                        {/* <GridButton buttonText="NEWSLETTERS" /> */}
                        <GridButton buttonText="ATTENDANCE" />
                    </BigRow>
                    <BigRow>
                        {/* <GridButton buttonText="FREE TRIAL" />
                        <GridButton buttonText="COMMUNICATIONS" /> */}
                        <GridButton buttonText="FEE" />
                        <GridButton buttonText="EVENTS" />
                    </BigRow>
                    <BigRow>
                        <GridButton buttonText="REWARD" />
                        <GridButton buttonText="STUDENT REPORT" />
                    </BigRow>
                </View>
            </ScrollView>
        )
    }
}