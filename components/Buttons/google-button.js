import styled from 'styled-components';
import Link from 'next/link';

const GoogleButton = () => {
  return (
    <>
      <Link href="/login">
        <Button>Sign Up with Google</Button>
      </Link>
    </>
  );
};

export default GoogleButton;

const Button = styled.a`
  margin-top: 20px;
  padding: 10px 69px 8px;
  box-shadow: 0 2px 8px 0 #ccc;
  border-radius: 2.5px;
  background-color: #fff;
  color: ({theme}) => theme.text.main;
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
    background: url('/icons8-google.svg') 26px 10px no-repeat;
  }
`;
