/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import styled from 'styled-components';
import Link from 'next/link';
import { bool, func } from 'prop-types';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { navbarState, handleNavbar } = props;
  const { open } = useSpring({ open: navbarState ? 0 : 1 });

  if (navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <Link href="/">
              <a role="link" onClick={handleNavbar}>
                Join as Instructor
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a role="link" onClick={handleNavbar}>
                FAQ
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a role="link" onClick={handleNavbar}>
                Login
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a role="link" onClick={handleNavbar}>
                Search
              </a>
            </Link>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

CollapseMenu.propTypes = {
  navbarState: bool.isRequired,
  handleNavbar: func.isRequired,
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #fff;
  position: fixed;
  top: 3.2rem;
  left: 0;
  right: 0;
  text-align: left;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1rem;
    line-height: 2;
    color: ${({ theme }) => theme.text.main};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.primary.main};
    }
  }
`;
