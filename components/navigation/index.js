/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import Navbar from './Navbar';

const Navigation = ({ user }) => {
  const [navbarOpen, setNavBar] = useState(false);

  const handleNavbar = () => {
    setNavBar(!navbarOpen);
  };

  // eslint-disable-next-line prettier/prettier
  return (
    <Navbar
      navbarState={navbarOpen}
      handleNavbar={handleNavbar}
    />
  );
};

export default Navigation;

Navigation.propTypes = {
  user: propTypes.shape({
    avatarUrl: propTypes.string,
    displayName: propTypes.string,
  }),
};

Navigation.defaultProps = {
  user: null,
};
