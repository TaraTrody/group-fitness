import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';
import propTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const UserDropDown = (user) => {
  return (
    <DropDownWrapper>
      <DisplayName>
        Hi
        {user.displayName}
        <FontAwesome name="angle-down" size="2x" />
      </DisplayName>
      <DropDownList>
        <li>
          <Link href="/">
            <a>{user.displayName}</a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>Account Settings</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Help</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Log Out</a>
          </Link>
        </li>
      </DropDownList>
    </DropDownWrapper>
  );
};

export default UserDropDown;

UserDropDown.propTypes = {
  user: propTypes.shape({
    displayName: propTypes.string.isRequired,
  }).isRequired,
};

const mainText = ({ theme }) => theme.text.main;
const primaryColor = ({ theme }) => theme.primary.main;

const DisplayName = styled.h4`
  color: ${mainText};
`;
