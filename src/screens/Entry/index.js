import React from "react";

import { SafeAreaView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

import Constants from "expo-constants";

import Select from "../../components/Select";
import Button from "../../components/Button";
import Ticket from "../../components/Ticket";

import {
  ScrollableContainer,
  Content,
  Header,
  Title,
  Form,
  PlacaInputContainer,
  PlacaInput,
  Input,
  Submits,
  TicketView,
  ButtonsView,
} from "./styles";

export default function Entry({ navigation }) {
  return (
    <SafeAreaView
      style={{
        marginTop: Constants.statusBarHeight,
        backgroundColor: "white",
      }}
    >
      <ScrollableContainer>
        <Content>
          <Header>
            <Title>Nova entrada</Title>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Ionicons name="md-close" size={36} color="#142328"></Ionicons>
            </TouchableWithoutFeedback>
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
            <Select label="DINHEIRO" />
            <Submits>
              <Button
                label="IMPRIMIR"
                color="#0190C0"
                width={330}
                height={44}
              />
              <TicketView>
                <Ticket></Ticket>
              </TicketView>
              <ButtonsView>
                <Button
                  label="CONCUIR ENTRADA"
                  color="#142328"
                  width={237}
                  height={44}
                />
                <Button
                  label="CANCELAR"
                  color="#F60000"
                  width={95}
                  height={44}
                />
              </ButtonsView>
            </Submits>
          </Form>
        </Content>
      </ScrollableContainer>
    </SafeAreaView>
  );
}
