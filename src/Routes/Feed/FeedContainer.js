import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { IS_LOGIN } from '../../Resources/SharedQueries/SharedQueries';
import { SEE_FILTERED_POSTS } from './FeedQueries';
import FeedPresenter from './FeedPresenter';

export default withRouter(() => {
  const {
    data: { isLogin },
  } = useQuery(IS_LOGIN);

  const [posts, setPosts] = useState([]);

  // Select query by below states
  const [selectedMember, setSelectedMember] = useState('');
  const [filterState, setFilterState] = useState([true, false, false, false]);

  // SEE_MEMBER_POSTS
  const { data: memberPosts, loading: loadingMemberPosts } = useQuery(
    SEE_FILTERED_POSTS,
    {
      variables: {
        all: false,
        popular: false,
        liked: false,
        follower: false,
        member: true,
        memberName: selectedMember,
      },
      skip: selectedMember === '',
    }
  );

  useEffect(() => {
    if (!loadingMemberPosts && memberPosts) {
      setPosts(memberPosts.seeFilteredPosts);
      setFilterState([false, false, false, false]);
      window.scrollTo(0, 0);
    }
  }, [loadingMemberPosts, memberPosts]);

  // SEE_FILTERED_POSTS
  const { data: filteredPosts, loading: loadingFilteredPosts } = useQuery(
    SEE_FILTERED_POSTS,
    {
      variables: {
        all: filterState[0],
        popular: filterState[1],
        liked: filterState[2],
        follower: filterState[3],
        member: false,
      },
      skip:
        filterState[0] === false &&
        filterState[1] === false &&
        filterState[2] === false &&
        filterState[3] === false,
    }
  );

  useEffect(() => {
    if (!loadingFilteredPosts && filteredPosts) {
      setPosts(filteredPosts.seeFilteredPosts);
      setSelectedMember('');
      window.scrollTo(0, 0);
    }
  }, [loadingFilteredPosts, filteredPosts]);

  return (
    <FeedPresenter
      isLogin={isLogin}
      loading={loadingMemberPosts || loadingFilteredPosts}
      posts={posts}
      selectedMember={selectedMember}
      setSelectedMember={setSelectedMember}
      filterState={filterState}
      setFilterState={setFilterState}
    />
  );
});
