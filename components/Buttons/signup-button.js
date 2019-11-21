import styled from 'styled-components';

const SignupButton = () => <Button>Sign up</Button>;

export default SignupButton;

const Button = styled.button`
  margin-top: 80px;
  padding: 10px 69px 8px;
  background-color: ${({ theme }) => theme.primary.main};
  box-shadow: 0 2px 8px 0 #ccc;
  min-width: 96px;
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
  color: #fff;
  border-radius: 2.5px;
  cursor: pointer;
`;
