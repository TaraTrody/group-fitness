import styled from 'styled-components';
import SignUpForm from './signup-form'

const InstructorSignupForm = () => {
  return (
    <Container>
      <LeftColumn>

      </LeftColumn>
      <RightColumn>
        <SignUpForm />
      </RightColumn>
    </Container>
  )
};

export default InstructorSignupForm;

const Container = styled.div`
  width: 640px;
  height: 552px;
  background: #fff;
  margin: 0 auto;
  display: flex;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  

  color: ${({ theme }) => theme.text.main};

`;

const LeftColumn = styled.div`
  background: ${({ theme }) => theme.primary.main};
  width: 40%;
`;

const RightColumn = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;