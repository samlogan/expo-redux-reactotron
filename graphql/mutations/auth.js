import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(input: { username: $username, password: $password })
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!, $email: String!, $isSubscribed: Boolean) {
    createUser(input: { username: $username, password: $password, email: $email, isSubscribed: $isSubscribed }) {
      _id
      username
      email
      isSubscribed
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logout {
    logoutUser(confirmation: true)
  }
`;
