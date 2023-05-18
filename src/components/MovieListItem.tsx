/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {ThemedText} from './themed';
import {ClockIcon, StarIcon} from '../utils/icons';
import Badge from './Badge';

const MovieListItem = () => {
  return (
    <Container>
      <ImageContainer style={{elevation: 8}}>
        <Image
          alt="movie"
          source={{
            uri: 'https://www.themoviedb.org/t/p/w440_and_h660_face/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
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
          Spiderman: No Way Home
        </ThemedText>
        <RatingContainer>
          <StarIcon />
          <ThemedText fontSize="sm" fontWeight="light" color="tint" ml={4}>
            9.1/10
          </ThemedText>
        </RatingContainer>
        <BadgeContainer>
          {[1, 2, 3].map(() => {
            return <Badge text="BADGE" />;
          })}
        </BadgeContainer>
        <DurationContainer>
          <ClockIcon color={'black'} />
          <ThemedText fontSize="xs" ml={4}>
            1h 47min
          </ThemedText>
        </DurationContainer>
      </DetailsContainer>
    </Container>
  );
};

const Container = styled.View`
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
const DurationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export default MovieListItem;
