import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import ButtomTab from './ButtomTab';
import Login from '../../views/Auth/Login';
import SCREENS from '../../utils/screens';
import Register from '../../views/Auth/Register';
import MovieDetials from '../../views/App/MovieDetails';
import Search from '../../views/App/Search';

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState();

  function onAuthStateChanged(usr: any) {
    setUser(usr);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  // auth().signOut();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!user ? (
        <>
          <Stack.Screen name={SCREENS.LOGIN} component={Login} />
          <Stack.Screen name={SCREENS.REGISTER} component={Register} />
        </>
      ) : (
        <>
          <Stack.Screen name={SCREENS.MAIN} component={ButtomTab} />
          <Stack.Screen name={SCREENS.MOVIE_DETAILS} component={MovieDetials} />
          <Stack.Screen name={SCREENS.SEARCH} component={Search} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default App;
