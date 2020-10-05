import { gql } from 'apollo-boost';

export const IS_LOGIN = gql`
  {
    isLogin @client
  }
`;

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

export const ME = gql`
  {
    me {
      username
      email
      profile
    }
  }
`;

export const FOLLOW = gql`
  mutation follow($id: String!) {
    follow(id: $id)
  }
`;
