import React from 'react';
import { FlatList } from 'react-native';
//self-made components
import { Container } from '../components/Container'
import { HeaderWithBack } from '../components/Header'
import { Row } from '../components/Row'
import { ListItem } from '../components/ListItem'
import { DropdownWithLabel } from '../components/Dropdown'
import { ButtonRoundCorner } from '../components/Button'

const student= [{
    id: '1',
    name: 'Devi',
    attendDate: new Date("2018-12-03T07:00:00.000Z").toDateString(),
    classCategory: 'Biology',
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

const dateList = [{
    value: new Date("2018-12-03T07:00:00.000Z").toDateString()
},{
    value: new Date("2018-12-05T07:00:00.000Z").toDateString()
}]

const classList = [{
    value: 'Biology'
},{
    value: 'Math'
}]

const sessionList = [{
    value: 2
},{
    value: 4
}]

export default class StudentAttendance extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            studentArr : student,
            dateSearch : '',
            classSearch: '',
            sessionSearch: ''
        }
    }

    _renderItem = ({item}) => (
        <ListItem
            name={item.name}
            class={item.classCategory}
            session={item.sessions}
        />
    )

    searchAttendance = () => {
        let filter = {
            attendDate: this.state.dateSearch,
            classCategory : this.state.classSearch,
            sessions : this.state.sessionSearch
        }
        let arr = student.filter((item) => {
            for (var key in filter) {
                if (item[key] === undefined || item[key] != filter[key])
                  return false;
                }
                return true;
        })
        console.log("arr")
        console.log(arr)
        this.setState({studentArr : arr})
    }

    render(){
        return(
            <Container>
                <HeaderWithBack pageTitle='Attendance List' />
                <DropdownWithLabel labelText='Date' data={dateList} passChangeText={text => this.setState({dateSearch:text})}/>
                <DropdownWithLabel labelText='Class Category' data={classList} passChangeText={text => this.setState({classSearch:text})}/>
                <DropdownWithLabel labelText='Session' data={sessionList} passChangeText={text => this.setState({sessionSearch:text})}/>
                <Row>
                    <ButtonRoundCorner buttonText='Search' onPressButton={event => this.searchAttendance(event)}/>
                </Row>
                <FlatList data={this.state.studentArr} 
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{paddingHorizontal: 15}}
                />
            </Container>
        )
    }
}