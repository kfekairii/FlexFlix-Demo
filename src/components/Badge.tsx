import React, {FC} from 'react';
import styled from 'styled-components/native';
import {ThemedText} from './themed';

interface BadgeProps {
  text: string;
}

const Badge: FC<BadgeProps> = ({text}) => {
  return (
    <Container>
      <ThemedText fontSize="xs" color="primaryLight" fontWeight="semibold">
        {text}
      </ThemedText>
    </Container>
  );
};

const Container = styled.View`
  height: 20px;
  margin-right: 4px;
  background-color: ${props => props.theme.colors.primaryLighter};
  padding: 2px 8px;
  border-radius: 20px;
  align-items: center;
`;

export default Badge;
