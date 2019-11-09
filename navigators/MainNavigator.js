import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../screens/MainScreen';

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

const MainNavigator = createBottomTabNavigator(
  {
    main: {
      screen: MainScreen,
      // screen: createBottomTabNavigator({
      //   ScreenOne: {
      //     screen: createStackNavigator({
      //       SubscreenOne: { screen: SubscreenOne },
      //       SubscreenTwo: { screen: SubscreenTwo },
      //       SubscreenThree: { screen: ScreenOneThree }
      //     })
      //   },
      //   ScreenTwo: {
      //     screen: createStackNavigator({
      //       SubscreenOne: { screen: SubscreenOne },
      //       SubscreenTwo: { screen: SubscreenTwo },
      //       SubscreenThree: { screen: ScreenOneThree }
      //     })
      //   },
      //   ScreenThree: {
      //     screen: createStackNavigator({
      //       SubscreenOne: { screen: SubscreenOne },
      //       SubscreenTwo: { screen: SubscreenTwo }
      //     })
      //   }
      // },{
      //   tabBarOptions: {
      //     showLabel: true,
      //     showIcon: true,
      //     labelStyle: {
      //       fontSize: Platform.OS === 'ios' ? 14 : 11,
      //       paddingTop: Platform.OS === 'ios' ? 5 : 0,
      //       paddingBottom: Platform.OS === 'ios' ? 8 : 0,
      //       fontFamily: 'headerfont',
      //     },
      //     style: {
      //       backgroundColor: '#195F9D',
      //       borderTopColor: '#195F9D',
      //       height: 65
      //     },
      //     iconStyle: {
      //       marginTop: Platform.OS === 'ios' ? 0 : -5,
      //       width: 35,
      //       height: 32
      //     },
      //     activeTintColor: '#FFFFFF',
      //     activeBackgroundColor: '#195F9D',
      //     inactiveTintColor: Platform.OS === 'ios' ? '#94B2D0' : '#FFFFFF',
      //     inactiveBackgroundColor: '#195F9D',
      //   },
      //   swipeEnabled: false,
      //   lazy: true,
      //   tabBarPosition: 'bottom'
      // })
    },
  },
  {
    navigationOptions: {
      tabBarVisible: false,
    },
    lazy: true,
    swipeEnabled: false,
  }
);

export default createAppContainer(MainNavigator);
