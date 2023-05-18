/* eslint-disable react-native/no-inline-styles */
import {Image} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {ThemedText} from './themed';

const CastItem = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          alt="movie"
          source={{
            uri: 'https://www.themoviedb.org/t/p/w440_and_h660_face/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
          }}
          style={{
            width: 72,
            height: 72,
          }}
        />
      </ImageContainer>
      <ThemedText fontSize="xs" fontWeight="light">
        Tom Holland
      </ThemedText>
    </Container>
  );
};

const Container = styled.View`
  margin-right: 12px;
`;
const ImageContainer = styled.View`
  width: 72px;
  height: 72px;
`;

export default CastItem;
