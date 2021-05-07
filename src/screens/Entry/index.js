import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Select from "../../components/Select";
import Button from "../../components/Button";

import {
  ScrollableContainer,
  Header,
  Title,
  Form,
  PlacaInputContainer,
  PlacaInput,
  Input,
  Submits,
} from "./styles";

export default function Entry() {
  return (
    <ScrollableContainer>
      <Header>
        <Title>Nova entrada</Title>
        <Ionicons name="md-close" size={36} color="#142328"></Ionicons>
      </Header>
      <Form>
        <PlacaInputContainer>
          <PlacaInput>
            <Input placeholder="Placa"></Input>
          </PlacaInput>
          <Button label="Ir" color="#142328" width={63} height={44} />
        </PlacaInputContainer>
        <Select label="NORMAL" />
        <Select label="AUTOMOVEL" />
        <Select label="H1" />
        <Select label="Forma de Pagamento" />
        <Submits>
          <Button label="IMPRIMIR" color="#0190C0" width={330} height={44} />
        </Submits>
      </Form>
    </ScrollableContainer>
  );
}
