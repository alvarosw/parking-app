import React from "react";

import { Chevron, Container, Selector } from "./styles";
import { Feather } from '@expo/vector-icons';


export default function Select({ label }) {
  return (
    <Container>
      <Selector>
        <Selector.Item label={label} />
      </Selector>
      <Chevron>
        <Feather name="chevron-down" size={30} color="#BBB8B8" />
      </Chevron>
    </Container>
  );
}
