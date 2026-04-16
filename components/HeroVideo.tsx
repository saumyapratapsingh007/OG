"use client"

import { useEffect, useRef, useState } from "react"

export default function HeroVideo() {
  const [scrollY, setScrollY] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(1)
  const videoRef = useRef<HTMLVideoElement>(null)

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
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center gpu-video"
        src="/video/NewHeroVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 22
          }
        }}
        aria-label="Party with Snoop Dogg hero video"
      />
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
