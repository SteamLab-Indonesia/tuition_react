import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';


export default class DefaultHeader extends React.Component {
    render(){
        return(
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={this.props.handleClick}>
                        <View style={styles.lf}>
                            <Icon name='menu' type='material-community' color='white' size={28} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.mid}>
                        <Text style={[styles.headerText]}>{this.props.pageTitle}</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.lf}>
                            <Icon name='md-notifications' type='ionicon' color='white' size={28} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}