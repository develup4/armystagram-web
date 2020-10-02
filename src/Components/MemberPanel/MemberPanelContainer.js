import React, { useEffect } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { GET_MEMBERS, SEE_ALL_MEMBER_FEEDS } from './MemberPanelQueries';
import MemberPanelPresenter from './MemberPanelPresenter';

const MemberPanelContainer = ({
  setPosts,
  setLoading,
  selectedMember,
  setSelectedMember,
}) => {
  const { data, loading } = useQuery(GET_MEMBERS);
  const { data: all, loading: allLoading } = useQuery(SEE_ALL_MEMBER_FEEDS);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  useEffect(() => {
    setLoading(allLoading);
  }, [allLoading]);

  const selectAll = () => {
    setSelectedMember('BTS');
    if (!allLoading && all) {
      setPosts(all.seeAllMemberFeeds);
    }
  };

  const selectMember = (member) => {
    setSelectedMember(member.username);
    setPosts(member.posts);
  };

  return (
    <MemberPanelPresenter
      loading={loading}
      data={data}
      selectAll={selectAll}
      selectMember={selectMember}
      selectedMember={selectedMember}
    />
  );
};

export default MemberPanelContainer;
