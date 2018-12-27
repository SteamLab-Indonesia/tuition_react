import React from 'react';
//self-made components
import { Container } from '../components/Container'
import { HeaderWithBack } from '../components/Header'
import { Row } from '../components/Row'
import { DatePickerWithLabel } from '../components/DatePicker'
import { TextInputWithLabel } from '../components/TextInput'
import { ButtonRoundCorner } from '../components/Button'
import { Table } from '../components/Table'

const studentData = [{
    name: 'Ani',
    attendDate: new Date("2018-12-03T07:00:00.000Z"),
    classCategory: 'Biology',
    sessions: 2,
    isAttend: true
},{
    name: 'Ani',
    attendDate: new Date("2018-12-10T07:00:00.000Z"),
    classCategory: 'Math',
    sessions: 4,
    isAttend: false
},{
    name: 'Budi',
    attendDate: new Date("2018-12-06T07:00:00.000Z"),
    classCategory: 'English',
    sessions: 4,
    isAttend: false
},{
    name: 'Budi',
    attendDate: new Date("2018-12-08T07:00:00.000Z"),
    classCategory: 'Biology',
    sessions: 4,
    isAttend: true
}]

const tableHeader = ['Class Category','Sessions','Attendance']

export default class TeacherAttendance extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            search: '',
            studentArr: studentData,
            show: []
        }
    }

    handleSearch(){
        const searchName = this.state.search;
        let attendances = this.state.studentArr.filter((student) => {
            return student.name == searchName && (student.attendDate >= this.state.startDate && this.state.endDate >= student.attendDate)
        })
        console.log(attendances)
        this.setState({
            show: attendances
        })
    }

    render(){
        return(
            <Container>
                <HeaderWithBack pageTitle='Attendance List' />
                <DatePickerWithLabel handleChangeSDate={sDate => this.setState({startDate:new Date(sDate)})} handleChangeEDate={eDate => this.setState({endDate:new Date(eDate)})} startDate={this.state.startDate} endDate={this.state.endDate}/>
                <TextInputWithLabel inputLabel='Student Name' inputPlaceholder='Enter Student Name' passText={text => this.setState({search: text})}/>
                <Row>
                    <ButtonRoundCorner buttonText='Search' onPressButton={event => this.handleSearch(event)}/>
                </Row>
                <Row>
                    <Table tableHeader={tableHeader} tableData={this.state.show} />
                </Row>
            </Container>
        )
    }
}