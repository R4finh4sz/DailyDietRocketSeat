import React, { useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { useController } from 'react-hook-form';

import {
  Container,
  InputWrapper,
  StyledInput,
} from './styles';

interface InputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  control: any;
  name: string;
  placeholder: string;
  disabled?: boolean;
  height?: number;
}

export const Input = ({
  control,
  name,
  placeholder,
  disabled = false,
  height,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  return (
    <Container>
      <InputWrapper hasError={!!error} isDisabled={disabled} customHeight={height}>
        <StyledInput
          value={field.value || ''}
          onChangeText={field.onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            field.onBlur();
          }}
          placeholder={placeholder}
          placeholderTextColor="#BBBBBB"
          editable={!disabled}
          {...props}
        />
      </InputWrapper>
    </Container>
  );
};