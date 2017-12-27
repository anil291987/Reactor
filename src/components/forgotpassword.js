/* @flow */

import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import * as COLOR from "../config/colors";

class ForgotPassword extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Forgot Password",
      headerTintColor: COLOR.HEADER_TINT,
      headerStyle: {
        backgroundColor: COLOR.HEADER
      }
    };
  }; // navigationOptions

  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 8,
          marginTop: 16,
          backgroundColor: COLOR.BACKGROUND
        }}
      >
        <View
          style={{
            paddingVertical: 16
          }}
        >
          <Text style={{ textAlign: "center" }}>
            This is the ForgotPassword component. Place account recovery
            instructions here.
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.props.navigation.goBack()}
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
              NEXT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  } // render
} // ForgotPassword

export default ForgotPassword;
