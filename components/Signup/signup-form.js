import styled from 'styled-components';
import { useFormik } from 'formik';

import FacebookButton from '../Buttons/facebook-button';
import GoogleButton from '../Buttons/google-button';

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <SocialWrapper>
          <FacebookButton />
          <GoogleButton />
          <p style={{ margin: '35px' }}>
            <span style={{ color: '#B3B8B8' }}>or</span>
          </p>
        </SocialWrapper>
        <InputWrapper>
          <FieldWrapper>
            <input
              className="name"
              style={{ marginRight: '5px' }}
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              placeholder="First Name"
            />
          </FieldWrapper>
          <FieldWrapper>
            <input
              style={{ marginLeft: '5px' }}
              className="name"
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              placeholder="Last Name"
            />
          </FieldWrapper>
        </InputWrapper>
      </form>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: center;


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
  }
`;



const SocialWrapper = styled.div`
  margin-top: 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  // display: flex;
  // flex-wrap: wrap;

 

`;

const FieldWrapper = styled.div`
  padding: 8px;
`;


export default SignUpForm;
