import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';
import Theme from './Styles/Theme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
import Feed from './Routes/Feed';
import Search from './Routes/Search';
import Message from './Routes/Message';
import Popular from './Routes/Popular';
import Likes from './Routes/Likes';
import Auth from './Routes/Auth';
import Profile from './Routes/Profile';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <HashRouter>
          <>
            <Header />
            <Wrapper>
              <Switch>
                <Route exact path='/' component={Feed} />
                <Route path='/search' component={Search} />
                <Route path='/message' component={Message} />
                <Route path='/popular' component={Popular} />
                <Route path='/likes' component={Likes} />
                <Route path='/auth' component={Auth} />
                <Route path='/profile' component={Profile} />
                <Redirect from='*' to='/' />
              </Switch>
            </Wrapper>
          </>
        </HashRouter>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </>
    </ThemeProvider>
  );
};
