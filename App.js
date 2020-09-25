import { useFonts } from "expo-font";
import React from "react";
import { Provider } from "react-redux";
import AppStackNavigator from "./src/router/AppStackNavigator";
import Loading from "./src/screens/Loading";
import store from "./src/store";

const App = () => {
  const [loaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  });

  if (loaded) {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>
    );
  } else {
    return <Loading />;
  }
};

export default App;
