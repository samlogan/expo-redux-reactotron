import gql from 'graphql-tag';

export const REPORT_FRAGMENT = gql`
  fragment surfReportFragment on SurfReport {
    _id
    posted
    private
    location
    surf
    rating
    winds
    description
    user {
      username
    }
    groups {
      data {
        name
      }
    }
    assets {
      data {
        _id
        name
        type
      }
    }
  }
`;

export const USER_FRAGMENT = gql`
  fragment userFragment on User {
    _id
    username
    surfReports {
      data {
        ...surfReportFragment
      }
    }
    # groups {
    #   data {
    #     name
    #     surfReports {
    #       data {
    #         ...surfReportFragment
    #       }
    #     }
    #   }
    # }
  }
  ${REPORT_FRAGMENT}
`;
