import React from "react";

import { Feather } from "@expo/vector-icons";

import { Container, TextInput } from "./styles";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function Input({
  icon,
  iconSize,
  iconColor,
  activeIconColor,
  placeholder,
  isPasswordInput,
}) {
  let keyboardVerticalOffset;

  if(Platform.OS) 
    keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  if (isPasswordInput) {
    return (
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
        <Container>
          <Feather name={icon} size={iconSize} color={iconColor} />
          <TextInput placeholder={placeholder} secureTextEntry />
          <Feather
            name="eye-off"
            size={iconSize}
            color={iconColor}
            style={{ left: "40%" }}
          />
          <Feather
            name="eye"
            size={iconSize}
            color={activeIconColor}
            style={{
              left: "77%",
            }}
          />
        </Container>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
        <Container>
          <Feather name={icon} size={iconSize} color={iconColor} />
          <TextInput placeholder={placeholder} />
        </Container>
      </KeyboardAvoidingView>
    );
  }
}
