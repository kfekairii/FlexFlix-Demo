/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {ThemedText} from './themed';
import {StarIcon} from '../utils/icons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import SCREENS from '../utils/screens';

const MovieCard = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <Container
      onPress={() => {
        navigation.navigate(SCREENS.MOVIE_DETAILS);
      }}>
      <ImageContainer style={{elevation: 8}}>
        <Image
          alt="movie"
          source={{
            uri: 'https://www.themoviedb.org/t/p/w440_and_h660_face/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
          }}
          style={{
            width: 143,
            height: 212,
            borderRadius: 12,
          }}
        />
      </ImageContainer>
      <ThemedText fontSize="sm" fontWeight="semibold">
        Spiderman: No Way Home
      </ThemedText>
      <RatingContainer>
        <StarIcon />
        <ThemedText fontSize="sm" fontWeight="light" color="tint" ml={4}>
          9.1/10
        </ThemedText>
      </RatingContainer>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  margin-right: 16px;
  padding-left: 12px;
  width: 143px;
`;
const ImageContainer = styled.View`
  width: 143px;
  height: 212px;
  border-radius: 12px;
  margin-bottom: 12px;
`;
const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default MovieCard;
