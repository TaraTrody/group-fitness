import styled from 'styled-components';
import Link from 'next/link';

const FacebookButton = () => {
  return (
    <Link href="/">
      <Button>Sign Up with Facebook</Button>
    </Link>
  );
};

export default FacebookButton;

const Button = styled.a`
  background-color: #3b5998;
  border-color: #324b80;
  padding: 10px 60px 8px;
  color: #fff;
  border-radius: 2px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
`;