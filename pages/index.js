/* eslint-disable react/jsx-one-expression-per-line */
import Head from 'next/head';
import propTypes from 'prop-types';

const Index = ({ user }) => (
  <div style={{ padding: '10px 45px', marginTop: '100px' }}>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is a description of the Index page" />
    </Head>

    <p>Email: {user.email}</p>
  </div>
);

Index.getInitialProps = async (ctx) => ({ user: ctx.query.user });

Index.propTypes = {
  user: propTypes.shape({
    email: propTypes.string.isRequired,
  }),
};

Index.defaultProps = {
  user: null,
};

export default Index;
