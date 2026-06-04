# Site media assets

Place images, videos, and other static files here. Next.js serves everything under `public/` from the site root.

## Folders

| Folder    | Use for                          |
| --------- | -------------------------------- |
| `images/` | Photos, logos, backgrounds, icons |
| `videos/` | MP4, WebM, and other video files |

## Usage in code

Reference files with a path starting at `/assets/`:

```ts
// In a section component CONTENT constant
image: "/assets/images/results/pimberly.jpg"

// In JSX
<img src="/assets/images/logo.svg" alt="" />
```

Example: a file at `public/assets/images/hero-bg.jpg` is available at `/assets/images/hero-bg.jpg`.

**About section background:** place `about-cheapoweb.mp4` in `public/assets/videos/`.
