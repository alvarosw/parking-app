import React from "react";
import Constants from "expo-constants";

import Login from "./screens/Login";
import Entry from "./screens/Entry";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{ marginTop: Constants.statusBarHeight, backgroundColor: "white" }}
    >
      <Entry></Entry>
    </SafeAreaView>
  );
}
