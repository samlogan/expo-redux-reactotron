import gql from 'graphql-tag';

export const CREATE_REPORT = gql`
  mutation CreateReport(
    $posted: String!
    $private: Boolean!
    $location: String
    $surf: String
    $rating: Int
    $winds: String
    $description: String
    $userId: ID
    $assets: [AssetInput]
  ) {
    createSurfReport(
      data: {
        posted: $posted
        private: $private
        location: $location
        surf: $surf
        winds: $winds
        description: $description
        rating: $rating
        user: { connect: $userId }
        assets: { create: $assets }
      }
    ) {
      _id
      surf
      user {
        username
      }
      assets {
        data {
          _id
          url
        }
      }
    }
  }
`;

export const CREATE_ANONYMOUS_REPORT = gql`
  mutation CreateReport($private: Boolean!, $location: String, $surf: String, $rating: Int, $winds: String) {
    createSurfReport(data: { private: $private, location: $location, surf: $surf, winds: $winds, rating: $rating }) {
      _id
      surf
      user {
        username
      }
    }
  }
`;
