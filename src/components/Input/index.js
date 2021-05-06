import React from "react";

import { Feather } from "@expo/vector-icons";

import { Container, InputContainer, TextInput } from "./styles";

export default function Input({
  icon,
  iconSize,
  iconColor,
  activeIconColor,
  placeholder,
  isPasswordInput,
}) {
  if (isPasswordInput) {
    return (
      <Container>
        <InputContainer>
          <Feather name={icon} size={iconSize} color={iconColor} />
          <TextInput placeholder={placeholder} secureTextEntry />
          <Feather name="eye-off" size={iconSize} color={iconColor} />
        </InputContainer>
        <Feather
          name="eye"
          size={iconSize}
          color={activeIconColor}
          style={{
            position: "absolute",
            right: 15,
            top: 14
          }}
        />
      </Container>
    );
  } else {
    return (
      <InputContainer>
        <Feather name={icon} size={iconSize} color={iconColor} />
        <TextInput placeholder={placeholder} />
      </InputContainer>
    );
  }
}
