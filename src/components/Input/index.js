import React from "react";

import { Feather } from "@expo/vector-icons";

import { Container, TextInput } from "./styles";

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
            left: "77%"
          }}
        />
      </Container>
    );
  } else {
    return (
      <Container>
        <Feather name={icon} size={iconSize} color={iconColor} />
        <TextInput placeholder={placeholder} />
      </Container>
    );
  }
}
