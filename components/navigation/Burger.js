import styled from 'styled-components';
import { bool, func } from 'prop-types';

const BurgerMenu = (props) => {
  const { handleNavbar, navbarState } = props;
  return (
    <Wrapper onClick={handleNavbar}>
      <div className={navbarState ? 'open' : ''}>
        <span />
        <span />
        <span />
      </div>
    </Wrapper>
  );
};

BurgerMenu.propTypes = {
  navbarState: bool.isRequired,
  handleNavbar: func.isRequired,
};

export default BurgerMenu;

const Wrapper = styled.div`
  position: relative;

  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & span {
    background: ${({ theme }) => theme.primary.main};
    display: block;
    position: relative;
    width: 1.5rem;
    height: 0.2rem;
    margin-bottom: 0.4rem;
    border-radius: 4px;
    transition: all ease-in-out 0.2s;
  }
  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -5px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 14px;
  }
`;
