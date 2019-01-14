import EStyleSheet from 'react-native-extended-stylesheet';

import { Dimensions } from 'react-native';

const HALF_WIDTH = Dimensions.get('screen').width*0.3
const LIL_MARGIN = Dimensions.get('screen').width*0.05

export default EStyleSheet.create({
   button: {
        borderRadius: '8rem',
        paddingVertical: '10rem',
        paddingHorizontal: '15rem',
        borderWidth: 1,
        backgroundColor: '#045757',
        borderColor: '#045757'
   },
   buttonText: {
       color: '$white',
       fontWeight: 'bold',
       fontSize: '16rem'
   },
   gridButton: {
       borderColor: '#a6d2ff',
       borderWidth: 2,
       width: HALF_WIDTH,
       height: HALF_WIDTH,
       justifyContent: 'center',
       alignItems: 'center',
       marginRight: LIL_MARGIN
   },
   gridButtonText: {
        color: 'black',
        fontSize: '12rem'
   }
})