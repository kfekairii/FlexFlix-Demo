/* eslint-disable react-native/no-inline-styles */
import React, {FC, useEffect, useRef, useState} from 'react';
import {basic} from '../../../../utils/types';
import {AppScreen, ThemedText} from '../../../../components/themed';
import {Header} from '../../../../components/Header';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import MovieCard from '../../../../components/MovieCard';
import MovieListItem from '../../../../components/MovieListItem';
import {
  useGetTopPopularShowsQuery,
  useLazyGetTopPopularShowsQuery,
} from '../../../../services/api';
import {Movie} from '../../../../services/res-types';

type props = basic & {};
const Movies: FC<props> = () => {
  const scrollViewRef = useRef<any>(null);
  const {data} = useGetTopPopularShowsQuery(1);
  const [trigger, {data: pageData, isFetching}] =
    useLazyGetTopPopularShowsQuery();
  const [page, setPage] = useState(2);
  const [shows, setShows] = useState<Movie[]>([]);

  useEffect(() => {
    // trigger the lazy query on page change to fetch more movies
    trigger(page);
  }, [page, trigger]);

  useEffect(() => {
    if (pageData) {
      setShows(prev => {
        return [...prev, ...pageData];
      });
    }
  }, [pageData]);

  const handleScroll = (event: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const paddingToBottom = 20;

    if (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    ) {
      if (!isFetching) {
        setPage(prev => prev + 1);
      }
    }
  };

  return (
    <AppScreen>
      <Container
        onScroll={handleScroll}
        onContentSizeChange={() =>
          scrollViewRef?.current?.scrollToEnd({animated: true})
        }>
        <Header />
        <TrendingSection>
          <ThemedText fontWeight="bold" fontSize="md" mb={16}>
            Top rated
          </ThemedText>
          <ScrollView horizontal style={{paddingBottom: 10}}>
            {data?.slice(0, 5)?.map(item => {
              return <MovieCard movie={item} key={item.id} type="tv" />;
            })}
          </ScrollView>
        </TrendingSection>
        <PopularSection>
          <ThemedText fontWeight="bold" fontSize="md" mb={16}>
            TV Shows
          </ThemedText>
          {shows?.map(item => {
            return <MovieListItem movie={item} key={item.id} type="tv" />;
          })}
        </PopularSection>
        {isFetching && (
          <LodingSection>
            <ThemedText>Loading...</ThemedText>
          </LodingSection>
        )}
      </Container>
    </AppScreen>
  );
};

const Container = styled.ScrollView`
  padding: 12px;
`;
const TrendingSection = styled.View``;
const PopularSection = styled.View``;
const LodingSection = styled.View`
  padding-bottom: 75px;
`;

export default Movies;
