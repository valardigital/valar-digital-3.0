'use client';

import { useEffect, useId, useMemo, useRef } from 'react';
import { parseCustomToolMarkup } from '@/utilities/parseCustomToolMarkup';

type CustomToolContentProps = {
  html: string;
  css?: string | null;
  js?: string | null;
};

export default function CustomToolContent({ html, css, js }: CustomToolContentProps) {
  const scopeId = useId().replace(/:/g, '');
  const htmlHostRef = useRef<HTMLDivElement>(null);
  const parsed = useMemo(() => parseCustomToolMarkup(html, css, js), [html, css, js]);

  useEffect(() => {
    const host = htmlHostRef.current;
    if (!host || !parsed.js) return;

    const script = document.createElement('script');
    script.setAttribute('data-custom-tool-script', scopeId);
    script.textContent = parsed.js;
    host.appendChild(script);

    return () => {
      host.querySelectorAll(`script[data-custom-tool-script="${scopeId}"]`).forEach((el) => el.remove());
    };
  }, [parsed.js, parsed.html, scopeId]);

  if (!parsed.html && !parsed.css) {
    return (
      <div className="container mx-auto px-4 py-16 text-center text-text-light">
        No tool content has been added yet. Add HTML in the Payload CMS tool editor.
      </div>
    );
  }

  return (
    <div className="custom-tool-embed w-full bg-white" data-custom-tool={scopeId}>
      {parsed.css ? (
        <style
          data-custom-tool-styles={scopeId}
          dangerouslySetInnerHTML={{ __html: parsed.css }}
        />
      ) : null}
      <div
        ref={htmlHostRef}
        className="custom-tool-embed__html"
        dangerouslySetInnerHTML={{ __html: parsed.html }}
      />
    </div>
  );
}
