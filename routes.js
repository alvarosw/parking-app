import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// import Home from './pages/Home';

import Login from "./src/screens/Login";
import Entry from "./src/screens/Entry";
import { NavigationContainer } from "@react-navigation/native";

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Entry" component={Entry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
