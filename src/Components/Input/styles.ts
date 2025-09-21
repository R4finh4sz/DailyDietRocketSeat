import styled, {css} from 'styled-components/native';
import {View} from 'react-native';
import MaskInput from 'react-native-mask-input';

export const Container = styled(View)`
  margin-bottom: 16px;
`;

interface InputWrapperProps {
  hasError: boolean;
  isDisabled: boolean;
  customHeight?: number;
  isMultiline?: boolean;
}

export const InputWrapper = styled(View)<InputWrapperProps>`
  flex-direction: row;
  background-color: #fcfcfc;
  border-width: 1px;
  border-color: #d9d9d9;
  border-radius: 12px;
  padding-horizontal: 16px;

  ${({customHeight}) =>
    customHeight
      ? css`
          height: ${customHeight}px;
        `
      : css`
          height: 56px;
        `}

  ${({hasError}) =>
    hasError &&
    css`
      border-color: #ff4444;
    `}

  ${({isDisabled}) =>
    isDisabled &&
    css`
      opacity: 0.6;
    `}
`;

export const StyledInput = styled(MaskInput)`
  flex: 1;
  font-size: 16px;
  font-family: 'Poppins_Regular';
  color: #000000;
  /* O próprio input lida com seu padding interno para um layout mais estável */
  padding-vertical: 14px;
`;
