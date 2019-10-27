import Head from 'next/head';
import Navigation from '../components/navigation/index';

const Index = () => (
  <div style={{ padding: '10px 45px', marginTop: '100px' }}>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is a description of the Index page" />
    </Head>
    <Navigation />
    <p>Content on Index page</p>
    <button type="button">its a button</button>
    <p>more content</p>
  </div>
);

export default Index;
