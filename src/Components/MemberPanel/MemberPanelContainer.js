import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { GET_MEMBERS, SEE_ALL_MEMBER_FEEDS } from './MemberPanelQueries';
import MemberPanelPresenter from './MemberPanelPresenter';

const MemberPanelContainer = ({ setPosts }) => {
  const { data, loading } = useQuery(GET_MEMBERS);
  const { data: all, loading: allLoading } = useQuery(SEE_ALL_MEMBER_FEEDS);

  const selectAll = () => {
    if (!allLoading && all) {
      setPosts(all.seeAllMemberFeeds);
    }
  };

  const selectMember = (posts) => {
    setPosts(posts);
  };

  return (
    <MemberPanelPresenter
      loading={loading}
      data={data}
      selectAll={selectAll}
      selectMember={selectMember}
    />
  );
};

export default MemberPanelContainer;
