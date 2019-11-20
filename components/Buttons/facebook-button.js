import styled from 'styled-components';
import Link from 'next/link';

const FacebookButton = () => {
  return (
    <Link href="/">
      <Button>
        <span>Sign Up with Facebook</span>
      </Button>
    </Link>
  );
};

export default FacebookButton;

const Button = styled.a`
  

background-color: #3b5998;np
background-size: 20px 20px;
  border-color: #324b80;
  padding: 10px 60px 8px;
  color: #fff;
  border-radius: 2px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
`;
