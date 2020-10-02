import React from 'react';
import PropTypes from 'prop-types';
import FilterPresenter from './FilterPresenter';

const FilterContainer = ({
  isLogin,
  setLoading,
  filterState,
  setFilterState,
}) => {
  const filterNames = [
    '모두 보기',
    '인기글 보기',
    '좋아요 보기',
    '팔로워만 보기',
  ];

  const filterDisabled = isLogin
    ? [false, false, false, false]
    : [false, false, true, true];

  const updateByFilter = () => {
    console.log('update');
  };

  return (
    <FilterPresenter
      isLogin={isLogin}
      filterNames={filterNames}
      filterState={filterState}
      setFilterState={setFilterState}
      filterDisabled={filterDisabled}
      updateByFilter={updateByFilter}
    />
  );
};

FilterContainer.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

export default FilterContainer;
