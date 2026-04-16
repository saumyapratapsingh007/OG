# Party with Snoop Dogg

Premium investor-facing event website built with Next.js App Router, Tailwind CSS, Framer Motion, and a lazy-loaded React Three Fiber Earth background.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes

- The supplied Premiere export is preserved at `public/video/HeroVideo.mp4`.
- The website uses the optimized, audio-free web version at `public/video/HeroVideo.web.mp4`.
- The 3D Earth is dynamically loaded after the first page render and hidden on smaller screens to protect scrolling performance.
- Remote imagery is loaded through `next/image` with configured allowlisted hosts.
