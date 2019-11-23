import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Name should be between 2 and 30 characters')
    .max(30, 'Name should be between 2 and 30 characters')
    .required('Please enter first Name'),
  lastName: Yup.string()
    .min(2, 'Name should be between 2 and 30 characters')
    .max(30, 'Name should be between 2 and 30 characters')
    .required('Please enter last name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter valid email address'),
  password: Yup.string()
    .required('Please enter valid password')
    .min(8, 'Password is too short -- should be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least 1 lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least 1 uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least 1 number'),
});

export default SignupSchema;
