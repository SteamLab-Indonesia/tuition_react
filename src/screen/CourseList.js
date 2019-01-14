import React from 'react';
import { ScrollView, View, FlatList } from 'react-native';
//self-made components
import { DefaultHeader } from '../components/Header'
import { ListItem } from '../components/ListItem'
import NavigationService from './NavigationService'

const courses = [{
    id: '1',
    name: 'CK',
    class: 'Robotics'
},{
    id: '2',
    name: 'WECODE',
    class: 'Coding'
},{
    id: '3',
    name: 'UArt',
    class: 'Art'
},]

export default class CourseList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            coursesArr : courses,
        }
    }

    _renderItem = ({item}) => (
        <ListItem
            name = {item.name}
            class = {item.class}
        />
    );
    
    toggleDrawer(){
        NavigationService.toggleDrawer()
    }

    render(){
        return(
            <ScrollView>
                <View>
                    <DefaultHeader pageTitle="COURSES" handleClick={this.toggleDrawer} />
                    <FlatList data={this.state.coursesArr} 
                        renderItem={this._renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </ScrollView>
        )
    }
}