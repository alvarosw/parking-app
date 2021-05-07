import React from "react";

import { Feather } from '@expo/vector-icons'; 

import { Container, Selector } from "./styles";

export default function Select({label}) {
  return (
    <Container>
      <Selector>
        <Selector.Item label={label} />
      </Selector>
      <Feather name="chevron-down" size={30} color="#BBB8B8" />
    </Container>
  );
}
