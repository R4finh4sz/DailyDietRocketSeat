import React from 'react';
import {Container, Indicator, Text} from './styles';

interface RadioOptionProps {
  label: string;
  isSelected: boolean;
  variant: 'yes' | 'no';
  onPress: () => void;
}

export function RadioOption({
  label,
  isSelected,
  variant,
  onPress,
}: RadioOptionProps) {
  return (
    <Container isSelected={isSelected} variant={variant} onPress={onPress}>
      <Indicator variant={variant} />
      <Text>{label}</Text>
    </Container>
  );
}
