import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { IS_LOGIN, SEE_ALL_FEEDS } from './FeedQueries';
import FeedPresenter from './FeedPresenter';

export default withRouter(() => {
  const { isLogin } = useQuery(IS_LOGIN);
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
