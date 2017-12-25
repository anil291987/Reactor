/* @flow */
import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as COLOR from "../../config/colors";
import PropTypes from "prop-types";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  } // constructor

  render() {
    return (
      <View
        style={{
          padding: 16,
          margin: 16,
          backgroundColor: COLOR.CARD
        }}
      >
        <View
          style={{
            backgroundColor: COLOR.INPUT_TEXT_BACKGROUND,
            marginBottom: 8,
            flexDirection: "row"
          }}
        >
          <View
            style={{
              width: 32,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon name="email" size={21} color={COLOR.PRIMARY_TEXT} />
          </View>

          <TextInput
            ref="emailInput"
            underlineColorAndroid={COLOR.TRANSPARENT}
            style={{
              padding: 8,
              height: 40,
              flex: 1
            }}
            onFocus={() => this.props.setHideLogo(true)}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => this.refs.passwordInput.focus()}
          />
        </View>

        <View
          style={{
            backgroundColor: COLOR.INPUT_TEXT_BACKGROUND,
            marginBottom: 8,
            flexDirection: "row"
          }}
        >
          <View
            style={{
              width: 32,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon name="lock" size={21} color={COLOR.PRIMARY_TEXT} />
          </View>

          <TextInput
            ref="passwordInput"
            underlineColorAndroid={COLOR.TRANSPARENT}
            style={{
              padding: 8,
              height: 40,
              flex: 1
            }}
            onFocus={() => this.props.setHideLogo(true)}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            returnKeyType="done"
            onSubmitEditing={() => {
              this.props.setHideLogo(false);
            }}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            this.props.login(this.state.email, this.state.password)
          }
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
              LOGIN
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginVertical: 16 }}
          onPress={() => this.props.navigate("ForgotPassword")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: COLOR.TINT
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <View style={{ alignItems: "center", height: 36 }}>
          <Text style={{ color: COLOR.ERROR_TEXT }}>{this.props.error}</Text>
        </View>
      </View>
    );
  } // render
} // LoginView

LoginView.propTypes = {
  setHideLogo: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
};

export default LoginView;
