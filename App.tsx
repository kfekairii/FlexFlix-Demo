import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/routes/Root';
import RNBootSplash from 'react-native-bootsplash';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './src/config/lightTheme';

const App = () => {
  useEffect(() => {
    setTimeout(async () => {
      await RNBootSplash.hide({fade: true});
    }, 1000);
  }, []);

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </ThemeProvider>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
    </>
  );
};

export default App;
