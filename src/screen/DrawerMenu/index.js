import React from 'react'
import { DrawerNavigator, DrawerItems } from 'react-navigation'
import { Image, Text, View } from 'react-native'
import { Container, Header, Icon } from 'native-base'
import DashboardScreen from '../Dashboard'
import NavigationService from '../NavigationService';
import OneSignal from 'react-native-onesignal';
import { getEntity } from '../../lib/localDB';
import { styles } from './style';

let _profile = require('../../images/profileIcon.png');
let _name = '';

export default class DrawerMenu extends React.Component{

    componentWillMount() {
        const _entity = getEntity();
        if (_entity && _entity.profile)
        {
            _profile = {uri: _entity.profile};
            _name = _entity.name;
        }
    }
    
    componentDidMount() {
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);        
        OneSignal.setSubscription(true);
        OneSignal.configure();      
    }

    componentWillUnmount() {
    }

    onReceived(notification) {
        // console.log("Notification received: ", notification);
        //NavigationService.navigateDrawer('AccessInfo');
    }

    onOpened(openResult) {
     
    }

    render(){
        return(
            <Drawer 
                ref={navigatorRef => {
                    NavigationService.setTopLevelDrawer(navigatorRef);
                }}
                screenProps={this.props.navigation} mainProps={this.props} 
            />
        )
    }
}

const CustomDrawer = (props) => (
    <Container>
        <Header style={{height:200, backgroundColor: 'white', flexDirection: 'column', justifyContent:'center',alignItems:'center'}}>
            <Image style={styles.profileAvatar} source={_profile}/>
            <Text style={styles.profileName}>{_name}</Text>
            <Text style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width: '100%'
                }}></Text>
        </Header>
        <DrawerItems {...props}/>
    </Container>
)

const Drawer = DrawerNavigator({
    Dashboard:{
        screen:(props)=>(
            <DashboardScreen screenProps={{drawerProps:props.navigation,stackProps:props}}/>
        ),
        navigationOptions: {
            drawerLabel:()=> null
        }
    }

},{
    initialRouteName:'Dashboard',
    drawerPosition:'left',
    contentComponent:CustomDrawer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
})

