import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import helmet from 'helmet';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import AppServerModule from './src/main.server';

type SourceList = string[];
function getTrustedSources(): SourceList {
  // Example trusted sources, normally this could be dynamic or from a config file
  return ['https://trustedcdn.com', 'https://api.trustedsource.org'];
}

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap: AppServerModule,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
  
}
export default function contentSecurityPolicy(nonce: string) {
  // Get dynamic list of trusted sources
  const trustedSources = getTrustedSources();

  // Return the CSP middleware configured with directives
  return helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [...trustedSources], 
      styleSrc: [
        `'nonce-${nonce}'`, 
        'https://fonts.googleapis.com',
        'https://cdn.jsdelivr.net', 
        ...trustedSources  
      ],
      scriptSrc: [
        `'nonce-${nonce}'`, 
        'https://apis.google.com', 
        ...trustedSources 
      ],
      imageSrc:[
        `'nonce-${nonce}'`,
        'https://apis.google.com',
        ...trustedSources
      ],
      imagengSrc:[
        `'nonce-${nonce}'`,
        'https://fakestoreapi.com',
        ...trustedSources
      ]
    }
  });
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
