import Router from 'next/router';
import SignupSchema from './validation';

const instructorSignup = {
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  validationSchema: SignupSchema,
  onSubmit: (values) => {
    console.log(values);
    fetch('/api/user/instructor-signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).catch((err) => console.log(err));
    Router.push('/');
  },
};

export { instructorSignup };
