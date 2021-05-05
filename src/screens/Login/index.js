import React from "react";
import { Feather } from "@expo/vector-icons";

import Input from "../../components/Input";

import { Wrapper, Container, Header, Logo, Body, Title, Form } from "./styles";

export default function Login() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Feather name="chevron-left" size={30} color="#000" />
          <Logo>LOGO</Logo>
        </Header>

        <Body>
          <Form>
            <Title>Faça seu login</Title>
            <Input placeholder="Email" icon="mail" />
            <Input placeholder="Palavra-passe" icon="lock" secure="false" />
          </Form>
        </Body>
      </Container>
    </Wrapper>
  );
}
