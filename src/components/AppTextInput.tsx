import React, {FC} from 'react';
import styled from 'styled-components/native';
import {ThemedText} from './themed';
import {useTheme} from 'styled-components';
import {TextInputProps} from 'react-native';
// extand TextInput partialy

interface AppTextInputProps extends TextInputProps {
  lable?: string;
  placeholder?: string;
  leftIcon?: any;
}
const AppTextInput: FC<AppTextInputProps> = ({
  leftIcon: LeftIcon,
  lable,
  placeholder,
  ...props
}) => {
  const theme = useTheme();
  return (
    <Container>
      <ThemedText>{lable}</ThemedText>
      <TextInputContainer>
        {LeftIcon}
        <StyledTextInput
          placeholder={placeholder}
          placeholderTextColor={theme.colors.gray}
          {...props}
        />
      </TextInputContainer>
    </Container>
  );
};

const Container = styled.View`
  margin-top: 8px;
`;

const TextInputContainer = styled.View`
  flex-direction: row;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 16px;
  margin-top: 8px;
  align-items: center;
  padding-left: 8px;
  height: 56px;
`;

const StyledTextInput = styled.TextInput`
  color: ${props => props.theme.colors.text};
  margin-left: 8px;
  width: 90%;
`;

export default AppTextInput;
