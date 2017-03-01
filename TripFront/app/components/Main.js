import React from 'react';
import {connect} from 'react-redux';
import {
    StyleSheet,
    Text,
    Views
} from 'react-native';

var Main = React.createClass({

  render(){
      return(
         <Text>Main</Text>
      )
  }
});

var mapStateToProps = (state)=>{
    return {
        user_id: state.auth.user_id
    }
}

module.exports = Main;