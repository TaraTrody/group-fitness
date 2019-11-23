import styled from 'styled-components';
import { FacebookButton, GoogleButton } from '../Buttons/index';

const SocialSignup = () => {
  return (
    <SocialWrapper>
      <FacebookButton />
      <GoogleButton />
      <p style={{ margin: '20px' }}>
        <span style={{ color: '#B3B8B8' }}>or</span>
      </p>
    </SocialWrapper>
  );
};
export default SocialSignup;

const SocialWrapper = styled.div`
  margin-top: 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #b3b8b8;
    line-height: 0.1em;
    margin: 10px 0 20px;
  }
  p span {
    background: #fff;
    padding: 0 10px;
    color: #b3b8b8;
    font-size: 0.8rem;
  }
`;
