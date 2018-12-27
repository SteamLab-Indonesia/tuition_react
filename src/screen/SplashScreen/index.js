import { Image, View, Text, StatusBar, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { styles } from './style';

export default class SplashScreen extends Component{
    componentDidMount(){
        StatusBar.setHidden(true);
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 3000)        
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.splashContainer}>
                    <View style={styles.topContainer}>
                    </View>
                    <View style={styles.mainContainer}>
                        <Image style={styles.logo} source={require('../../images/logo.png')} />
                        <View style={styles.emptySpace}/>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text>Powered By</Text>
                        <Text style={styles.ownerInfo}>TribeApp</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }    
}
