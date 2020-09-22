import React from 'react';
import { Helmet } from 'rl-react-helmet';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import Loader from '../Components/Loader';
import Post from '../Components/Post';

const SEE_ALL_FEEDS = gql`
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

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

export default () => {
  const { data, loading } = useQuery(SEE_ALL_FEEDS);
  return (
    <Wrapper>
      <Helmet>
        <title>Feed | Armystagram</title>
      </Helmet>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            caption={post.caption}
            user={post.user}
            files={post.files}
            likeCount={post.likeCount}
            isLiked={true}
            comments={post.comments}
            createdAt={post.createdAt}
          />
        ))}
    </Wrapper>
  );
};
