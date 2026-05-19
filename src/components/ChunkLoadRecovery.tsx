'use client';

import { useEffect } from 'react';

const STORAGE_KEY = 'valar-chunk-reload';

function isChunkLoadFailure(message: string): boolean {
  return (
    message.includes('ChunkLoadError') ||
    message.includes('Loading chunk') ||
    message.includes('Failed to fetch dynamically imported module') ||
    (message.includes('Failed to load') && message.includes('_next/static/chunks'))
  );
}

function reloadOnce(): void {
  try {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    sessionStorage.setItem(STORAGE_KEY, '1');
    window.location.reload();
  } catch {
    window.location.reload();
  }
}

function messageFromReason(reason: unknown): string {
  if (reason instanceof Error) return reason.message;
  if (typeof reason === 'string') return reason;
  return String(reason ?? '');
}

/**
 * After a deploy, cached HTML may reference removed JS chunks (404 → ChunkLoadError).
 * Reload once so the browser picks up the current build.
 */
export function ChunkLoadRecovery() {
  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      const message = event.message || messageFromReason(event.error);
      if (isChunkLoadFailure(message)) reloadOnce();
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      if (isChunkLoadFailure(messageFromReason(event.reason))) reloadOnce();
    };

    const onLoad = () => {
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection);
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return null;
}

/** Inline script — runs before React hydrates. */
export const chunkLoadRecoveryScript = `
(function () {
  var key = '${STORAGE_KEY}';
  function shouldReload(msg) {
    if (!msg) return false;
    return (
      msg.indexOf('ChunkLoadError') !== -1 ||
      msg.indexOf('Loading chunk') !== -1 ||
      msg.indexOf('Failed to fetch dynamically imported module') !== -1 ||
      (msg.indexOf('Failed to load') !== -1 && msg.indexOf('_next/static/chunks') !== -1)
    );
  }
  function reloadOnce() {
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, '1');
      location.reload();
    } catch (e) {
      location.reload();
    }
  }
  window.addEventListener('error', function (e) {
    if (shouldReload(e.message || (e.error && e.error.message))) reloadOnce();
  });
  window.addEventListener('unhandledrejection', function (e) {
    var msg = e.reason && (e.reason.message || String(e.reason));
    if (shouldReload(msg)) reloadOnce();
  });
  window.addEventListener('load', function () {
    try { sessionStorage.removeItem(key); } catch (e) {}
  });
})();
`;
