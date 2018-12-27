import React from 'react';
import { Text } from 'react-native';
//library
import DatePicker from 'react-native-datepicker';
import { Icon } from 'react-native-elements';
//self-made component
import { Row } from '../Row';
//styles
import styles from './styles';

const DatePickerWithLabel = ({startDate,endDate,handleChangeSDate,handleChangeEDate}) => {
    return(
            <Row>
                <Text style={styles.labelText}>Date</Text>
                <DatePicker
                    style={{width: 150}}
                    date={startDate}
                    format="DD MMM YYYY"
                    mode="date"
                    placeholder="Start date"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    iconComponent={
                        <Icon name='calendar' type='font-awesome' /> 
                    }
                    customStyles={{
                        dateInput: {
                            marginLeft: 0,
                            borderColor: 'transparent'
                        }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {handleChangeSDate(date)}}
                />
                <Text style={[styles.labelText,styles.leftPad]}>to</Text>
                <DatePicker
                    style={{width: 150}}
                    date={endDate}
                    mode="date"
                    placeholder="End date"
                    format="DD MMM YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    iconComponent={
                        <Icon name='calendar' type='font-awesome' /> 
                    }
                    customStyles={{
                        dateInput: {
                            marginLeft: 0,
                            borderColor: 'transparent'
                        }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {handleChangeEDate(date)}}
                />
            </Row>
    )
}

export default DatePickerWithLabel;