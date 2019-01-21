import React from 'react';
import { FlatList } from 'react-native';

import { Container } from '../components/Container'
import { HeaderWithBack } from '../components/Header'
import { DropdownWithLabel } from '../components/Dropdown'
import { ListItem } from '../components/ListItem'

const student= [{
    id: '1',
    name: 'Devi',
    attendDate: new Date("2018-12-03T07:00:00.000Z").toDateString(),
    classCategory: 'Math',
    sessions: 2
},{
    id: '2',
    name: 'Elwin',
    attendDate: new Date("2018-12-03T07:00:00.000Z").toDateString(),
    classCategory: 'Biology',
    sessions: 4
},{
    id: '3',
    name: 'Jimmy',
    attendDate: new Date("2018-12-03T07:00:00.000Z").toDateString(),
    classCategory: 'Biology',
    sessions: 2
},{
    id: '4',
    name: 'Raymond',
    attendDate: new Date("2018-12-05T07:00:00.000Z").toDateString(),
    classCategory: 'Math',
    sessions: 4
},{
    id: '5',
    name: 'Linda',
    attendDate: new Date("2018-12-05T07:00:00.000Z").toDateString(),
    classCategory: 'Math',
    sessions: 4
},{
    id: '6',
    name: 'Mark',
    attendDate: new Date("2018-12-05T07:00:00.000Z").toDateString(),
    classCategory: 'Biology',
    sessions: 2
}];

const classList = [{
    value: 'All Classes'
},{
    value: 'Biology'
},{
    value: 'Math'
}]

const sessionList = [{
    value: 2
},{
    value: 4
}]


export default class TeacherList extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            studentArr : student,
            class: ''
        }
    }
    
    _renderItem = ({item}) => (
        <ListItem
            name={item.name}
            class={item.classCategory}
            session={item.sessions}
        />
    );
    
    filterClass = (text) => {
        this.setState({class: text})
        if (text != 'All Classes'){
            let arr = student.filter((item) => item.classCategory == text )

            this.setState({studentArr : arr})
        } else
            this.setState({studentArr: student})
    }

    filterSession = (text) => {
        let arr = student.filter((item) => item.classCategory == this.state.class && item.sessions == text )
        this.setState({studentArr: arr})
    }

    render(){
        return(
            <Container>
                <HeaderWithBack pageTitle='Student List' />
                <DropdownWithLabel labelText='Class Category' data={classList} passChangeText={text => this.filterClass(text)} />
                <DropdownWithLabel labelText='Session' data={sessionList} passChangeText={text => this.filterSession(text)}/>
                <FlatList data={this.state.studentArr} 
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                />
            </Container>
        )
    }
}