import React from 'react';

import {
  CardContainer,
  HalfWidthCardContainer,
  CardNumber,
  CardLabel,
} from './styled';

interface CardProps {
  number: number;
  label: string;
  color: string;
  width: string;
}

export const StatisticCard = ({number, label, color, width}: CardProps) => {
  const ContainerComponent =
    width === 'half' ? HalfWidthCardContainer : CardContainer;

  return (
    <ContainerComponent bgColor={color}>
      <CardNumber>{number}</CardNumber>
      <CardLabel>{label}</CardLabel>
    </ContainerComponent>
  );
};
