import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

export default class HeaderWithBack extends React.Component {
    render(){
        return(
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.left}>
                        <View>
                            <Icon name='md-arrow-round-back' type='ionicon' color='black' />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.right}>
                        <Text style={styles.headerText}>{this.props.pageTitle}</Text>
                    </View>
                </View>
            </View>
        );
    }
}