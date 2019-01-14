import { createDrawerNavigator, StackNavigator } from 'react-navigation';
import React from 'react';
import StudentAttendance from './StudentAttendance';
import TeacherAttendance from './TeacherAttendance';
import TeacherList from './TeacherList';
import StudentList from './StudentList';
import ParentView from './ParentView';
import DashboardScreen from './DashboardScreen';
import CourseList from './CourseList';
import SideMenu from './SideMenu';
import NavigationService from './NavigationService';


const Drawer = createDrawerNavigator({
    Dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
            header: null
        }
    },
    "Student Attendance": {
        screen: StudentAttendance,
        navigationOptions: {
            header: null
        }
    },
    "Teacher Attendance": {
        screen: TeacherAttendance,
        navigationOptions: {
            header: null
        }
    },
    "Teacher List": {
        screen: TeacherList,
        navigationOptions: {
            header: null
        }
    },
    "Student List": {
        screen: StudentList,
        navigationOptions: {
            header: null
        }
    },
    "Parent View": {
        screen: ParentView,
        navigationOptions: {
            header: null
        }
    },
    "Course List": {
        screen: CourseList,
        navigationOptions: {
            header: null
        }
    }
},{
    contentComponent: SideMenu,
    initialRouteName: 'Dashboard',
    contentOptions: {
        activeTintColor: 'red'
    }
})

class DrawerNavigation extends React.Component{
    render(){
        return(
            <Drawer ref={navigatorRef => {
                NavigationService.setTopLevelDrawer(navigatorRef);
              }}
            />
        )
    }
}

export default DrawerNavigation;