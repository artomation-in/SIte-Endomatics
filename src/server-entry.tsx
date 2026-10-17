import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { getSsrHead, RenderedHead } from './lib/seo';

export interface SsrResult {
  html: string;
  head: RenderedHead;
}

export function render(url: string): SsrResult {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
  const head = getSsrHead();
  return { html, head };
}
