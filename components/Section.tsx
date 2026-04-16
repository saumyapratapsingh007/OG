import type { ReactNode } from "react"
import { MotionSection, Reveal, stagger } from "./Motion"

type SectionProps = {
  eyebrow?: string
  title: string
  children: ReactNode
  className?: string
}

export default function Section({ eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <MotionSection
      className={`relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 ${className}`}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      <Reveal>
        {eyebrow ? <p className="retro-kicker mb-5">{eyebrow}</p> : null}
        <h2 className="retro-heading">{title}</h2>
      </Reveal>
      <div className="mt-9 sm:mt-12">{children}</div>
    </MotionSection>
  )
}
