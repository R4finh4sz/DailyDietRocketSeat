import theme from '@/src/theme';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #E5F0DB;
  border-radius: 8px;
  padding: 20px 16px;
  margin: 32px 24px 40px 24px;
  align-items: center;
  position: relative;
`;

export const ArrowIcon = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const Percentage = styled.Text`
  font-size: 32px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: #1B1D1E;
  margin-bottom: 2px;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: '#333638';
  text-align: center;
`;