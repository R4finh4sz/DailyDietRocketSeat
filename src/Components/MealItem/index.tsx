import React from 'react';
import { Container, TimeText, Separator, MealText, StatusIndicator } from './styles';

interface Props {
  time: string;
  meal: string;
  status?: 'within' | 'outside';
}

export function MealItem({ time, meal, status = 'within' }: Props) {
  return (
    <Container>
      <TimeText>{time}</TimeText>
      <Separator>|</Separator>
      <MealText>{meal}</MealText>
      <StatusIndicator status={status} />
    </Container>
  );
}
