import React from 'react';
import { CustomHeader } from '../../config/component'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './style';
import { getEntity } from '../../lib/localDB'

export default class Dashboard extends React.Component{



    async componentWillMount() {

        const entity = getEntity();

    }

    componentWillUnmount() {
        // OneSignal.removeEventListener('received', this.onReceived);
        // OneSignal.removeEventListener('opened', this.onOpened);
    }

    render(){

        return(
            <View>
                <CustomHeader _onPress={()=>this.props.screenProps.drawerProps.navigate('DrawerOpen')} title='STEAMLAB'/>
                <View style={styles.profileDetailContainer}>
                </View>
            </View>
        )
    }
}
