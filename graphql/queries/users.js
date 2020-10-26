import gql from 'graphql-tag';
import { USER_FRAGMENT } from '../fragments';

export const GET_USER_BY_USERNAME = gql`
  query getUser($username: String!) {
    userData: findByUsername(username: $username) {
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const GET_OWN_USER = gql`
  query getOwnUser {
    userData: findOwnUser {
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;
