import theme from '@/src/theme';
import styled from 'styled-components/native';

interface ContainerProps {
  backgroundColor?: string;
  disabled?: boolean;
  width?: string;
}

interface ButtonTextProps {
  textColor?: string;
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 6px;
  min-height: 50px;
  background-color: ${({backgroundColor, disabled}) =>
    disabled ? '#CCCCCC' : backgroundColor || '#639339'};
  width: ${({width}) => width || 'auto'};
`;

export const Icon = styled.View`
  margin-right: 12px;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 14px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  text-align: center;
  color: ${({textColor, disabled}) =>
    disabled ? '#888888' : textColor || '#FAFAFA'};
`;
