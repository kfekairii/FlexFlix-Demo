import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import styled from 'styled-components/native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';

import AppStack from './App';

const Root: FC = () => {
  return <AppStack />;
};

const Wrapper = () => {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <StyledView insets={insets}>
        <Root />
      </StyledView>
    </NavigationContainer>
  );
};

const StyledView = styled.View<{insets: EdgeInsets}>`
  padding-bottom: ${props => {
    return props.insets.bottom;
  }}px;
  background-color: #fff;
  flex: 1;
`;
export default Wrapper;
