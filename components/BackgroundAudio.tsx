"use client"

import { useEffect, useRef } from "react"

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.45
    audio.defaultMuted = false

    const tryPlay = async () => {
      try {
        await audio.play()
      } catch {
        // Silent fallback: browsers may require user interaction for autoplay.
      }
    }

    const resumeOnInteraction = () => {
      if (audio.paused) {
        void tryPlay()
      }
    }

    const resumeOnVisibility = () => {
      if (document.visibilityState === "visible" && audio.paused) {
        void tryPlay()
      }
    }

    void tryPlay()

    window.addEventListener("pointerdown", resumeOnInteraction, { passive: true })
    window.addEventListener("keydown", resumeOnInteraction)
    document.addEventListener("visibilitychange", resumeOnVisibility)

    return () => {
      window.removeEventListener("pointerdown", resumeOnInteraction)
      window.removeEventListener("keydown", resumeOnInteraction)
      document.removeEventListener("visibilitychange", resumeOnVisibility)
    }
  }, [])

  return (
    <audio ref={audioRef} loop preload="auto">
      <source src="/audio/wpaudiodree.mpeg" type="audio/mpeg" />
    </audio>
  )
}
