import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import { Link, withRouter } from 'react-router-dom';
import { Input, useInput } from './Input';
import {
  MessageIcon,
  CompassIcon,
  HeartEmptyIcon,
  ProfileIcon,
} from '../Resources/Icons/Icons';
import logoImage from '../Resources/Images/Logo.png';

const IS_LOGIN = gql`
  {
    isLoggedIn @client
  }
`;

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${(props) => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: auto;
  text-align: center;
  width: 70%;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Logo = styled.img`
  src: url(${(props) => props.src});
  width: 120px;
  height: auto;
`;

export default withRouter(({ history }) => {
  const { isLogin } = useQuery(IS_LOGIN);
  const searchInput = useInput('');
  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${searchInput.value}`);
  };

  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to='/'>
            <Logo src={logoImage} />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSearchSubmit}>
            <SearchInput
              value={searchInput.value}
              onChange={searchInput.onChange}
              placeholder='❣  검색'
            />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to='/message'>
            <MessageIcon />
          </HeaderLink>
          <HeaderLink to='/popular'>
            <CompassIcon />
          </HeaderLink>
          <HeaderLink to='/likes'>
            <HeartEmptyIcon />
          </HeaderLink>
          {isLogin ? (
            <HeaderLink to='/profile'>
              <ProfileIcon />
            </HeaderLink>
          ) : (
            <HeaderLink to='/auth'>
              <ProfileIcon />
            </HeaderLink>
          )}
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
