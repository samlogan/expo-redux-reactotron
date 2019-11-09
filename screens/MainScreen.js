import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { getPosts } from '../actions/posts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#005B93',
  },
  textStyle: {
    color: '#FFFFFF',
    marginBottom: 10,
  },
});

const MainScreen = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(getPosts());
    console.log('Example console log from MainScreen.js');
  }, []);

  const { items } = posts;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.textStyle}>Edit screens/MainScreen.js to get started.</Text>
      <Text style={styles.textStyle}>Using Redux Hooks to fetch dummy posts:</Text>
      <View>
        {items.map(post => (
          <Text key={post} style={styles.textStyle}>
            {post}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default MainScreen;
