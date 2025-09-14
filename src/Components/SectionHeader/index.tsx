import React from 'react';
import { Container, DateText } from './styles';

interface Props {
  date: string;
}

export function SectionHeader({ date }: Props) {
  return (
    <Container>
      <DateText>{date}</DateText>
    </Container>
  );
}

