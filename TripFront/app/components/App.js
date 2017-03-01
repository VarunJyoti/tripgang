import React from 'react';
import {connect} from 'react-redux';
import {
    StyleSheet,
    Text,
    Views
} from 'react-native';

import Login from './Login';
import Main from './Main';

var App = React.createClass({

  render(){
  debugger
  if(this.props.user_id){
     return (
        <Main/>
     );
  }else{
    return (
       <Login/>
     );
  }

  }
});

var mapStateToProps = (state)=>{
    return {
        user_id: state.auth.user_id
    }
}

module.exports = connect(mapStateToProps)(App);