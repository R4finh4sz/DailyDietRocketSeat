import theme from '@/src/theme';
import styled from 'styled-components/native';

interface CardContainerProps {
  bgColor?: string;
}

export const CardContainer = styled.View<CardContainerProps>`
  width: 100%;
  background-color: ${({bgColor}) => bgColor || theme.COLORS.GRAY_6};
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 12px;
`;

export const CardNumber = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.COLORS.GRAY_1};
  margin-bottom: 8px;
`;

export const CardLabel = styled.Text`
  font-size: 14px;
  color: ${theme.COLORS.GRAY_2};
  text-align: center;
`;

export const HalfWidthCardContainer = styled(CardContainer)`
  width: 48.5%;
`;
