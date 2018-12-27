import React from 'react';
import { View, Text } from 'react-native';
import { PropTypes } from 'prop-types';

import { Dropdown } from 'react-native-material-dropdown';
import { Row }  from '../Row';

import styles from './styles';

const DropdownWithLabel = ({labelText,data,passChangeText}) => {
    return(
        <Row>
            <View style={styles.text}>
                <Text style={styles.filterText}>{labelText}</Text>
            </View>
            <Dropdown
                    label={labelText}
                    data={data}
                    containerStyle={styles.dropdown}
                    dropdownOffset={{top:0,left:0}}
                    onChangeText={text => passChangeText(text)}
                    rippleInsets={{top:0,bottom:0}}
                    dropdownPosition={0}
                />
        </Row>
    )
}

DropdownWithLabel.propTypes = {
    labelText: PropTypes.string,
    data:  PropTypes.array
}

export default DropdownWithLabel;

