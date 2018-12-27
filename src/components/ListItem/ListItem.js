import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements';

import styles from './styles';

export default class ListItem extends React.Component {    
    render(){
        let below;
        if (this.props.grade){
            below = <Text>Grade: {this.props.grade}</Text>
        } else {
            below = <Text>{this.props.class} ({this.props.session} sessions)</Text>
        }
        return(
            <TouchableOpacity>
                <View style={styles.listItem}>
                    <View style={[styles.round,styles.lightblue]}>
                        <Icon name='user' type='font-awesome' color='white' size={30} />
                    </View>
                    <View style={styles.listDetail}>
                        <Text style={styles.title}>{this.props.name}</Text>
                        {below}
                    </View>
                </View>
            </TouchableOpacity>     
        );
    }
}