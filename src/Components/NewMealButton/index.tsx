import React from 'react';
import { Container, Icon, ButtonText } from './styles';
import { Feather } from '@expo/vector-icons';

 interface Props {
  onPress: () => void;
}


export function NewMealButton({ onPress }:Props) {
  return (
    <Container onPress={onPress}>
      <Icon>
        <Feather name="plus" size={18} color="#FAFAFA" />
      </Icon>
      <ButtonText>Nova refeição</ButtonText>
    </Container>
  );
}

