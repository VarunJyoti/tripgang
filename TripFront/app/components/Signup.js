import React from 'react';
import {reduxForm} from 'redux-form';

import {
    StyleSheet,
    TextInput,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

import {signupUser} from '../actions';
import {Actions} from "react-native-router-flux";

var Signup = React.createClass({
  onSignUp: function(){
  debugger
      var {email, password, phone} = this.state;
      var {dispatch} = this.props;
      dispatch(signupUser(email, password, phone));
    },

  render(){

     return (
       <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleContainer}>
                    Trip Gang
                </Text>
                <View style={styles.field}>
                  <TextInput onChangeText={email => this.setState({email})} name="email" placeholder="Email" style={styles.textInput}></TextInput>
                </View>

                <View style={styles.field}>
                  <TextInput onChangeText={password => this.setState({password})} name="password" placeholder="Password" style={styles.textInput}></TextInput>
                </View>

                <View style={styles.field}>
                  <TextInput onChangeText={phone => this.setState({phone})} name="phone" placeholder="Phone" style={styles.textInput}></TextInput>
                </View>

                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={Actions.login}>
                  <Text style={styles.button}>Back</Text>
                </TouchableOpacity>
                  <TouchableOpacity onPress={this.onSignUp}>
                    <Text style={styles.button}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
            </View>
       </View>
     )
  }
});
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: '#aaa'
   },
   titleContainer: {
      padding: 40
   },
   title: {
    color: 'white',
    fontSize: 20
  },
  field:{
     borderRadius: 5,
     padding: 5,
     paddingLeft: 8,
     margin: 7,
     marginTop: 0,
     backgroundColor: 'white'
  },
  textInput: {
    height: 50
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    fontSize: 30,
    color: 'white'
  },
  formError:{
     color: 'red'
  }
})
var validate = (formProps) => {
  var errors = {};
  if(!formProps.email){
    errors.email = "Email is missing";
  }
  if(!formProps.email){
    errors.password = "Password is missing"
  }
  if(!formProps.phone){
    errors.phone = "Phone is missing"
  }
  return errors;
}

module.exports = reduxForm({
    form: 'Signup',
    fields: ['email', 'password','phone'],
    validate: validate
}, null, null)(Signup);
