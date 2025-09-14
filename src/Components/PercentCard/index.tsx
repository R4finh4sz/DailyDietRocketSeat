import React from 'react';
import { Container, Percentage, Description, ArrowIcon } from './styles';
import { Feather } from '@expo/vector-icons';

 interface Props {
  percentage: string;
  onPress: () => void;
}

export function PercentCard({ percentage, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <ArrowIcon>
        <Feather name="arrow-up-right" size={24} color="#639339" />
      </ArrowIcon>
      <Percentage>{percentage}</Percentage>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}