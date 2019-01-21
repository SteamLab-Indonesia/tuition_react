import React from 'react';
import { FlatList } from 'react-native';

import { Container } from '../components/Container'
import { HeaderWithBack } from '../components/Header'
import { DropdownWithLabel } from '../components/Dropdown'
import { ListItem } from '../components/ListItem'

const teacher= [{
    id: '1',
    name: 'Anita',
    grade: 'Junior',
},{
    id: '2',
    name: 'Basthian',
    grade: 'Senior',
},{
    id: '3',
    name: 'Felix',
    grade: 'Junior',
},{
    id: '4',
    name: 'Yuni',
    grade: 'Senior',
},{
    id: '5',
    name: 'Shinta',
    grade: 'Advanced'
}];

const grades = [{
    value: 'All Grades',
    },{
    value: 'Junior',
    }, {
    value: 'Senior',
    }, {
    value: 'Advanced',
}];

export default class TeacherList extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            teacherArr : teacher
        }
    }
    
    _renderItem = ({item}) => (
        <ListItem
            name={item.name}
            grade={item.grade}
        />
    );

    handleChangedText = (text) => {

        if (text != 'All Grades'){
            let arr = teacher.filter((item) => item.grade == text )

            this.setState({teacherArr : arr})
        } else
            this.setState({teacherArr: teacher})
    }

    render(){
        return(
            <Container>
                <HeaderWithBack pageTitle='Teacher List' />
                <DropdownWithLabel labelText='Sort By :' data={grades} passChangeText={text => this.handleChangedText(text)} />
                <FlatList data={this.state.teacherArr} 
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                />
            </Container>
        )
    }
}