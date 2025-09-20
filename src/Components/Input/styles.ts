import styled, { css } from 'styled-components/native';
import { TextInput, View } from 'react-native';

export const Container = styled(View)`
  margin-bottom: 16px;
`;

interface InputWrapperProps {
  hasError: boolean;
  isDisabled: boolean;
  customHeight?: number;
}

export const InputWrapper = styled(View)<InputWrapperProps>`
  flex-direction: row;
  align-items: center;
  background-color: #fcfcfc;
  border-width: 1px;
  border-color: #d9d9d9;
  border-radius: 12px;
  padding-horizontal: 16px;
  min-height: 56px;

  ${({ customHeight }) =>
    customHeight
      ? css`
          height: ${customHeight}px;
          padding-vertical: 0;
        `
      : css`
          padding-vertical: 14px;
        `}

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #ff4444;
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.6;
    `}
`;

export const StyledInput = styled(TextInput)`
  flex: 1;
  font-size: 16px;
  font-family: 'Poppins_Regular';
  color: #000000;
`;