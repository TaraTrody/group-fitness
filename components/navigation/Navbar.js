/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
import Link from 'next/link';
import styled from 'styled-components';
import propTypes, { bool, func } from 'prop-types'
import { useSpring, animated, config } from 'react-spring'

import BurgerMenu from './Burger'
import CollapseMenu from './CollapseMenu'
import Button from './Button'


const Navbar = (props) => {
  const { navbarState, handleNavbar, user } = props;

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 10px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 500,
    config: config.stiff,
  });
  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BurgerWrapper>
              <BurgerMenu
                navbarState={navbarState}
                handleNavbar={handleNavbar}
              />
            </BurgerWrapper>
            <Logo>Group Fitness Instructors</Logo>
          </div>
          <Spacer />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {(!user) ? (
              <>
                <NavLinks style={linkAnimation}>
                  <li>
                    <Link href="https://google.com">
                      <NavItem>Join as Instructor</NavItem>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <NavItem>FAQ</NavItem>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <NavItem>Log In</NavItem>
                    </Link>
                  </li>
                </NavLinks>
                <Button />
              </>
            ) : (
                <DisplayName>
                  Hi
                  {' '}
                  {user.displayName}
                </DisplayName>
              )}
          </div>


        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={navbarState}
        handleNavbar={handleNavbar}
      />
    </>
  );
};

Navbar.propTypes = {
  navbarState: bool.isRequired,
  handleNavbar: func.isRequired,
  user: propTypes.shape({
    displayName: propTypes.string.isRequired
  })
}

Navbar.defaultProps = {
  user: null
}

export default Navbar;

const mainText = ({ theme }) => theme.text.main;
const primaryColor = ({ theme }) => theme.primary.main;

const NavBar = styled(animated.header)`
          width: 100%;
          
          top: 0;
          left: 0;  
          background-color: #fff;
          position: fixed;
          border-bottom: 1px solid #e9eaea;
          min-width: 23.4rem;
        `;

const FlexContainer = styled.div`
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          height: 3rem;
          
          @media (min-width: 51.25rem) {
            height: 5rem;
          }
        `;

const Logo = styled.a`
          font-weight: 900;
          font-style: italic;
          color: ${primaryColor};
          font-size: 1rem;
        
    
          @media (min-width: 51.25rem) {
            font-size:1.5rem;
          }
`;

const NavLinks = styled(animated.ul)`
        display: flex;
        padding: 1.5rem;
        align-items: center;
        & li {
          list-style: none;
        }
      
      @media (max-width: 51.25rem) {
        display: none;
      }
      
    `;
const NavItem = styled.a`
        padding: 1rem;
  color: ${mainText};
      
  &:hover {
          color: ${primaryColor};
      }
    `;

const BurgerWrapper = styled.div`
      margin: auto 0;
      padding-right: 2rem;
    
  @media (min-width: 51.25rem) {
          display: none;
          
      }
    `;

const Spacer = styled.div`
      flex: 1
`;

const DisplayName = styled.h4`
      color: ${mainText};
`;
