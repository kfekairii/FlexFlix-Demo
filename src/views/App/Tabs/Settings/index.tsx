import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {basic} from '../../../../utils/types';

type props = basic & {};
const More: FC<props> = () => {
  return (
    <View>
      <Text>More</Text>
    </View>
  );
};

export default More;
