/** Strip document/body wrappers when editors paste full page fragments. */
export function stripBodyWrapper(html: string): string {
  const trimmed = html.trim();
  const bodyMatch = trimmed.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) return bodyMatch[1].trim();

  const htmlMatch = trimmed.match(/<html[^>]*>([\s\S]*)<\/html>/i);
  if (htmlMatch) return stripBodyWrapper(htmlMatch[1]);

  return trimmed;
}

export type ParsedCustomToolMarkup = {
  html: string;
  css: string;
  js: string;
};

/**
 * Parses tool markup from Payload. Inline <style> and <script> in the HTML
 * field are extracted; dedicated CSS/JS fields are appended.
 */
export function parseCustomToolMarkup(
  htmlInput: string,
  cssInput?: string | null,
  jsInput?: string | null,
): ParsedCustomToolMarkup {
  let remaining = stripBodyWrapper(htmlInput || '');
  const styles: string[] = [];
  const scripts: string[] = [];

  if (cssInput?.trim()) styles.push(cssInput.trim());
  if (jsInput?.trim()) scripts.push(jsInput.trim());

  remaining = remaining.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (_, css: string) => {
    styles.push(css.trim());
    return '';
  });

  remaining = remaining.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, (_, js: string) => {
    scripts.push(js.trim());
    return '';
  });

  return {
    html: remaining.trim(),
    css: styles.join('\n\n'),
    js: scripts.join('\n\n'),
  };
}
