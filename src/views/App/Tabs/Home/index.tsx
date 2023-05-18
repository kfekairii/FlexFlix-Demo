import {StatusBar} from 'react-native';
import React, {FC} from 'react';
import {basic} from '../../../../utils/types';
import {AppScreen} from '../../../../components/themed';
import {Header} from '../../../../components/Header';

type props = basic & {};
const Book: FC<props> = () => {
  return (
    <AppScreen>
      <Header />
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
    </AppScreen>
  );
};

export default Book;
