/**
 * Build a URL for a file under `public/assets/`.
 * @param path Path relative to `public/assets/` (e.g. `images/logo.png`)
 */
export function assetUrl(path: string): string {
  const normalized = path.replace(/^\/+/, "");
  return `/assets/${normalized}`;
}
