import React from 'react';
import { View, Text } from 'react-native'; 
//styles
import styles from './styles';

export default class Table extends React.Component {
    renderRow(datum, ind) {
        if (datum.classCategory)
            return (
                <View key={ind} style={[styles.row,styles.bordered]}>
                    <View style={[styles.cell,styles.bordered]}>
                        <Text>{datum.classCategory}</Text>
                    </View>
                    <View style={[styles.cell,styles.bordered]}><Text>{datum.sessions}</Text></View>
                    <View style={[styles.cell,styles.bordered]}><Text>{datum.isAttend?'Attend':'Absent'}</Text></View>
                </View>
            );
        else {
            return(
                <View key={ind} style={[styles.row,styles.bordered]}>
                <View style={[styles.cell,styles.bordered]}>
                    <Text>{datum.date}</Text>
                </View>
                <View style={[styles.cell,styles.bordered]}><Text>{datum.startTime}</Text></View>
                <View style={[styles.cell,styles.bordered]}><Text>{datum.endTime}</Text></View>
            </View>
            )
        }
    }

    renderTableHeader(datum, ind){
        return (
                <View key={ind} style={[styles.cell,styles.bordered]}>
                    <Text style={styles.headerText}>{datum}</Text>
                </View>
        )
    }

    render() {
        return (
            <View style={[styles.table,styles.bordered]}>
                <View style={[styles.row,styles.bordered,styles.header]}>
                {
                    this.props.tableHeader.map((datum, ind) => { // This will render a row for each data element.
                        return this.renderTableHeader(datum, ind);
                    })
                }
                </View>
                {
                    this.props.tableData.map((datum, ind) => { // This will render a row for each data element.
                        return this.renderRow(datum, ind);
                    })
                }
            </View>
        );
    }
}

