import styled from 'styled-components';
import Link from 'next/link';

const GoogleButton = () => {
  return (
    <Link href="/">
      <Button style={{ cursor: 'pointer' }}>
        <span>Sign Up with Google</span>
      </Button>
    </Link>
  );
};

export default GoogleButton;

const Button = styled.a`
  
  background: url("/icons8-google.svg") no-repeat 11% 50% ;
  box-shadow: 0 2px 8px 0 #ccc;
  margin-top: 20px;
  padding: 10px 69px 8px;
  color: #FF8C33';
  border-radius: 2px;
  height: 40px;
  font-size: 1rem;
  vertical-align: middle;
  text-align: center; 
  
  
`;
