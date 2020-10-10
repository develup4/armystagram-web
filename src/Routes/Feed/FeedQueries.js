import { gql } from 'apollo-boost';

export const IS_LOGIN = gql`
  {
    isLoggedIn @client
  }
`;

export const SEE_FILTERED_POSTS = gql`
  query seeFilteredPosts(
    $all: Boolean!
    $popular: Boolean!
    $liked: Boolean!
    $follower: Boolean!
    $member: Boolean!
    $memberName: String
  ) {
    seeFilteredPosts(
      all: $all
      popular: $popular
      liked: $liked
      follower: $follower
      member: $member
      memberName: $memberName
    ) {
      id
      caption
      user {
        id
        profile
        username
        isFollowing
        isMember
        isSelf
      }
      files {
        id
        url
      }
      likes {
        user {
          isMember
          username
          profile
        }
      }
      isLiked
      likeCount
      comments {
        id
        text
        user {
          id
          username
          isMember
        }
      }
      createdAt
    }
  }
`;
