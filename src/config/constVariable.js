import { Dimensions, StatusBar, Platform } from 'react-native'; 

export const HEADER_TITLE_ICON_SUCCESS = 'green'
export const HEADER_TITLE_ICON_FAIL = 'red'
export const HEADER_TITLE_ICON_SIZE = 20
export const HEADER_TITLE_ICON_NAME = 'controller-record'
export const HEADER_LEFT_ICON_NAME = 'menu'
export const WINDOWS_SCREEN = Dimensions.get('window');
export const STATUS_BAR_HEIGHT = ((Platform.OS == 'ios') ? 20 : StatusBar.currentHeight);
export const TAB_BAR_HEIGHT = WINDOWS_SCREEN.height*0.08;
export const DRAWER_NAVIGATION = 'this.props.screenProps.drawerNavbar';
export const HEADER_HEIGHT = WINDOWS_SCREEN.height*0.09;
export const DATA_HEIGHT_IN_TAB = WINDOWS_SCREEN.height - HEADER_HEIGHT - TAB_BAR_HEIGHT - STATUS_BAR_HEIGHT;

//FUNCTION
export function openDrawer(navigation){
  navigation.navigate('DrawerOpen');
}