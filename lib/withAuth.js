/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import propTypes from 'prop-types';
import Router from 'next/router';

let globalUser = null;

function withAuth(BaseComponent, { loginRequired = true, logoutRequired = false } = {}) {
  class App extends React.Component {
    static propTypes = {
      user: propTypes.shape({
        firstName: propTypes.string,
        email: propTypes.string.isRequired,
      }),
      isFromServer: propTypes.bool.isRequired,
    };

    static defaultProps = {
      user: null,
    };

    componentDidMount() {
      const { user, isFromServer } = this.props;

      if (isFromServer) {
        globalUser = user;
      }
      if (loginRequired && !logoutRequired && !user) {
        Router.push('/login');
        return;
      }

      if (logoutRequired && user) {
        Router.push('/');
      }
    }

    static async getInitialProps(ctx) {
      const isFromServer = !!ctx.req;

      const user = ctx.req ? ctx.req.user && ctx.req.user.toObject() : globalUser;
      console.log(user);

      if (isFromServer && user) {
        user._id = user._id.toString();
      }
      const props = { user, isFromServer };

      if (BaseComponent.getInitialProps) {
        Object.assign(props, await BaseComponent.getInitialProps(ctx));
      }
      return props;
    }

    render() {
      const { user } = this.props;
      if (loginRequired && !logoutRequired && !user) {
        return null;
      }

      if (logoutRequired && user) {
        return null;
      }
      return <BaseComponent {...this.props} />;
    }
  }
  return App;
}

export default withAuth;
