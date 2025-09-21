import React from 'react';
import {Feather} from '@expo/vector-icons';
import {Container, Icon, ButtonText} from './styles';

interface ButtonProps {
  onPress: () => void;
  children: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  iconName?: keyof typeof Feather.glyphMap;
  iconSize?: number;
  iconColor?: string;
  width?: string;
}

export function Button({
  onPress,
  children,
  backgroundColor,
  textColor,
  disabled = false,
  iconName,
  iconSize = 18,
  iconColor,
  width,
}: ButtonProps) {
  const finalIconColor = iconColor || textColor || '#FAFAFA';

  return (
    <Container
      onPress={onPress}
      backgroundColor={backgroundColor}
      disabled={disabled}
      activeOpacity={0.8}
      width={width}>
      {iconName && (
        <Icon>
          <Feather
            name={iconName}
            size={iconSize}
            color={disabled ? '#888888' : finalIconColor}
          />
        </Icon>
      )}
      <ButtonText textColor={textColor} disabled={disabled}>
        {children}
      </ButtonText>
    </Container>
  );
}
