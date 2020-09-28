import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { IS_LOGIN } from '../../Resources/SharedQueries/SharedQueries';
import { SEE_ALL_FEEDS } from './FeedQueries';
import FeedPresenter from './FeedPresenter';

export default withRouter(() => {
  const {
    data: { isLogin },
  } = useQuery(IS_LOGIN);

  const { data, loading } = useQuery(SEE_ALL_FEEDS);
  const [posts, setPosts] = useState([]);

  return (
    <FeedPresenter
      isLogin={isLogin}
      loading={loading}
      posts={!loading && posts.length === 0 ? data.seeAllFeeds : posts}
      setPosts={setPosts}
    />
  );
});

// TODO : FEED에서 FEED로 라우트시 스테이트 유지해서 씨올피드가 안나옴(아미스타그램을 누를때)
