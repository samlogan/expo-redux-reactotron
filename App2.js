import React from 'react';
import { NativeModules } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import { addNavigationHelpers } from 'react-navigation';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import { Font, AppLoading } from 'expo';
import './ReactotronConfig'

import { setNavigator } from './utils/navigator';
import MainNavigator from './navigators/MainNavigator';

const store = Reactotron.createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
);

if (__DEV__ ) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

export default class App extends React.Component {
  state = { fontLoaded: false }
  async componentDidMount() {
    console.disableYellowBox = true;
    await Font.loadAsync({
      'bodyfont': require('./assets/fonts/Roboto-Regular.ttf'),
      'headerfont': require('./assets/fonts/Roboto-Bold.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (!this.state.fontLoaded) return <AppLoading />;
    return (
      <Provider store={store}>
        <MainNavigator ref={nav => { this.navigator = nav; }} />
      </Provider>
    );
  }
}
