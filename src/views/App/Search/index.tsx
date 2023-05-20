/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {AppScreen, ThemedText} from '../../../components/themed';
import DetailsHeader from '../../../components/DetailsHeader';
import AppTextInput from '../../../components/AppTextInput';
import styled from 'styled-components/native';
import {LogoIcon} from '../../../utils/icons';
import {FlatList} from 'react-native';
import MovieListItem from '../../../components/MovieListItem';
import {useLazySearchQuery} from '../../../services/api';

const Search = () => {
  const [query, setQuery] = useState('');
  const [trigger, {data, isFetching}] = useLazySearchQuery();

  useEffect(() => {
    if (query.length > 3) {
      trigger({queryText: query});
    }
  }, [query, trigger]);

  return (
    <AppScreen>
      <DetailsHeader title="Search" />
      <Container>
        <AppTextInput
          placeholder="search.."
          leftIcon={<LogoIcon width={32} height={32} />}
          autoFocus
          onChangeText={v => {
            setQuery(v);
          }}
        />
        {isFetching ? (
          <ThemedText>Loding...</ThemedText>
        ) : (
          <>
            <ResultContainer>
              <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => {
                  return <MovieListItem movie={item} type={item.media_type} />;
                }}
                contentContainerStyle={{paddingBottom: 220}}
              />
            </ResultContainer>
          </>
        )}
      </Container>
    </AppScreen>
  );
};

const Container = styled.View`
  padding: 0px 12px;
`;
const ResultContainer = styled.View`
  margin-top: 12px;
`;

export default Search;
