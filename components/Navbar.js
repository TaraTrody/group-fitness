import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavBar>
      <FlexContainer>
        <Logo>Group Fitness Instructors</Logo>

        <NavLinks>
          <Link href="https://google.com">
            <NavItem>Join as Instructor</NavItem>
          </Link>

          <Link href="/">
            <NavItem>FAQ</NavItem>
          </Link>

          <Link href="/">
            <NavItem>Log In</NavItem>
          </Link>

          <Link href="/">
            <Button>Sign up</Button>
          </Link>
        </NavLinks>
      </FlexContainer>
    </NavBar>
  );
};

export default Navbar;

const mainText = ({ theme }) => theme.text.main;
const primaryColor = ({ theme }) => theme.primary.main;
const contrastText = ({ theme }) => theme.text.contrast;

const NavBar = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  position: fixed;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 5rem;
`;

const Logo = styled.a`
  font-weight: 900;
  font-style: italic;
  color: ${primaryColor};
  font-size: 1.5rem;
`;
const Button = styled.a`
  color: ${contrastText};
  background-color: ${primaryColor};
  padding: 0.5rem 1.5rem;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(5, 7, 15, 0.2);
  text-transform: uppercase;
  margin-right: 1rem;
`;
const NavLinks = styled.div`
  display: flex;
  padding: 1.5rem;
  align-items: center;
`;
const NavItem = styled.a`
  padding: 1rem;
  color: ${mainText};

  &:hover {
    color: ${primaryColor};
  }
`;
