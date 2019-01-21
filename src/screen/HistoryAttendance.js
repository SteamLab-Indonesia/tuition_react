import React from 'react';
//self-made components
import { Container } from '../components/Container'
import { Title } from '../components/Title'
import { Row } from '../components/Row'
import { Table } from '../components/Table'

const tableHeader = ['Date','Start Time','End Time']

const attendanceDate = [{
    date: '07 Dec 2018',
    startTime: '10:00 AM',
    endTime: '1:00 PM'
},{
    date: '09 Dec 2018',
    startTime: '1:00 PM',
    endTime: '3:00 PM'
},{
    date: '14 Dec 2018',
    startTime: '10:00 AM',
    endTime: '1:00 PM',
},{
    date: '16 Dec 2018',
    startTime: '1:00 PM',
    endTime: '3:00 PM'
}]

export default class HistoryAttendance extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            attendanceArr: attendanceDate,
        }
    }

    render(){
        return(
            <Container>
                <Title title='Attendance History' />
                <Row>
                    <Table tableHeader={tableHeader} tableData={this.state.attendanceArr}/>
                </Row>
            </Container>
        )
    }
}