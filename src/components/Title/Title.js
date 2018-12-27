import React from 'react';
import { View, Text } from 'react-native';
//styles
import styles from './styles';

const Title = ({title}) => (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </View>
)

export default Title;