/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {basic} from '../../../../utils/types';
import {AppScreen, ThemedText} from '../../../../components/themed';
import {Header} from '../../../../components/Header';
import styled from 'styled-components/native';
import {FlatList, ScrollView} from 'react-native';
import MovieCard from '../../../../components/MovieCard';
import MovieListItem from '../../../../components/MovieListItem';

type props = basic & {};
const Shows: FC<props> = () => {
  return (
    <AppScreen>
      <Header />
      <Container>
        <TrendingSection>
          <ThemedText fontWeight="bold" fontSize="md" mb={16}>
            Top 5
          </ThemedText>
          <ScrollView horizontal style={{paddingBottom: 10}}>
            {[1, 2, 3, 4].map((item, index) => {
              return <MovieCard key={index} />;
            })}
          </ScrollView>
        </TrendingSection>
        <PopularSection>
          <ThemedText fontWeight="bold" fontSize="md" mb={16}>
            TV Shows
          </ThemedText>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={() => {
              return <MovieListItem />;
            }}
          />
        </PopularSection>
      </Container>
    </AppScreen>
  );
};

const Container = styled.ScrollView`
  padding: 12px;
`;
const TrendingSection = styled.View``;
const PopularSection = styled.View``;

export default Shows;
