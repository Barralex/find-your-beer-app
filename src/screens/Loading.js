import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Loading Application . . . </Text>
      </View>
    );
  }
}
