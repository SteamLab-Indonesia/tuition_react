import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import styles from './styles';

const Container = ({children}) => (
    <ScrollView style={styles.container}>
        {children}
    </ScrollView>
);

Container.propTypes = {
    children: PropTypes.any,
};

export default Container;