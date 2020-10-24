import React from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
  },
});

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator />
  </View>
);

export default Loading;
