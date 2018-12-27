import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
//import screens
import NotificationList from './NotificationList'
import HistoryAttendance from './HistoryAttendance'

const TabNavigator = createBottomTabNavigator({
  Notifications: NotificationList,
  History: HistoryAttendance,
},{
    tabBarOptions: {
        showIcon: false,
        labelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 12
        },
        activeTintColor: '#0a4096'
    }
});

export default TabNavigator;