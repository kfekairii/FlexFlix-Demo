/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {AppScreen, ThemedText} from '../../../components/themed';
import DetailsHeader from '../../../components/DetailsHeader';
import {basic} from '../../../utils/types';
import styled from 'styled-components/native';
import {Image} from 'react-native';
import {StarIcon} from '../../../utils/icons';
import Badge from '../../../components/Badge';

import {Movie} from '../../../services/res-types';
import {useGetDetailsQuery} from '../../../services/api';
import StatsItem from '../../../components/StatsItem';

type props = basic & {
  route: {
    params: {
      movie: Movie;
      type: 'movie' | 'tv';
    };
  };
};
const MovieDetails: FC<props> = ({route}) => {
  const {params} = route;
  const movie = params?.movie;
  const stype = params?.type;

  const {data} = useGetDetailsQuery({stype, id: movie.id});

  return (
    <AppScreen>
      <DetailsHeader />
      <ImageContainer>
        <Image
          alt="movie"
          source={{
            uri: `https://image.tmdb.org/t/p/original${movie?.poster_path}`,
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="cover"
        />
      </ImageContainer>
      <Container>
        <ThemedText fontSize="lg" fontWeight="semibold">
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
        {data && (
          <StatsContainer>
            {data.release_date && (
              <StatsItem title="Date" value={data.release_date} />
            )}
            {data.runtime && (
              <StatsItem
                title="Length"
                value={data.runtime?.toString() + ' m'}
              />
            )}
            <StatsItem
              title="Language"
              value={data.spoken_languages
                .map(lg => lg.english_name)
                .join(', ')}
            />
          </StatsContainer>
        )}
        <ThemedText fontSize="md" fontWeight="semibold" mt={12}>
          Description
        </ThemedText>
        <ThemedText
          fontSize="sm"
          color="tint"
          style={{lineHeight: 22, letterSpacing: 0.02}}
          mt={8}>
          {movie?.overview}
        </ThemedText>
        {/* <ThemedText fontSize="md" fontWeight="semibold" mt={12}>
          Cast
        </ThemedText>
        <CastConatiner>
          {[1, 2, 3, 4].map(() => {
            return <CastItem />;
          })}
        </CastConatiner> */}
      </Container>
    </AppScreen>
  );
};
const Container = styled.ScrollView`
  height: 65%;
  width: 100%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 24px;
`;
const RatingContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 70%;
  position: absolute;
  margin-bottom: 12px;
`;

const BadgeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;
const StatsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 16px;
`;
// const CastConatiner = styled.View`
//   flex-direction: row;
//   align-items: center;
//   margin-top: 12px;
//   margin-bottom: 16px;
//   padding-bottom: 24px;
// `;

export default MovieDetails;
