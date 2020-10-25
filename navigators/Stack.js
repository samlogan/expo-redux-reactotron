import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import RegisterScreen from '../screens/RegisterScreen';

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Main">
      <Screen name="Main" component={MainScreen} options={{ title: 'Main' }} />
      <Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
    </Navigator>
  </NavigationContainer>
);

export default Stack;
