import React from 'react';
import {connect} from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst
} from 'react-native-router-flux';
import Login from './Login';
import Main from './Main';
import Signup from './Signup';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state,action) => {
    return defaultReducer(state,action);
  }
};

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  debugger;
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

var App = React.createClass({

  render(){
    return (
      <Router createReducer={reducerCreate}>
        <Scene key="modal" component={Modal}>
          <Scene key='root'>
            <Scene key='login' component={Login} initial={!this.props.user_id} hideNavBar={true}></Scene>
            <Scene key='main'  component={Main} initial={this.props.user_id} ></Scene>
            <Scene key="signup" component={Signup} title="Create your Account"></Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
});

var mapStateToProps = (state)=>{
    return {
        user_id: state.auth.user_id
    }
}

module.exports = connect(mapStateToProps)(App);
