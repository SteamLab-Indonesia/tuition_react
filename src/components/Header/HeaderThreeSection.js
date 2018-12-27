import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

export default class HeaderThreeSection extends React.Component {
    render(){
        return(
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity>
                        <View style={styles.lf}>
                            <Icon name='user-circle' type='font-awesome' color='white' size={28} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.mid}>
                        <Text style={[styles.headerText,styles.text]}>{this.props.pageTitle}</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.text}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}