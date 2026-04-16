"use client"

import Image from "next/image"
import { MotionDiv } from "./Motion"

type CityCardProps = {
  city: string
  image: string
  index: number
  overlayImage?: string
}

export default function CityCard({ city, image, index, overlayImage }: CityCardProps) {
  const isPune = city === "Pune"
  const overlayClassName = isPune
    ? "absolute bottom-0 right-3 z-10 h-[80%] w-[40%] translate-y-3 transition-transform duration-500 group-hover:translate-y-0"
    : "absolute bottom-0 right-0 z-10 h-[96%] w-[58%] transition-transform duration-500 group-hover:-translate-y-2 sm:h-[102%] sm:w-[60%]"
  const placeholderClassName = isPune
    ? "snoop-placeholder absolute bottom-12 right-1 z-10 h-[84%] w-[50%] opacity-90 transition-transform duration-500 group-hover:-translate-y-2 sm:bottom-14 sm:right-2 sm:h-[88%] sm:w-[52%]"
    : "snoop-placeholder absolute bottom-0 right-0 z-10 h-[92%] w-[56%] opacity-90 transition-transform duration-500 group-hover:-translate-y-2 sm:h-[98%] sm:w-[58%]"

  return (
    <MotionDiv
      className="city-card group relative isolate h-[430px] overflow-hidden rounded-lg border border-white/15 shadow-depth"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, rotateX: 2.5, rotateY: index % 2 === 0 ? -2.5 : 2.5 }}
    >
      <Image
        src={image}
        alt={`${city} skyline`}
        fill
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      {overlayImage ? (
        <div className={overlayClassName}>
          <Image
            src={overlayImage}
            alt={`${city} Snoop visual`}
            fill
            sizes="(min-width: 1280px) 18vw, (min-width: 768px) 25vw, 40vw"
            className="object-contain object-bottom drop-shadow-[0_14px_30px_rgba(0,0,0,0.65)]"
          />
        </div>
      ) : (
        <div className={placeholderClassName} />
      )}
      <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-7">
        <p className="retro-body text-[1rem] uppercase sm:text-[1.1rem]">Premium city drop</p>
        <h3 className="retro-heading mt-1 text-[4rem] leading-none sm:text-[5rem]">{city}</h3>
      </div>
    </MotionDiv>
  )
}

export function MysteryCityCard() {
  return (
    <MotionDiv
      className="city-card group relative isolate flex h-[430px] items-center justify-center overflow-hidden rounded-lg border border-white/20 bg-black shadow-depth"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -14, scale: 1.015, rotateX: 3, rotateY: -3 }}
    >
      <div className="absolute inset-0 opacity-70 mystery-grid" />
      <span className="retro-heading relative text-[10rem] leading-none transition-transform duration-500 group-hover:scale-125 sm:text-[13rem]">
        ?
      </span>
      <p className="retro-body absolute bottom-7 px-6 text-center text-[1.05rem] uppercase">
        Surprise city unlocked by demand
      </p>
    </MotionDiv>
  )
}
