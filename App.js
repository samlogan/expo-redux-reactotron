import React, { useState, useEffect } from 'react';
import { NativeModules } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { AppLoading } from 'expo';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import * as Font from 'expo-font';
import client from './apollo';
import rootReducer from './reducers';
import Stack from './navigators/Stack';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(ReduxThunk)));

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    console.disableYellowBox = true;

    const fetchFonts = async () => {
      await Font.loadAsync({
        bodyfont: require('./assets/fonts/Roboto-Regular.ttf'),
        headerfont: require('./assets/fonts/Roboto-Bold.ttf'),
      });
      setFontLoaded(true);
    };

    fetchFonts();
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Provider store={store}>
          <Stack />
        </Provider>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};

export default App;
