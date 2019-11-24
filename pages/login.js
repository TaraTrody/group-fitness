import Head from 'next/head';
import withAuth from '../lib/withAuth';
// import InstructorSignup from '../components/Signup';

const Login = () => (
  <div style={{ padding: '10px 45px', marginTop: '100px' }}>
    <Head>
      <title>Log in to Group Fitness Instructors</title>
      <meta name="description" content="Login page for groupfitnessinstructors.com" />
    </Head>
    <br />
    <p style={{ margin: '45px auto', fontSize: '44px', fontWeight: '400' }}>Log in</p>
    <p>You’ll be logged in for 14 days unless you log out manually.</p>
    <br />
    {/* <InstructorSignup /> */}
  </div>
);

export default withAuth(Login, { logoutRequired: true });
