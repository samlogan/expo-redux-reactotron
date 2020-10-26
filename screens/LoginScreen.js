import React, { useState } from 'react';
import { Formik } from 'formik';
import { AppLoading } from 'expo';
import { useMutation } from '@apollo/react-hooks';
import { View, TextInput, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { LOGIN_USER } from '../graphql/mutations';

const LoginScreen = ({ navigation }) => {
  const [loginLoading, setLoginLoading] = useState(false);

  const onLoginFail = (error) => {
    setLoginLoading(false);

    console.error(error);
  };

  const onLoginSuccess = (response) => {
    console.log('success');
  };

  const [loginUser] = useMutation(LOGIN_USER, {
    onError: onLoginFail,
    onCompleted: onLoginSuccess,
  });

  const initialValues = { username: '', password: '' };

  const validate = (values) => {
    const { username, password } = values;

    if (!username) {
      return { username: 'Please provide your username' };
    }

    if (!password) {
      return { password: 'Please provide your password' };
    }
  };

  const onSubmit = (values) => {
    setLoginLoading(true);

    return loginUser({ variables: values });
  };

  const formProps = { initialValues, validate, onSubmit };

  if (loginLoading) {
    return <AppLoading />;
  }

  return (
    <Formik {...formProps}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Input
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            placeholder="username"
            textContentType="username"
          />
          <Input
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="password"
            textContentType="password"
          />
          <Button onPress={handleSubmit} title="submit" />
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;
