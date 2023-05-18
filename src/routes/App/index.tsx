import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ButtomTab from './ButtomTab';
import Login from '../../views/Auth/Login';
import SCREENS from '../../utils/screens';
import Register from '../../views/Auth/Register';
import MovieDetials from '../../views/App/MovieDetails';
import Search from '../../views/App/Search';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.LOGIN} component={Login} />
      <Stack.Screen name={SCREENS.REGISTER} component={Register} />
      <Stack.Screen name={SCREENS.MAIN} component={ButtomTab} />
      <Stack.Screen name={SCREENS.MOVIE_DETAILS} component={MovieDetials} />
      <Stack.Screen name={SCREENS.SEARCH} component={Search} />
    </Stack.Navigator>
  );
};

export default index;
