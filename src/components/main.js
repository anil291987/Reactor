/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {MainStack, LoginStack} from '../config/router';

import {bindActionCreators} from 'redux';
import * as authActions from '../actions/authenticate';
import {connect} from 'react-redux';

class Main extends Component {

  render() {
    if (this.props.state.isAuth) {
      return (<MainStack/>);
    } else {
      return (<LoginStack/>);
    }

  }
}

export default connect(state => ({state: state.authenticate}), (dispatch) => ({
  actions: bindActionCreators(authActions, dispatch)
}))(Main);
