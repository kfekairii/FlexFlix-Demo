/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {BackArrowIcon} from '../utils/icons';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ThemedText} from './themed';

interface DetailsHeaderProps {
  title?: string;
}
const DetailsHeader: FC<DetailsHeaderProps> = ({title}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity
        style={{backgroundColor: '#232323', borderRadius: 20, padding: 4}}
        onPress={() => {
          navigation.goBack();
        }}>
        <BackArrowIcon width={24} height={24} color={'white'} />
      </TouchableOpacity>
      {title && (
        <ThemedText
          fontSize="lg"
          fontWeight="bold"
          style={{flex: 1, textAlign: 'center'}}>
          {title}
        </ThemedText>
      )}
    </Container>
  );
};
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  z-index: 999;
  padding: 12px 16px;
`;

export default DetailsHeader;
