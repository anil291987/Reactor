/* @flow */

import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { bindActionCreators } from "redux";
import * as authActions from "../actions/authenticate";
import { connect } from "react-redux";

import * as COLOR from "../config/colors";

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Profile",
    headerTintColor: COLOR.HEADER_TINT,
    headerStyle: {
      backgroundColor: COLOR.HEADER
    },
    headerLeft: (
      <TouchableOpacity
        style={{
          marginLeft: 16
        }}
        onPress={() => navigation.navigate("DrawerOpen")}
      >
        <Icon name="menu" size={32} color={COLOR.ICON} />
      </TouchableOpacity>
    )
  }); // navigationOptions

  render() {
    const { authSession } = this.props.state;
    return (
      <View
        style={{
          flex: 1,
          padding: 8,
          backgroundColor: COLOR.BACKGROUND
        }}
      >
        <View
          style={{
            padding: 16,
            backgroundColor: COLOR.CARD,
            marginBottom: 8
          }}
        >
          <Text
            style={{ color: COLOR.TINT, fontSize: 12, fontWeight: "bold" }}
          >{`USERNAME`}</Text>
          <Text style={{ fontSize: 14 }}>{`${authSession.username}`}</Text>
        </View>

        <View
          style={{
            padding: 16,
            backgroundColor: COLOR.CARD,
            marginBottom: 8
          }}
        >
          <Text
            style={{ color: COLOR.TINT, fontSize: 12, fontWeight: "bold" }}
          >{`EMAIL`}</Text>
          <Text style={{ fontSize: 14 }}>{`${authSession.email}`}</Text>
        </View>
      </View>
    );
  } // render
} // Profile

export default connect(
  state => ({ state: state.authenticate }),
  dispatch => ({
    actions: bindActionCreators(authActions, dispatch)
  })
)(Profile);
