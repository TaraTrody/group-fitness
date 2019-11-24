import Head from 'next/head';
import withAuth from '../lib/withAuth';
import { InstructorSignupForm } from '../components/Signup/index';

const InstructorSignUp = () => (
  <div style={{ padding: '10px 45px', marginTop: '100px', textAlign: 'center' }}>
    <Head>
      <title>Log in to Group Fitness Instructors</title>
      <meta name="description" content="Login page for groupfitnessinstructors.com" />
    </Head>

    <InstructorSignupForm />
  </div>
);

export default withAuth(InstructorSignUp, { logoutRequired: true });
