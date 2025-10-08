const { createServer } = require('http');
const next = require('next');

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

// Use PORT from environment variable or fallback to 3000
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`Next.js server running on port ${port}`);
  });
});
