import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {basic} from '../../../../utils/types';

type props = basic & {};
const Notifications: FC<props> = () => {
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
};

export default Notifications;
