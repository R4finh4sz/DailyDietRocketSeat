import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #1B1D1E;
  border-radius: 6px;
  padding: 16px 24px;
  margin: 0 24px 32px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.View`
  margin-right: 12px;
`;

export const ButtonText = styled.Text`
  color: #FAFAFA;
  font-size: 14px;
  font-weight: bold;
`;