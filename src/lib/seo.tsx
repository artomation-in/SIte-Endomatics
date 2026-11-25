import React, { useEffect } from 'react';

const SITE_URL = 'https://endomatics.com';

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: object | object[];
}

export interface RenderedHead {
  title: string;
  description: string;
  path: string;
  jsonLd?: object | object[];
}

let ssrHead: RenderedHead | null = null;

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(jsonLd: object | object[]) {
  let el = document.getElementById('route-jsonld');
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('id', 'route-jsonld');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(jsonLd);
}

export function applyHead(head: RenderedHead) {
  const url = `${SITE_URL}${head.path === '/' ? '/' : head.path}`;
  document.title = head.title;
  upsertMeta('name', 'description', head.description);
  upsertMeta('property', 'og:title', head.title);
  upsertMeta('property', 'og:description', head.description);
  upsertMeta('property', 'og:url', url);
  upsertMeta('name', 'twitter:title', head.title);
  upsertMeta('name', 'twitter:description', head.description);
  upsertLink('canonical', url);
  upsertLink('alternate', url, 'en-IN');
  upsertLink('alternate', url, 'x-default');
  if (head.jsonLd) {
    upsertJsonLd(head.jsonLd);
  }
}

export function getSsrHead(): RenderedHead | null {
  const head = ssrHead;
  ssrHead = null;
  return head;
}

export function Seo({ title, description, path, jsonLd }: SeoProps) {
  if (typeof document === 'undefined') {
    ssrHead = { title, description, path, jsonLd };
    return null;
  }
  useEffect(() => {
    applyHead({ title, description, path, jsonLd });
  }, [title, description, path, jsonLd]);
  return null;
}
