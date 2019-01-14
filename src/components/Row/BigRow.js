import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const BigRow = ({children}) => (
    <View style={styles.bigRow}>
        {children}
    </View>
);

BigRow.propTypes = {
    children: PropTypes.any,
};

export default BigRow;