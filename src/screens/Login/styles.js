import styled from "styled-components/native";
import Constants from 'expo-constants';

export const Wrapper = styled.SafeAreaView`
  margin-top: ${Constants.statusBarHeight}px;
  background-color: white;
`;

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
  z-index: 1;
`;

export const Title = styled.Text`
  display: flex;
  margin-bottom: 8%;
  align-self: center;

  /* font-family: "Red Hat Display"; */
  font-size: 24px;
  line-height: 32px;
`;

export const Button = styled.TouchableOpacity`
  margin: 10% 0 8%;
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
