import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { View, Text, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>A test screen</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
);

export default RegisterScreen;
