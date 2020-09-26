import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'rl-react-helmet';
import Loader from '../../Components/Loader';
import Post from '../../Components/Post';
import MemberPanel from '../../Components/MemberPanel';
import Footer from '../../Components/Footer';

// TODO 피드에서만 헤더가 왼쪽으로 움직임

const Wrapper = styled.div`
  padding: 0px;
  display: flex;
  justify-content: space-around;
`;

const LeftPanel = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 285px;
  padding-left: 30px;
`;

const SeeFeedForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const SeeFeedCheck = styled.div`
  display: flex;
`;

export default ({ isLogin, loading, posts, setPosts }) => {
  return (
    <Wrapper>
      <Helmet>
        <title>Feed | Armystagram</title>
      </Helmet>
      <LeftPanel>
        <MemberPanel setPosts={setPosts}></MemberPanel>
        <PostWrapper>
          {loading && <Loader />}
          {!loading &&
            posts &&
            posts.map((post) => (
              <Post
                isLogin={isLogin}
                key={post.id}
                id={post.id}
                caption={post.caption}
                user={post.user}
                files={post.files}
                likeCount={post.likeCount}
                isLiked={isLogin ? post.isLiked : false}
                comments={post.comments}
                createdAt={post.createdAt}
              />
            ))}
        </PostWrapper>
      </LeftPanel>
      <RightPanel>
        <SeeFeedForm>
          <SeeFeedCheck>
            <input type='checkbox' name='name' value='a' />
            <label>Member</label>
          </SeeFeedCheck>
          <SeeFeedCheck>
            <input type='checkbox' name='name' value='a' />
            <label>Me</label>
          </SeeFeedCheck>
          <SeeFeedCheck>
            <input type='checkbox' name='name' value='a' />
            <label>Follower</label>
          </SeeFeedCheck>
          <SeeFeedCheck>
            <input type='checkbox' name='name' value='a' />
            <label>Unfollower</label>
          </SeeFeedCheck>
          BUTTON
        </SeeFeedForm>
        <Footer />
      </RightPanel>
    </Wrapper>
  );
};
