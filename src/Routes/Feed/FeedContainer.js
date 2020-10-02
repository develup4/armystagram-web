import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { IS_LOGIN } from '../../Resources/SharedQueries/SharedQueries';
import FeedPresenter from './FeedPresenter';

export default withRouter(() => {
  const {
    data: { isLogin },
  } = useQuery(IS_LOGIN);

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  // Select query by below states
  const [selectedMember, setSelectedMember] = useState('');
  const [filterState, setFilterState] = useState([true, false, false, false]);

  useEffect(() => {
    setFilterState([true, false, false, false]);
  }, [selectedMember]);

  useEffect(() => {
    setSelectedMember('');
  }, [filterState]);

  return (
    <FeedPresenter
      isLogin={isLogin}
      loading={loading}
      setLoading={setLoading}
      posts={posts}
      setPosts={setPosts}
      selectedMember={selectedMember}
      setSelectedMember={setSelectedMember}
      filterState={filterState}
      setFilterState={setFilterState}
    />
  );
});

// TODO : FEED에서 FEED로 라우트시 스테이트 유지해서 씨올피드가 안나옴(아미스타그램을 누를때)
