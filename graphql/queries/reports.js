import gql from 'graphql-tag';
import { REPORT_FRAGMENT } from '../fragments';

export const GET_REPORTS = gql`
  query getAllReports {
    reports: allSurfReports {
      data {
        _id
        _ts
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
    }
  }
`;

export const GET_PUBLIC_REPORTS = gql`
  query getAllPublicReports($cursor: String) {
    publicReports: publicSurfReports(_size: 5, _cursor: $cursor) {
      data {
        ...surfReportFragment
      }
      before
      after
    }
  }
  ${REPORT_FRAGMENT}
`;
