"use client"

import { useEffect, useState } from "react"

export default function HeroVideo() {
  const [scrollY, setScrollY] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(1)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    const onResize = () => setViewportHeight(window.innerHeight || 1)

    onResize()
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const introProgress = Math.min(scrollY / Math.max(viewportHeight, 1), 1)
  const translateY = -160 + introProgress * 160 - scrollY * 0.35
  const opacity = Math.max(1 - introProgress * 1.1, 0)

  return (
    <section className="relative h-screen min-h-[620px] overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0 gpu-video"
          src="https://www.youtube.com/embed/gdsUKphmB3Y?autoplay=1&mute=1&controls=0&loop=1&playlist=gdsUKphmB3Y&playsinline=1&modestbranding=1&rel=0&showinfo=0&enablejsapi=1"
          title="Party with Snoop Dogg hero video"
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-black/15" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
        <div
          className="space-heading flex w-full max-w-6xl items-center justify-between gap-3 sm:gap-6 lg:gap-10"
          style={{
            opacity,
            transform: `translate3d(0, ${translateY}px, 0)`,
            willChange: "transform, opacity",
          }}
        >
          <span>Defining</span>
          <span>OG</span>
          <span>Since</span>
          <span>1971</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-black" />
    </section>
  )
}
