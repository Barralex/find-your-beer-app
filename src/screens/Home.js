import { Button, Text } from "native-base";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

const Home = ({ navigation }) => {
  const image = require("../assets/home-bg-image.jpg");

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <Image
          source={image}
          style={{ flex: 1, height: null, width: null }}
        ></Image>
      </View>

      <Button
        block={true}
        onPress={() => navigation.navigate("SearchTabNavigator")}
      >
        <Text style={{ color: "white" }}> Search for breweries</Text>
      </Button>
    </View>
  );
};

export default Home;
