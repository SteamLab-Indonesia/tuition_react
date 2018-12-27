import EStyleSheet from 'react-native-extended-stylesheet';

import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height

export default EStyleSheet.create({
    header: {
        backgroundColor: '$primaryBlue',
        height: screenHeight * 0.07
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal : '10rem'
    },
    left: {
        flex: 0.5,
        justifyContent: 'center',
        alignContent: 'flex-start',
        paddingLeft: '10rem'
    },
    right: {
        flex: 9.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: '18rem',
        color: '$white'
    },
    text:{
        color: '$white',
        fontWeight: 'bold'
    },
    lf: {
        flex: 0.5,
        justifyContent: 'flex-start'
    },
    mid: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rg: {
        flex: 0.5,
        alignContent: 'flex-end'
    }
})