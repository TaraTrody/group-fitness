import styled from 'styled-components';
import Link from 'next/link';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { SignupButton } from '../Buttons/index';
import { instructorSignup } from './form-props';
import SocialSignup from './social-signup';

const InstructorSignup = () => {
  return (
    <Wrapper>
      <Formik
        initialValues={instructorSignup.initialValues}
        validationSchema={instructorSignup.validationSchema}
        onSubmit={instructorSignup.onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <SocialSignup />
            <div className="input-wrapper">
              <div className="two-column">
                <Field id="firstName" type="text" name="firstName" placeholder="First Name" />

                <Field id="lastName" type="text" name="lastName" placeholder="Last Name" />
                <ErrorMessage name="firstName" />
              </div>
              <div className="single-column">
                <Field id="email" type="text" name="email" placeholder="Email" />
              </div>
              <div className="single-column">
                <Field id="password" type="password" name="password" placeholder="Password" />
              </div>
              <SignupButton />
            </div>
            <Terms>
              By signing up you agree to Group Fitness Instructor's
              <br />
              <Link href="/terms">
                <a target="_blank">Terms of Service</a>
              </Link>{' '}
              and
{' '}
              <Link href="/privacy">
                <a target="_blank">Privacy Policy</a>
              </Link>
              .
            </Terms>
            <MemberNote>
              Already a member?
{' '}
              <Link href="/login">
                <a> Login.</a>
              </Link>
            </MemberNote>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
export default InstructorSignup;

const Wrapper = styled.div`
  display: flex;
  width: 340px;
  justify-content: center;

  .input-wrapper {
    text-align: center;
    
  }
  .two-column {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
  }
  .single-column {
   margin-top: 20px;
   
  }
 
  input[name="email"] {
    width: 100%;
  }
  input[name="password"] {
    width: 100%;
  }

  input[name="firstName"] {
    
    width: 48%;
  }
  input[name="lastName"] {
    margin-right: 5px;
    width: 48%;
  }
  input {
    padding: 1rem 0.5rem;
    height: 26px;
    font-size: 0.7rem;
    border-radius: 2.5px;
    border: 0.5px solid #B3B8B8;
    // margin-right: 5px;
    font-size: .8rem;
  }
  input:focus {
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 0 3px rgba(255, 140, 51, 0.2);
    outline: none;
    }
  }

`;

const Terms = styled.div`
  margin-top: 10px;
  font-size: 0.8rem;
  color: #b4b8b8;

  a {
    color: #b4b8b8;
  }
`;

const MemberNote = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #393b41;

  a {
    font-weight: bold;
    color: #393b41;
  }
`;
