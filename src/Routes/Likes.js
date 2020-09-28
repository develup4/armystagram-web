import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'rl-react-helmet';
import { useQuery } from 'react-apollo-hooks';
import { IS_LOGIN } from '../Resources/SharedQueries/SharedQueries';

export default withRouter(({ history }) => {
  const {
    data: { isLogin },
  } = useQuery(IS_LOGIN);

  if (!isLogin) {
    history.push('/auth');
  }

  return (
    <>
      <Helmet>
        <title>Likes | Armystagram</title>
      </Helmet>
      <h1>Likes</h1>
    </>
  );
});
