import React from 'react';
import PropTypes from 'prop-types';
import { Text , TextInput } from 'react-native';
//self-made components
import { Row } from '../Row';
//styles
import styles from './styles';

const TextInputWithLabel = ({inputLabel,inputPlaceholder,passText}) => (
    <Row>
        <Text style={[styles.labelText,styles.label]}>{inputLabel}</Text>
        <TextInput placeholder={inputPlaceholder} style={styles.textBox} onChangeText={text => passText(text)} />
    </Row>
)

TextInputWithLabel.propTypes = {
    inputLabel: PropTypes.string,
    inputPlaceholder: PropTypes.string
}

export default TextInputWithLabel;