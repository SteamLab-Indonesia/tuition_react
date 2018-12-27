import React, { Component } from 'react';
import { Container, Item, Input, Text, H1, H2, H3, Button, Grid, Col, Content, Spinner } from 'native-base';
import {  Image, TextInput, KeyboardAvoidingView, TouchableOpacity, View, Alert } from 'react-native';
import styles from './style';
import { forgotPassword } from '../../action';

export default class ForgotPassword extends Component {

  state = {
    email: '',
    error: '',
    loading: false
  };

  constructor(props) {
    super(props);
  }

  async onButtonPress() {
    const { email } = this.state;
    if (email != '')
    {
      this.setState({ error: '', loading: true });
      const response = await forgotPassword(email);
      console.log(response);
      this.setState({loading: false});

      if (!response)
      {
          Alert.alert(
              'Forgot Password',
              'Unknown Error, Please Contact Administrator',
              [
                  {text: 'OK', onPress: ()=> null}
              ],
              {cancelable: false}
          )
      }
      else if (response.Error)
      {
        if (response.ErrorCode == 401)
        {
          Alert.alert(
            'Forgot Password',
            'Please Logout previous account',
            [
                {text: 'OK', onPress: ()=> null}
            ],
            {cancelable: false}
          )
        }        
        else if (response.ErrorDesc)
        {
            Alert.alert(
                'Forgot Password',
                response.ErrorDesc,
                [
                    {text: 'OK', onPress: ()=> null}
                ],
                {cancelable: false}
            )                          
        }
        else
        {
            Alert.alert(
                'Forgot Password',
                'Please Contact Administrator',
                [
                    {text: 'OK', onPress: ()=> null}
                ],
                {cancelable: false}
            )
        }
      }                
      else if (response.Data)
      {
        this.props.navigation.goBack();
      }
      else
      {
          Alert.alert(
              'Error',
              'Please check your internet connection and try again',
              [
                  {text: 'OK', onPress: ()=> null}
              ],
              {cancelable: false}
          )                        
      }    
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner color="red" size="small" />;
    }

    return (
      <Button block style={styles.buttonContainer} onPress={this.onButtonPress.bind(this)}>
        <Text>Send Recovery Email</Text>
      </Button>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.loginContainer} behavior="padding">
        <Image resizeMode="contain" style={styles.logo} source={require('../../images/logo.png')} />
        <H2 style={{marginTop: 20, marginBottom: 20}}>
            Forgot Password ?
        </H2>
        <Text style={styles.hintsText}>
            Please Fill in the email you have used for
        </Text>
        <Text style={styles.hintsText}>
            Registration. An email will be sent shortly
        </Text>
        <Item regular style={{marginTop: 40}}>
            <Input autoCapitalize='none' 
                placeholder='Email' 
                style={styles.textInput} 
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                />
        </Item>
        <Text style={{margin: 5}}></Text>
        {this.renderButton()}
      </KeyboardAvoidingView>
    );
  }
}
