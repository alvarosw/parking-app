import React from "react";

import Constants from "expo-constants";
import { View, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Input from "../../components/Input";
import Button from "../../components/Button";

import {
  Container,
  Header,
  Logo,
  Vector,
  Title,
  Form,
  ForgotPass,
} from "./styles";

export default function Login({ navigation }) {
  return (
    <SafeAreaView
      style={{
        marginTop: Constants.statusBarHeight,
        backgroundColor: "white",
      }}
    >
      <Container>
        <Header>
          <Feather name="chevron-left" size={30} color="#000" />
          <Logo>LOGO</Logo>
        </Header>

        <Vector />
        <Form>
          <Title>Faça seu login</Title>
          <View style={{ marginBottom: "7%" }}>
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
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("Entry");
            }}
          >
            <Button
              label="Iniciar Sessão"
              color="#142328"
              width={320}
              height={44}
            />
          </TouchableWithoutFeedback>
          <ForgotPass>Esqueceu-se da palavra-passe?</ForgotPass>
        </Form>
      </Container>
    </SafeAreaView>
  );
}
