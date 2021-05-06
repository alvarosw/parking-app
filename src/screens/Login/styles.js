import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background: white;
`;

export const Container = styled.View`
  background: #010101;
  background-color: black;
  color:black;
  
`;

export const Header = styled.View`
  padding: 35px 10px;
  background: white;
  z-index: 1;
`;

export const Logo = styled.Text`
  margin-top: 38px;
  align-self: center;
  padding: 40px 96px;

  background: #010101;
  font-size: 12px;
  color: white;
  /* font-family: "Roboto"; */
`;

export const Vector = styled.View`
  background: white;
  height: 585px;
  width: 585px;

  top: 16.98%;
  bottom: 3.53%;
  left: -25%;
  position: absolute;
  transform: rotate(-12.34deg);
  border-radius: 260px;

  justify-content: center;
`;

export const Form = styled.View`
  padding-bottom: 100%;
`;

export const Title = styled.Text`
  display: flex;
  margin: 19px 0 33px;
  text-align: center;

  /* font-family: "Red Hat Display"; */
  font-size: 24px;
  line-height: 32px;
`;

export const Button = styled.TouchableHighlight`
  margin: 32px 0 25px;
  align-self: center;
  justify-content: center;

  border-radius: 10px;
  background-color: #142328;
  width: 320px;
  height: 44px;
`;

export const ButtonText = styled.Text`
  align-self: center;

  font-weight: 700;
  font-size: 16px;
  color: white;
  /* font-family: "Red Hat Display"; */
`;

export const ForgotPass = styled.Text`
  align-self: center;

  color: #06c167;
  font-weight: 700;
`;
