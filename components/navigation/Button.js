import styled from 'styled-components';
import Link from 'next/link';

const SignupButton = () => (
  <Link href="/">
    <Button>Sign up</Button>
  </Link>
);
export default SignupButton;

const primaryColor = ({ theme }) => theme.primary.main;
const contrastText = ({ theme }) => theme.text.contrast;

const Button = styled.a`
  color: ${contrastText};
  background-color: ${primaryColor};
  height: 1.8rem;
  padding: 0.2rem 0.8rem;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(5, 7, 15, 0.2);
  text-transform: uppercase;
  margin-right: 1rem;
  cursor: pointer;

  @media (min-width: 51.25rem) {
    color: ${contrastText};
    background-color: ${primaryColor};
    padding: 0.5rem 1.5rem;
    height: 2.5rem;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(5, 7, 15, 0.2);
    text-transform: uppercase;
    margin-right: 1rem;
  }
`;
