import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Favourite from "../screens/Favourite";
import Search from "../screens/Search/Search";

const SearchTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Search") {
            iconName = "ios-beer";
          } else if (route.name === "Favourite") {
            iconName = "ios-bookmark";
          }
          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Search" component={Search}></Tab.Screen>
      <Tab.Screen name="Favourite" component={Favourite}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
