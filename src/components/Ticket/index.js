import React from "react";
import { Image, Text, View } from "react-native";

import {
  Ticket,
  Detachable,
  Cuts,
  Content,
  ContentHeader,
  Logo,
  Vacancy,
  VacancyTitle,
  Title,
  VacancyNumber,
  QRCode,
  ContentBody,
  BodyTitle,
  TitleP,
  LicensePlateH1,
  EntryData,
  Timestamps,
  PaymentData,
  EntryText,
  ContentFooter,
  FooterTitle,
  FooterSubtitle,
} from "./styles";

export default function TicketComp() {
  return (
    <View style={{ marginTop: 14 }}>
      <Detachable>
        <Cuts />
        <Cuts />
        <Cuts />
        <Cuts />
        <Cuts />
        <Cuts />
        <Cuts />
        <Cuts />
        <Cuts />
        <Cuts />
        <Cuts />
        <Cuts />
        <Cuts />
        <Cuts />
        <Cuts />
      </Detachable>
      <Ticket>
        <Content>
          <ContentHeader>
            <Logo>
              <Text style={{ color: "white" }}>LOGO</Text>
            </Logo>
            <Vacancy>
              <VacancyTitle>
                <Title>VAGA:</Title>
                <VacancyNumber>00041</VacancyNumber>
              </VacancyTitle>
              <QRCode>
                <Image source={require("../../../assets/qr-code.png")} />
              </QRCode>
            </Vacancy>
          </ContentHeader>
          <ContentBody>
            <BodyTitle>
              <TitleP>PLACA</TitleP>
              <LicensePlateH1>JZS-4512</LicensePlateH1>
            </BodyTitle>
            <EntryData>
              <Timestamps>
                <EntryText>ENTRADA: 12::00:54</EntryText>
                <EntryText>SAÍDA: 13::00:54</EntryText>
              </Timestamps>
              <PaymentData>
                <EntryText>TOTAL: R$15,00</EntryText>
                <EntryText>PAGAMENTO: DINHEIRO</EntryText>
              </PaymentData>
            </EntryData>
          </ContentBody>
          <ContentFooter>
            <FooterTitle>
              JF PARK ESTACIONAMENTOS CNPJ 546.554.44/00001-44
            </FooterTitle>
            <FooterSubtitle>
              SISTEMAS DESENVOLVIDO POR WITSDIGITAL
            </FooterSubtitle>
          </ContentFooter>
        </Content>
      </Ticket>
    </View>
  );
}
