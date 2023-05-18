import React, {FC} from 'react';
import styled from 'styled-components/native';
import {ThemedText} from './themed';

interface StatsItemProps {
  title: string;
  value: string;
}

const StatsItem: FC<StatsItemProps> = ({title, value}) => {
  return (
    <Container>
      <ThemedText color="tint" fontSize="sm" fontWeight="light">
        {title}
      </ThemedText>
      <ThemedText color="tint" fontSize="sm" fontWeight="semibold">
        {value}
      </ThemedText>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
`;
export default StatsItem;
