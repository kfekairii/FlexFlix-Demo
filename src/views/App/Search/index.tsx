/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {AppScreen} from '../../../components/themed';
import DetailsHeader from '../../../components/DetailsHeader';
import AppTextInput from '../../../components/AppTextInput';
import styled from 'styled-components/native';
import {LogoIcon} from '../../../utils/icons';
import {FlatList} from 'react-native';
import MovieListItem from '../../../components/MovieListItem';

const Search = () => {
  return (
    <AppScreen>
      <DetailsHeader title="Search" />
      <Container>
        <AppTextInput
          placeholder="search.."
          leftIcon={<LogoIcon width={32} height={32} />}
          autoFocus
        />
        <ResultContainer>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            renderItem={() => {
              return <MovieListItem />;
            }}
            contentContainerStyle={{paddingBottom: 220}}
          />
        </ResultContainer>
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
