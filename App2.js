import React, { useState, useEffect } from 'react';
import { NativeModules } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import ReduxThunk from 'redux-thunk';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import rootReducer from './reducers';
import './ReactotronConfig';

import MainNavigator from './navigators/MainNavigator';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(ReduxThunk), Reactotron.createEnhancer()));

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

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
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
