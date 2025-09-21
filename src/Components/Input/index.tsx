import {useState} from 'react';
import {TextInputProps} from 'react-native';
import {useController} from 'react-hook-form';
import {Mask} from 'react-native-mask-input';

import {Container, InputWrapper, StyledInput} from './styles';

interface InputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  control: any;
  name: string;
  placeholder: string;
  mask?: Mask;
  disabled?: boolean;
  height?: number;
}

export const Input = ({
  control,
  name,
  placeholder,
  mask,
  disabled = false,
  height,
  multiline,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const {
    field,
    fieldState: {error},
  } = useController({control, name});

  return (
    <Container>
      <InputWrapper
        hasError={!!error}
        isDisabled={disabled}
        isMultiline={multiline}
        customHeight={height}>
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
          mask={mask}
          multiline={multiline}
          editable={!disabled}
          {...props}
        />
      </InputWrapper>
    </Container>
  );
};
