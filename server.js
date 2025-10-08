const { createServer } = require('http');
const next = require('next');

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(3000, () => {
    console.log('Next.js server running on port 3000');
  });
});
