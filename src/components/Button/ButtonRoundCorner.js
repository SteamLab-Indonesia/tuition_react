import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
//styles
import styles from './styles';

const ButtonRoundCorner = ({buttonText,onPressButton}) => (
    <TouchableOpacity onPress={event => onPressButton(event)}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
    </TouchableOpacity>
);

ButtonRoundCorner.propTypes = {
    buttonText: PropTypes.string
};

export default ButtonRoundCorner;