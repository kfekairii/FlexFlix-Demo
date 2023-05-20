import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/routes/Root';
import RNBootSplash from 'react-native-bootsplash';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './src/config/lightTheme';
import {Provider} from 'react-redux';
import {store} from './src/store';

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
          <Provider store={store}>
            <Navigation />
          </Provider>
        </SafeAreaProvider>
      </ThemeProvider>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
    </>
  );
};

export default App;
