import { useFonts } from "expo-font";
import React from "react";
import AppStackNavigator from "./src/router/AppStackNavigator";
import Loading from "./src/screens/Loading";

const App = () => {
  const [loaded, error] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  });

  if (loaded) {
    return <AppStackNavigator />;
  } else {
    return <Loading />;
  }
};

export default App;
