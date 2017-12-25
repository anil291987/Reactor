/* @flow */

import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as COLOR from "../config/colors";
import TitleText from "./common/title";

export default class DrawerContainer extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLOR.HEADER,
          paddingTop: 40,
          paddingHorizontal: 20
        }}
      >
        <View style={{ marginVertical: 16 }}>
          {/* Replace with app logo */}
          {/* <Image
            style={{ width: 107, height: 24 }}
            resizeMode="contain"
            source={require("../assets/img/logo.png")}
          /> */}
          <TitleText size={16} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("HomeItem")}>
          <Text style={{ fontSize: 16, color: COLOR.HEADER_TINT }}>HOME</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => null}>
          <Text style={{ fontSize: 16, color: COLOR.HEADER_TINT }}>
            PROFILE
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SettingsItem")}>
          <Text style={{ fontSize: 16, color: COLOR.HEADER_TINT }}>
            SETTINGS
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
