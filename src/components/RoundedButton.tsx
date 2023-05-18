import React, {FC} from 'react';
import {ThemedButton, ThemedText} from './themed';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';

interface RoundedButtonProps {
  text: string;
  color?: 'primary' | 'gray';
  LeftIcon?: any;
  textColor?: 'primary' | 'primaryLight' | 'white';
  mb?: number;
  mt?: number;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  link?: boolean;
}

export const RoundedButton: FC<RoundedButtonProps> = ({
  text,
  color,
  textColor,
  LeftIcon,
  mb,
  mt,
  onPress,
  loading,
  disabled,
  link,
}) => {
  const theme = useTheme();
  return (
    <ThemedButton
      color={color}
      mb={mb}
      mt={mt}
      onPress={onPress}
      link={link}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator color={theme.colors.primary} />
      ) : (
        <>
          {LeftIcon && <LeftIcon />}
          <ThemedText
            color={disabled ? 'lightGray' : textColor}
            fontWeight="semibold"
            ml={8}>
            {text}
          </ThemedText>
        </>
      )}
    </ThemedButton>
  );
};
