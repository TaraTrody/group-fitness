/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const UserDropDown = (props) => {
  const [listOpen, setListOpen] = useState(false);
  const { user } = props;

  const toggleList = () => {
    setListOpen(!listOpen);
  };
  return (
    <DropDownWrapper>
      <DisplayNameWrapper onClick={() => toggleList()}>
        <DisplayName>
          Hi
          {' '}
          {user.firstName}
        </DisplayName>
        <FontAwesomeIcon style={{ marginLeft: '0.5rem' }} icon={faAngleUp} />
      </DisplayNameWrapper>
      {listOpen ? (
        <ListWrapper>
          <DropDownList>
            <li
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
              onClick={() => toggleList()}
            >
              <h4>{user.firstName}</h4>
              <FontAwesomeIcon style={{ marginLeft: '0.5rem' }} icon={faAngleDown} />
            </li>

            <li>
              <Link href="/">
                <a>Account Settings</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>FAQ</a>
              </Link>
            </li>
            <li>
              <Link href="/api/user/logout">
                <a>Log Out</a>
              </Link>
            </li>
          </DropDownList>
        </ListWrapper>
      ) : null}
    </DropDownWrapper>
  );
};

export default UserDropDown;

UserDropDown.propTypes = {
  user: propTypes.shape({
    firstName: propTypes.string.isRequired,
  }).isRequired,
};

const mainText = ({ theme }) => theme.text.main;
const primaryColor = ({ theme }) => theme.primary.main;

const DropDownWrapper = styled.div``;

const DisplayName = styled.h4`
  color: ${mainText};
`;

const DisplayNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ListWrapper = styled.div`
  position: absolute;
  right: 25px;
  top: 30px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  width: 210px;
  padding: 0.875rem 1rem;
`;

const DropDownList = styled.ul`
  list-style: none;
  text-align: right;
  & li a {
    text-decoration: none;
    color: ${mainText};
    &:hover {
      color: ${primaryColor};
    }
  }

  & li {
    padding-bottom: 0.75rem;
  }
  & li h4 {
    color: #48484f;
  }
`;
