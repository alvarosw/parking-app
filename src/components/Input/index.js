import React from "react";

import { Feather } from "@expo/vector-icons";

import { Container, TextInput } from "./styles";

export default function Input({ icon, placeholder, secure }) {
  return (
    <Container>
      <Feather name={icon} size={16} color="black" />
      <TextInput placeholder={placeholder} secureTextEntry={secure} />
    </Container>
  );
}
