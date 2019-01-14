import React, {Component} from 'react';
import {ScrollView, Text, View, SafeAreaView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Dashboard')}>
                    Dashboard
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Course List')}>
                    Course List
              </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1
      },
      navItemStyle: {
        padding: 10,
        fontSize: 16,
        color: '#045757',
        fontWeight: 'bold'
      }
})

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;