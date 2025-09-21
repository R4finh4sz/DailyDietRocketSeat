import styled from 'styled-components/native';

interface ContainerProps {
  isSelected: boolean;
  variant: 'yes' | 'no';
}

interface IndicatorProps {
  variant: 'yes' | 'no';
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  align-items: center;
  background-color: ${({isSelected, variant}) => {
    if (isSelected && variant === 'yes') return '#E5F0DB';
    if (isSelected && variant === 'no') return '#F4E6E7';
    return '#DDDEDF';
  }};
  border-width: ${({isSelected}) => (isSelected ? '1px' : '0px')};
  border-color: ${({isSelected, variant}) => {
    if (isSelected && variant === 'yes') return '#639339';
    if (isSelected && variant === 'no') return '#BF3B44';
    return 'transparent';
  }};
  padding: 16px;
  border-radius: 6px;
  width: 48%;
  justify-content: center;
`;

export const Indicator = styled.View<IndicatorProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${({variant}) =>
    variant === 'yes' ? '#639339' : '#BF3B44'};
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #1b1d1e;
`;
