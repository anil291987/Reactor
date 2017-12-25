/* @flow */
import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as COLOR from "../../config/colors";

class RegisterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ""
    };
  } // constructor

  render() {
    return (
      <View
        style={{
          padding: 16,
          margin: 16
          // backgroundColor: COLOR.CARD
        }}
      >
        <View
          style={{
            // padding: 16,
            marginBottom: 4
          }}
        >
          <Text
            style={{
              color: COLOR.PRIMARY_TEXT_LIGHT,
              fontSize: 12,
              fontWeight: "bold"
            }}
          >
            {`TextInput`}
          </Text>
          <TextInput
            style={{ height: 36, color: COLOR.PRIMARY_TEXT_LIGHT }}
            underlineColorAndroid={COLOR.PRIMARY_TEXT_LIGHT}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={COLOR.PLACEHOLDER_TEXT_LIGHT}
            onChangeText={textInput => this.setState({ textInput })}
            value={this.state.textInput}
            placeholder="TextInput"
          />
        </View>

        <View
          style={{
            // padding: 16,
            marginBottom: 4
          }}
        >
          <Text
            style={{
              color: COLOR.PRIMARY_TEXT_LIGHT,
              fontSize: 12,
              fontWeight: "bold"
            }}
          >
            {`TextInput`}
          </Text>
          <TextInput
            style={{ height: 36, color: COLOR.PRIMARY_TEXT_LIGHT }}
            underlineColorAndroid={COLOR.PRIMARY_TEXT_LIGHT}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={COLOR.PLACEHOLDER_TEXT_LIGHT}
            onChangeText={textInput => this.setState({ textInput })}
            value={this.state.textInput}
            placeholder="TextInput"
          />
        </View>

        <View
          style={{
            // padding: 16,
            marginBottom: 4
          }}
        >
          <Text
            style={{
              color: COLOR.PRIMARY_TEXT_LIGHT,
              fontSize: 12,
              fontWeight: "bold"
            }}
          >
            {`TextInput`}
          </Text>
          <TextInput
            style={{ height: 36, color: COLOR.PRIMARY_TEXT_LIGHT }}
            underlineColorAndroid={COLOR.PRIMARY_TEXT_LIGHT}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={COLOR.PLACEHOLDER_TEXT_LIGHT}
            onChangeText={textInput => this.setState({ textInput })}
            value={this.state.textInput}
            placeholder="TextInput"
          />
        </View>

        <View
          style={{
            // padding: 16,
            marginBottom: 4
          }}
        >
          <Text
            style={{
              color: COLOR.PRIMARY_TEXT_LIGHT,
              fontSize: 12,
              fontWeight: "bold"
            }}
          >
            {`TextInput`}
          </Text>
          <TextInput
            style={{ height: 36, color: COLOR.PRIMARY_TEXT_LIGHT }}
            underlineColorAndroid={COLOR.PRIMARY_TEXT_LIGHT}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={COLOR.PLACEHOLDER_TEXT_LIGHT}
            onChangeText={textInput => this.setState({ textInput })}
            value={this.state.textInput}
            placeholder="TextInput"
          />
        </View>

        <View
          style={{
            // padding: 16,
            marginBottom: 4
          }}
        >
          <Text
            style={{
              color: COLOR.PRIMARY_TEXT_LIGHT,
              fontSize: 12,
              fontWeight: "bold"
            }}
          >
            {`TextInput`}
          </Text>
          <TextInput
            style={{ height: 36, color: COLOR.PRIMARY_TEXT_LIGHT }}
            underlineColorAndroid={COLOR.PRIMARY_TEXT_LIGHT}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={COLOR.PLACEHOLDER_TEXT_LIGHT}
            onChangeText={textInput => this.setState({ textInput })}
            value={this.state.textInput}
            placeholder="TextInput"
          />
        </View>

        <TouchableOpacity activeOpacity={0.5}>
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
              REGISTER
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  } // render
} // RegisterView

export default RegisterView;
