import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterPresenter from './FilterPresenter';

const FilterContainer = ({ isLogin }) => {
  const filterNames = [
    '방탄소년단 피드',
    '아미 피드',
    '내 피드',
    '팔로워 피드',
  ];

  const filterEnabled = isLogin
    ? [false, false, false, false]
    : [false, false, true, true];

  const [filterState, setFilterState] = useState([
    true,
    true,
    isLogin === true,
    isLogin === true,
  ]);

  const updateByFilter = () => {
    console.log('update');
  };

  return (
    <FilterPresenter
      isLogin={isLogin}
      filterNames={filterNames}
      filterState={filterState}
      filterEnabled={filterEnabled}
      setFilterState={setFilterState}
      updateByFilter={updateByFilter}
    />
  );
};

FilterContainer.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

// todo : filter가 모두 풀리면?
// 내 피드, 팔로워 체크시 토스트?
// todo : 로그인 완료시 체크4개
export default FilterContainer;
