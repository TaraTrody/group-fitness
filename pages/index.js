/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Head from 'next/head';
import propTypes from 'prop-types';

import withAuth from '../lib/withAuth';

class Index extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div style={{ padding: '10px 45px', marginTop: '100px' }}>
        <Head>
          <title>Index page</title>
          <meta name="description" content="This is a description of the Index page" />
        </Head>
        <p>Dashboard</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
}

Index.propTypes = {
  user: propTypes.shape({
    email: propTypes.string,
  }),
};

Index.defaultProps = {
  user: null,
};

export default withAuth(Index);
