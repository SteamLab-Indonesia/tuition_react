import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
//styles
import styles from './styles';

const GridButton = ({buttonText,onPressButton}) => (
    <TouchableOpacity onPress={event => onPressButton(event)}>
        <View style={styles.gridButton}>
            <Text style={styles.gridButtonText}>{buttonText}</Text>
        </View>
    </TouchableOpacity>
);

GridButton.propTypes = {
    buttonText: PropTypes.string
};

export default GridButton;