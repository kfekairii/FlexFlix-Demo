/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
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
import {Movie} from '../services/res-types';

interface MovieCardProps {
  movie: Movie;
  type: 'movie' | 'tv';
}

const MovieCard: FC<MovieCardProps> = ({movie, type}) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <Container
      onPress={() => {
        navigation.navigate(SCREENS.MOVIE_DETAILS, {movie, type});
      }}>
      <ImageContainer style={{elevation: 8}}>
        <Image
          alt="movie"
          source={{
            uri: `https://image.tmdb.org/t/p/original${movie?.poster_path}`,
          }}
          style={{
            width: 143,
            height: 212,
            borderRadius: 12,
          }}
        />
      </ImageContainer>
      <ThemedText fontSize="sm" fontWeight="semibold">
        {movie?.title ?? movie?.name}
      </ThemedText>
      <RatingContainer>
        <StarIcon />
        <ThemedText fontSize="sm" fontWeight="light" color="tint" ml={4}>
          {movie?.vote_average}/10
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
