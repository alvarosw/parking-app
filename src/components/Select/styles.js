import styled from "styled-components/native";


export const Container = styled.View`
  padding: 0 15px;
  height: 50px;
  width: 350px;
  background: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 15px;

  flex-direction: row;
  align-self: center;
  align-items: center;
`;

export const Selector = styled.Picker`
  background-color: transparent;
  flex: 1;
  font-size: 14px;
`;
