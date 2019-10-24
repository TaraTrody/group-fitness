// import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavBar>
      <FlexContainer>
        <Logo>Group Fitness Instructors</Logo>
      </FlexContainer>
    </NavBar>
  );
};

export default Navbar;

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
  padding: 0 1rem;
  height: 5rem;
`;

const Logo = styled.a`
  font-weight: 900;
  font-style: italic;
  color: ${({ theme }) => theme.primary.main};
  font-size: 1.5rem;
`;
