import React from 'react'
import { Header, Left, Icon, Button } from 'native-base'
import { Text, Image } from 'react-native'
import { globalStyles } from './style'
import { MENU_ICON_NAME } from './data'

export function CustomHeader({ _onPress, title, isGoingBack, _onBackPress, imageURL }){    
        
    return(
        <Header style={globalStyles.headerHeight}>
            <Left style={globalStyles.headerLeftIcon}>
                { isGoingBack ? <Icon name='arrow-back' onPress={_onBackPress} size={30}/> : null }
            </Left>
            <Left style={globalStyles.headerMenuTitle}>
                { imageURL ? <Image style={globalStyles.headerAvatarIcon} source={imageURL}/> : null }
                <Text style={globalStyles.headerTitle}>{title}</Text>
            </Left>
            <Left style={globalStyles.headerRightIcon}>
                <Icon onPress={_onPress} name={MENU_ICON_NAME}/>
            </Left>
        </Header>
    )
}