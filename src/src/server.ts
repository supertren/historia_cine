import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();

// Serve static files from /browser, but exclude index.html
app.use(
  '/browser',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false, // Don't serve index.html from static middleware
  })
);

// Handle Angular routes by rendering the application.
app.get('*', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  // Check if it's a static file request. If so, let express.static handle it.
  if (req.url.startsWith('/browser/')) {
    next(); // Pass to the next middleware (express.static)
    return;
  }

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

// Start the server if this module is the main entry point.
if (isMainModule(import.meta.url)) {
  let port: number; // Explicitly declare port as a number

  if (process.env['PORT']) {
    port = parseInt(process.env['PORT'], 10); // Parse the port string to a number
  } else {
    port = 4000; // Use the default port as a number
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Node Express server listening on http://0.0.0.0:${port}`);
  });
}

export default app;
