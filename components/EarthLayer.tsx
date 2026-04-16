"use client"

import dynamic from "next/dynamic"
import Image from "next/image"

const EarthBackground = dynamic(() => import("./EarthBackground"), {
  ssr: false,
  loading: () => (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-10">
      <Image
        src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=1200&q=60"
        alt=""
        fill
        className="object-cover"
      />
    </div>
  ),
})

export default function EarthLayer({ scrollProgress }: { scrollProgress: number }) {
  return <EarthBackground scrollProgress={scrollProgress} />
}
