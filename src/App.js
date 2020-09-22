import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';
import Theme from './Styles/Theme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import Auth from './Routes/Auth';
import Feed from './Routes/Feed';
import Message from './Routes/Message';
import Search from './Routes/Search';
import Profile from './Routes/Profile';
import Header from './Components/Header';

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
                <Route path='/auth' component={Auth} />
                <Route path='/message' component={Message} />
                <Route path='/search' component={Search} />
                <Route path='/:username' component={Profile} />
                <Redirect from='*' to='/' />
              </Switch>
              <Footer />
            </Wrapper>
          </>
        </HashRouter>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </>
    </ThemeProvider>
  );
};
