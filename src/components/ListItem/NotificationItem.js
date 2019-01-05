import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
//styles
import styles from './styles';

export default class ListItem extends React.Component {    
    render(){
        return(
            <TouchableOpacity>
                <View style={styles.notifItem}>
                    <View style={styles.iconNotif}>
                        <Icon name='bell' type='entypo' color='#045757' size={32}/>
                    </View>
                    <View>
                        <Text style={styles.notifCategory}>{this.props.category}</Text>
                        <Text>{this.props.message}</Text>
                    </View>
                </View>
            </TouchableOpacity>     
        );
    }
}