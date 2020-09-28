import { gql } from 'apollo-boost';

export const IS_LOGIN = gql`
  {
    isLoggedIn @client
  }
`;

export const SEE_ALL_FEEDS = gql`
  {
    seeAllFeeds {
      id
      caption
      user {
        id
        profile
        username
      }
      files {
        id
        url
      }
      isLiked
      likeCount
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;

// TODO : FIX TO FOLLOWER + MEMBER
export const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        profile
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;
