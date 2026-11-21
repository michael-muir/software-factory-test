import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const files = new Map([
  ['/', 'index.html'],
  ['/index.html', 'index.html'],
  ['/app.js', 'app.js'],
  ['/notes.js', 'notes.js'],
  ['/styles.css', 'styles.css'],
]);
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
};

const server = createServer(async (request, response) => {
  if (request.method !== 'GET') {
    response.writeHead(405, { Allow: 'GET' }).end('Method not allowed');
    return;
  }

  const file = files.get(new URL(request.url, 'http://localhost').pathname);
  if (!file) {
    response.writeHead(404).end('Not found');
    return;
  }

  try {
    const body = await readFile(join(root, file));
    response.writeHead(200, { 'Content-Type': contentTypes[extname(file)] });
    response.end(body);
  } catch {
    response.writeHead(500).end('Unable to read requested file');
  }
});

const port = Number(process.env.PORT) || 3456;
server.on('error', error => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Stop the other program or set PORT to use another port.`);
    process.exit(1);
  }
  throw error;
});
server.listen(port, () => console.log(`Post-it Board is running at http://localhost:${port}`));
