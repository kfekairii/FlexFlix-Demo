/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {BookIcon, LogoIcon} from '../utils/icons';
import styled from 'styled-components/native';
import {ThemedText} from './themed';
import {useTheme} from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import SCREENS from '../utils/screens';

export const Header = () => {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <Container>
      <LogoIcon width={32} height={32} />
      <ThemedText
        fontSize="lg"
        fontWeight="bold"
        style={{flex: 1, textAlign: 'center'}}>
        FlixFlex
      </ThemedText>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.SEARCH);
        }}>
        <BookIcon width={32} height={32} color={theme.colors.primary} />
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  z-index: 999;
  padding: 12px 8px;
`;
