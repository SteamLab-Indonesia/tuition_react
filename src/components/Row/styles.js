import EStyleSheet from 'react-native-extended-stylesheet';

import { Dimensions } from 'react-native';

export default EStyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        padding: '15rem',
        alignItems: 'center'
    },
    bigRow: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: '12rem',
        paddingHorizontal: Dimensions.get('screen').width*0.15,
        alignItems: 'center'
    }
})