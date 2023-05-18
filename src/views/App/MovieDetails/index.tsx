/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {AppScreen, ThemedText} from '../../../components/themed';
import DetailsHeader from '../../../components/DetailsHeader';
import {basic} from '../../../utils/types';
import styled from 'styled-components/native';
import {Image} from 'react-native';
import {StarIcon} from '../../../utils/icons';
import Badge from '../../../components/Badge';
import StatsItem from '../../../components/StatsItem';
import CastItem from '../../../components/CastItem';

type props = basic & {};
const MovieDetials: FC<props> = () => {
  return (
    <AppScreen>
      <DetailsHeader />
      <ImageContainer>
        <Image
          alt="movie"
          source={{
            uri: 'https://www.themoviedb.org/t/p/w440_and_h660_face/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="repeat"
        />
      </ImageContainer>
      <Container>
        <ThemedText fontSize="lg" fontWeight="semibold">
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
        <StatsContainer>
          <StatsItem title="Length" value="2h 28min" />
          <StatsItem title="Language" value="English" />
          <StatsItem title="Rating" value="PG-13" />
        </StatsContainer>
        <ThemedText fontSize="md" fontWeight="semibold">
          Description
        </ThemedText>
        <ThemedText
          fontSize="sm"
          color="tint"
          style={{lineHeight: 22, letterSpacing: 0.02}}
          mt={8}>
          With Spider-Man's identity now revealed, Peter asks Doctor Strange for
          help. When a spell goes wrong, dangerous foes from other worlds start
          to appear, forcing Peter to discover what it truly means to be
          Spider-Man.
        </ThemedText>
        <ThemedText fontSize="md" fontWeight="semibold" mt={12}>
          Cast
        </ThemedText>
        <CastConatiner>
          {[1, 2, 3, 4].map(() => {
            return <CastItem />;
          })}
        </CastConatiner>
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
const CastConatiner = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 16px;
  padding-bottom: 24px;
`;

export default MovieDetials;
