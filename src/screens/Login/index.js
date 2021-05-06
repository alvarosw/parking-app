import React from "react";
import { Feather } from "@expo/vector-icons";

import Input from "../../components/Input";

import {
  Wrapper,
  Container,
  Header,
  Logo,
  Vector,
  Title,
  Form,
  Button,
  ButtonText,
  ForgotPass,
} from "./styles";

export default function Login() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Feather name="chevron-left" size={30} color="#000" />
          <Vector/>
          <Logo>LOGO</Logo>
        </Header>

        <Vector />
        <Form>
          <Title>Faça seu login</Title>
          <Input
            placeholder="Email"
            icon="mail"
            iconSize={16}
            iconColor="#142328"
          />
          <Input
            placeholder="Palavra-passe"
            icon="lock"
            iconSize={16}
            iconColor="#142328"
            isPasswordInput
            activeIconColor="#06C167"
          />
          <Button>
            <ButtonText>Iniciar Sessão</ButtonText>
          </Button>
          <ForgotPass>Esqueceu-se da palavra-passe?</ForgotPass>
        </Form>
      </Container>
    </Wrapper>
  );
}
