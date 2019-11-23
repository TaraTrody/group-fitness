import styled from 'styled-components';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic';

const SignupForm = ({ router }) => {
  let Form = '';

  if (router.pathname === '/instructor-signup') {
    Form = dynamic(() => import('./instructor-signup'));
  } else {
    Form = dynamic(() => import('./studio-signup'));
  }

  return (
    <Container>
      <LeftColumn />
      <RightColumn>
        <Form />
      </RightColumn>
    </Container>
  );
};

export default withRouter(SignupForm);

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
