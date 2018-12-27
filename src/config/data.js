import { Dimensions, StatusBar, Platform } from 'react-native';

export const MENU_ICON_NAME = 'menu';

export const WINDOWS_SCREEN = Dimensions.get('window');
export const HEADER_HEIGHT = WINDOWS_SCREEN.height*0.09;
export const DATA_CONTAINER_HEIGHT = WINDOWS_SCREEN.height - HEADER_HEIGHT - ((Platform.OS == 'ios') ? 20 : StatusBar.currentHeight);
export const STATUS_BAR_HEIGHT = (Platform.OS == 'ios') ? 20 : StatusBar.currentHeight;