import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {basic} from '../../../../utils/types';

type props = basic & {};
const Flights: FC<props> = () => {
  return (
    <View>
      <Text>Flights</Text>
    </View>
  );
};

export default Flights;
