import theme from '@/src/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 56px 24px 24px 24px;
  background-color: #e5e5e5;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: #1b1d1e;
`;

export const Placeholder = styled.View`
  width: 32px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 40px 24px;
`;

export const InputGroup = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #1b1d1e;
  margin-bottom: 4px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HalfWidth = styled.View`
  width: 48%;
`;

export const RadioGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonContainer = styled.View`
  margin-top: 40px;
  margin-bottom: 40px;
`;
