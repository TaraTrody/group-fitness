/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Navbar from './Navbar';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
    };
  }

  handleNavbar = () => {
    this.setState((prevState) => ({ navbarOpen: !prevState.navbarOpen }));
  };

  render() {
    const { navbarOpen } = this.state;
    // eslint-disable-next-line prettier/prettier
    return (
      <Navbar
        navbarState={navbarOpen}
        handleNavbar={this.handleNavbar}
      />
      );
  }
}

export default Navigation;
