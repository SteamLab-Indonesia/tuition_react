import React from 'react';
import { FlatList } from 'react-native';
//self-made components
import { Container } from '../components/Container'
import { Title } from '../components/Title'
import { NotificationItem } from '../components/ListItem'

const notif = [{
    id: '1',
    category: 'Attendance',
    message: 'Student attend 14 Dec 2018 class at 2.00 PM'
},{
    id: '2',
    category: 'Attendance',
    message: 'Student attend 07 Dec 2018 class at 2.20 PM'
},{
    id: '3',
    category: 'Information',
    message: 'Christmas Holiday is at 24th and 25th December'
}]

export default class NotificationList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notifArr : notif
        }
    }
    
    _renderItem = ({item}) => (
        <NotificationItem
            category={item.category}
            message={item.message}
        />
    );

    render(){
        return(
            <Container>
                <Title title='Notifications' />
                <FlatList data={this.state.notifArr} 
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                />
            </Container>
        )
    }
}