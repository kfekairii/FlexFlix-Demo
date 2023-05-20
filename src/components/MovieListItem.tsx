/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {ThemedText} from './themed';
import {StarIcon} from '../utils/icons';
import Badge from './Badge';
import {Movie} from '../services/res-types';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import SCREENS from '../utils/screens';

interface MovieListItemProps {
  movie: Movie;
  type: 'movie' | 'tv';
}

const MovieListItem: FC<MovieListItemProps> = ({movie, type}) => {
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
            uri: `https://www.themoviedb.org/t/p/w500/${
              movie?.poster_path ?? movie?.backdrop_path
            }`,
          }}
          style={{
            width: 85,
            height: 128,
            borderRadius: 12,
          }}
        />
      </ImageContainer>
      <DetailsContainer>
        <ThemedText fontSize="sm" fontWeight="semibold" mb={8}>
          {movie?.title ?? movie?.name}
        </ThemedText>
        <RatingContainer>
          <StarIcon />
          <ThemedText fontSize="sm" fontWeight="light" color="tint" ml={4}>
            {movie?.vote_average}/10
          </ThemedText>
        </RatingContainer>
        <BadgeContainer>
          {[1, 2, 3].map(() => {
            return <Badge text="BADGE" />;
          })}
        </BadgeContainer>
        {movie.media_type && <ThemedText>{movie.media_type}</ThemedText>}
      </DetailsContainer>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  margin-bottom: 16px;
  padding-left: 12px;
  flex-direction: row;
  align-items: center;
`;
const DetailsContainer = styled.View``;
const ImageContainer = styled.View`
  width: 85px;
  height: 128px;
  border-radius: 12px;
  margin-right: 12px;
`;
const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;
const BadgeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export default MovieListItem;
