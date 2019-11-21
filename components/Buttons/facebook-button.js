import styled from 'styled-components';
import Link from 'next/link';

const FacebookButton = () => {
  return (
    <>
      <Link href="/login">
        <Button>Sign Up with Facebook</Button>
      </Link>
    </>
  );
};

export default FacebookButton;

const Button = styled.a`
  padding: 10px 60px 8px;
  border-radius: 2.5px;
  background-color: #4c69ba;
  box-shadow: 0 2px 8px 0 #ccc;
  color: #fff;
  position: relative;
  cursor: pointer;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background-color: #4c69ba;
    background: url('/icons8-facebook-f.svg') 26px 7px no-repeat;
  }
`;
