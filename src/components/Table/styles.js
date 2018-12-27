import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    table: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    bordered: {
        borderWidth: 0.5,
        borderColor: '#0a4096'
    },
    header: {
        backgroundColor: '#0a4096',
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold'
    },
    cell: { 
        flex: 1, 
        alignSelf: 'stretch',
        padding: 8,
        alignItems: 'center'
    },
    row: { 
        flex: 1, 
        alignSelf: 'stretch', 
        flexDirection: 'row'
    }
})