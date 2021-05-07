import styled from "styled-components";

export const Ticket = styled.View`
elevation: 0.5;
  background-color: #fcffe7;
  width: 340px;
  height: 326px;
  margin-top: 14px;
`;

export const Detachable = styled.View`
  background-color: #fcffe7;
  flex-direction: row;
  justify-content: space-between;
  width: 340px;
  height: 16px;
  overflow: hidden;
`;

export const Cuts = styled.View`
  margin: -8px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: white;
`;

export const Content = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentHeader = styled.View`
  margin: 0 26px 0 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.View`
  background-color: #010101;
  padding: 25px 60px;
`;

export const Vacancy = styled.View`
  flex-direction: row;
`;

export const VacancyTitle = styled.View`
  justify-content: center;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: 11px;
`;

export const VacancyNumber = styled.Text`
  font-size: 11px;
`;

export const QRCode = styled.View`
  width: 67px;
  height: 67px;
`;

export const ContentBody = styled.View`
  margin: 24px;
  height: 130px;
  justify-content: space-between;
`;

export const BodyTitle = styled.View`
  align-self: center;
  align-items: center;
`;

export const TitleP = styled.Text`
  font-size: 13px;
`;

export const LicensePlateH1 = styled.Text`
  font-size: 36px;
  font-weight: 700;
`;

export const EntryData = styled.View`
  margin-top: 18px;
  align-self: flex-end;
`;

export const Timestamps = styled.View`
  margin-bottom: 14px;
`;

export const PaymentData = styled.View``;

export const EntryText = styled.Text`
  font-size: 13px;
  text-align: right;
`;

export const ContentFooter = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const FooterTitle = styled.Text`
  font-size: 9px;
`;
export const FooterSubtitle = styled.Text`
  font-size: 6px;
`;
