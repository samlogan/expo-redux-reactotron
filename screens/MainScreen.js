import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  StatusBar,
  Text
} from 'react-native';
import { getPosts } from '../actions/posts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#005B93'
  },
  textStyle: {
    color: '#FFFFFF'
  }
});

class MainScreen extends Component {
  componentWillMount() {
    this.props.getPosts();
    console.log('Example Console Log');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.textStyle}>Edit screens/MainScreen.js to get started</Text>
      </View>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  };
}

export default connect(mapStateToProps, { getPosts })(MainScreen);
