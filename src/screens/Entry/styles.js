import styled from "styled-components";

export const ScrollableContainer = styled.ScrollView``;

export const Header = styled.View`
  flex-direction: row;
  margin: 20px 30px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  /* font-family: Red Hat Display; */
  font-size: 36px;

  color: #000000;
`;

export const Form = styled.View`
  align-items: center;
`;

export const PlacaInputContainer = styled.View`
  margin-bottom: 27px;

  flex-direction: row;
  align-items: center;
`;

export const PlacaInput = styled.View`
  margin-right: 10px;
  padding: 0 15px;
  height: 50px;
  width: 275px;
  background: #f5f5f5;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 18px;
  margin: 0 21px 0 16px;
`;

export const Submits = styled.View`
  margin: 46px 0 46px;
  padding-bottom: 94px;
`;

export const TicketView = styled.View`
  margin: 19px 0 28px;
`;

export const ButtonsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;