import { StyleSheet } from 'react-native'
import { HEADER_HEIGHT, WINDOWS_SCREEN } from './data'
import { MAIN_COLOR } from './color'

export const globalStyles = StyleSheet.create({
    headerHeight:{
        height: HEADER_HEIGHT,
        width: WINDOWS_SCREEN.width,
        backgroundColor: MAIN_COLOR
    },
    headerLeftIcon:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerMenuTitle:{
        flexDirection: 'row',
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle:{
        color:'red',
        fontSize: 18,
        fontWeight:'900'
    },
    headerRightIcon:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerAvatarIcon:{
        height:HEADER_HEIGHT*0.6,
        width: HEADER_HEIGHT*0.6,
        borderRadius: HEADER_HEIGHT*0.6/2,
        marginRight:WINDOWS_SCREEN.width*0.03
    }
})
