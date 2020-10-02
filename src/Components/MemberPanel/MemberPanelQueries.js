import { gql } from 'apollo-boost';

export const GET_MEMBERS = gql`
  {
    getMembers {
      username
      profile
      posts {
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
  }
`;

// todo : 처음부터 멤버 모든 포스트를 가져와서 초기 로딩이 길수도 있다.
// 배포하고 제대로된 서버면 별로 오버헤드가 아닐지도

export const SEE_ALL_MEMBER_FEEDS = gql`
  {
    seeAllMemberFeeds {
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
