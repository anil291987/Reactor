/* @flow */

import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { bindActionCreators } from "redux";
import * as authActions from "../actions/authenticate";
import { connect } from "react-redux";

import * as COLOR from "../config/colors";

class Settings extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Settings",
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
  });

  render() {
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
            paddingVertical: 16
          }}
        >
          <Text>
            This is the Settings component. Click the Logout button to return to
            the Login screen.
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.props.actions.logout()}
        >
          <View
            style={{
              height: 48,
              backgroundColor: COLOR.TINT,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: COLOR.BUTTON_TEXT,
                fontWeight: "bold"
              }}
            >
              LOGOUT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  state => ({ state: state.authenticate }),
  dispatch => ({
    actions: bindActionCreators(authActions, dispatch)
  })
)(Settings);
