/* @flow */

import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { bindActionCreators } from "redux";
import * as authActions from "../actions/authenticate";
import { connect } from "react-redux";

import * as COLOR from "../config/colors";

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
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
    return (
      <View
        style={{
          flex: 1,
          padding: 8,
          marginTop: 16,
          backgroundColor: COLOR.BACKGROUND
        }}
      >
        <Text style={{ textAlign: "center" }}>
          This is the Home component. You can add your main functions here.
        </Text>
      </View>
    );
  } // render
} // Home

export default Home;
