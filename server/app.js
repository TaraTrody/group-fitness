const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

const PORT = process.env.PORT || 5000;
const PORT_URL = `https://localhost:5000`;

app.prepare().then(() => {
  const server = express();
  server.get('/', (req, res) => {
    const user = { email: 'team@group-fitness.com' };
    app.render(req, res, '/', { user });
  });

  server.get('*', (req, res) => {
    handle(req, res);
  });
  server.listen(PORT, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`Ready on ${PORT_URL}`);
  });
});
