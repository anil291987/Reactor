/* @flow */
import React, { Component } from "react";
import { View, Text } from "react-native";
import * as COLOR from "../../config/colors";
import PropTypes from "prop-types";

class TitleText extends Component {
  render() {
    return (
      <Text
        style={{
          color: COLOR.HEADER_TINT,
          fontSize: this.props.size,
          fontWeight: "bold"
        }}
      >
        REACTOR
      </Text>
    );
  } // render
} // TitleText

TitleText.propTypes = {
  size: PropTypes.number.isRequired
};

export default TitleText;
