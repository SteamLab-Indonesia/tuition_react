import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
   button: {
        borderRadius: '8rem',
        paddingVertical: '10rem',
        paddingHorizontal: '15rem',
        borderWidth: 1,
        backgroundColor: '$primaryBlue',
        borderColor: '$primaryBlue'
   },
   buttonText: {
       color: '$white',
       fontWeight: 'bold',
       fontSize: '16rem'
   }
})