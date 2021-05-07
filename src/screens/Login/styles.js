import styled from "styled-components/native";

export const Container = styled.View`
  background: #010101;
  justify-content: space-between;
`;

export const Header = styled.View`
  padding: 16px 8px;
  background: white;
  z-index: 1;
`;

export const Logo = styled.Text`
  margin: 10%;
  align-self: center;
  padding: 35px 85px;

  background-color: #010101;
  font-size: 12px;
  color: white;
  z-index: 1;
  /* font-family: "Roboto"; */
`;

export const Vector = styled.View`
  background: white;
  height: 585px;
  width: 585px;

  bottom: 32%;
  left: -21%;
  position: absolute;
  transform: rotate(-12.34deg);
  border-radius: 260px;
`;

export const Form = styled.View`
  padding-bottom: 100%;
  align-items: center;
  z-index: 1;
`;

export const Title = styled.Text`
  display: flex;
  margin-bottom: 8%;

  /* font-family: "Red Hat Display"; */
  font-size: 24px;
  line-height: 32px;
`;

export const ForgotPass = styled.Text`
  margin-top: 8%;
  /* font-family: "Red Hat Display"; */
  color: #06c167;
  font-weight: 700;
`;
