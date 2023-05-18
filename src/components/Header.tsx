import React from 'react';
import {HeaderIcon} from '../utils/icons';
import styled from 'styled-components/native';

const StyledView = styled.View`
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Header = () => {
  return (
    <StyledView>
      <HeaderIcon />
    </StyledView>
  );
};
