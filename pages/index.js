import Head from 'next/head';
import { Button } from '@material-ui/core';

const Index = () => (
  <div>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is the description of the Index page" />
    </Head>

    <p>Content on Index page</p>
    <Button variant="contained">Hello!</Button>
  </div>
);

export default Index;
