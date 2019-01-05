import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    round: {
        borderRadius: '50rem',
        width: '50rem',
        height: '50rem',
        justifyContent: 'center',
        marginRight: '10rem'
    },
    lightblue: {
        backgroundColor: '$iconBackground'
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        padding: '10rem',
        borderBottomWidth: '1rem',
        borderBottomColor: '$lineColor',
    },
    listDetail: {
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    notifItem: {
        flex: 1,
        padding: '10rem',
        borderBottomWidth: '1rem',
        borderBottomColor: '$lineColor',
        marginHorizontal: '8rem',
        flexDirection: 'row',
        alignItems: 'center'
    },
    notifCategory: {
        fontSize: '16rem',
        fontWeight: 'bold',
        color: '#045757'
    },
    iconNotif: {
        marginRight: '5rem'
    }
})