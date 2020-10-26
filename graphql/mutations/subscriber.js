import gql from 'graphql-tag';

export const CREATE_SUBSCRIBER = gql`
  mutation CreateSubscriber($email: String!) {
    createSubscriber(data: { email: $email }) {
      _id
      email
    }
  }
`;
