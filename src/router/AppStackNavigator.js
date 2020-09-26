import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BreweryDetails from "./../screens/BreweryDetails";
import Home from "./../screens/Home";
import SearchTabNavigator from "./SearchTabNavigator";

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchTabNavigator"
          component={SearchTabNavigator}
          options={{ title: null, headerShown: false }}
        />
        <Stack.Screen
          name="BreweryDetails"
          component={BreweryDetails}
          options={{ title: "Brewery Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackNavigator;
