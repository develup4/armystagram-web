import React, { useState } from 'react';
//import { useQuery } from 'react-apollo-hooks';
//import { GET_MEMBERS, SEE_ALL_MEMBER_FEEDS } from './MemberPanelQueries';
import UploadPanelPresenter from './UploadPanelPresenter';

const UploadPanelContainer = ({ isLogin }) => {
  const [hashtags, setHashtags] = useState([]);

  const addHashtag = (hashtag) => {
    setHashtags([...hashtags, hashtag.item.char]);
  };

  return (
    <UploadPanelPresenter
      isLogin={isLogin}
      hashtags={hashtags}
      addHashtag={addHashtag}
    />
  );
};

export default UploadPanelContainer;
