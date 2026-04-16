"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { useEffect, useState } from "react"
import BackgroundAudio from "@/components/BackgroundAudio"
import CityCard, { MysteryCityCard } from "@/components/CityCard"
import HeroVideo from "@/components/HeroVideo"
import { MotionDiv, Reveal } from "@/components/Motion"
import Section from "@/components/Section"

const EarthLayer = dynamic(() => import("@/components/EarthLayer"), { ssr: false })

const achievements = [
  {
    title: "Collaborations",
    text: "Snoop Dogg sits in a rare league of artists whose collaborations move across hip-hop, pop, electronic, reggae, film, sports, gaming, and brand culture. That breadth gives the event instant familiarity for multiple audience segments instead of limiting it to a single nostalgia lane.",
  },
  {
    title: "Audience Scale",
    text: "The name carries worldwide recognition across generations: original West Coast hip-hop fans, streaming-native listeners, luxury nightlife patrons, and casual pop-culture audiences who know Snoop as a personality, entrepreneur, and entertainment icon.",
  },
  {
    title: "Cultural Influence",
    text: "His cultural dominance extends beyond records. Snoop Dogg is a lifestyle signal: relaxed confidence, premium party energy, fashion, humor, cannabis culture, food, sports, and a social-media presence that keeps him current without erasing his legacy.",
  },
  {
    title: "Genre Versatility",
    text: "The format can flex from classic hip-hop to contemporary club records, funk textures, DJ-led crowd moments, and surprise crossover sections. That makes the show commercially adaptable for sponsors, cities, and different ticket tiers.",
  },
]

const why = [
  "First mover advantage in a premium Indian hip-hop experience built around a globally recognized artist rather than a generic club night.",
  "A clear premium market gap: India has appetite for international entertainment, but few concepts combine celebrity gravity, nightlife monetization, sponsor value, and city-by-city scalability.",
  "High spending audience behavior across VIP tables, bottle service, limited merchandise, brand activations, and social-first event moments.",
  "Brand leverage for alcohol, fashion, lifestyle, quick commerce, audio, luxury mobility, hospitality, and youth culture partners seeking immediate credibility.",
  "A scalable model that can repeat with controlled production, city-specific localization, and a surprise market mechanic that creates demand before announcement.",
]

const concepts = [
  {
    title: "Smoking Zones",
    text: "Controlled, premium smoking lounges create dwell time, sponsor inventory, and high-margin hospitality opportunities while keeping the main arena crowd flow clean and safe.",
  },
  {
    title: "Liquor Zones",
    text: "Segmented bars, VIP bottle service, and partner-led pours turn beverage into a core revenue engine rather than a side counter. The zones can be priced by access level, table category, and brand exclusivity.",
  },
  {
    title: "Merchandise Corners",
    text: "Limited city-drop merchandise gives fans a collectible reason to spend on-site. Each city can carry distinct visual identity, creating scarcity and repeat demand across the tour.",
  },
]

const cities = [
  {
    city: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1400&q=80",
    overlayImage: "/images/mumbai-snoop.png",
  },
  {
    city: "Pune",
    image: "/images/puntct.png",
    overlayImage: "/images/snooppune.png",
  },
  {
    city: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1400&q=80",
    overlayImage: "/images/bangalore-snoop.png",
  },
  {
    city: "Delhi",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1400&q=80",
    overlayImage: "/images/delhi-snoop.png",
  },
  {
    city: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1551161242-b5af797b7233?auto=format&fit=crop&w=1400&q=80",
    overlayImage: "/images/hyderabad-snoop.png",
  },
]

const revenue = [
  "VIP Tables",
  "Brand Partnerships",
  "Alcohol Sponsors",
  "Merchandise",
]

function CopyPhone({ phone }: { phone: string }) {
  const [copied, setCopied] = useState(false)

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(phone)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button className="copy-link retro-body" type="button" onClick={copyPhone} aria-label={`Copy ${phone}`}>
      {phone}
      {copied ? <span className="block text-[0.75rem] sm:text-[0.82rem]">Copied</span> : null}
    </button>
  )
}

export default function Home() {
  const [showEarth, setShowEarth] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const heroThreshold = window.innerHeight * 0.92
      const currentY = window.scrollY
      const docHeight = Math.max(document.body.scrollHeight - window.innerHeight, 1)
      const nextProgress = Math.min(currentY / docHeight, 1)

      setShowEarth(currentY >= heroThreshold)
      setScrollProgress(nextProgress)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent">
      <HeroVideo />
      {showEarth ? <EarthLayer scrollProgress={scrollProgress} /> : null}
      <BackgroundAudio />

      <Section eyebrow="Section 01" title="Introduction">
        <Reveal>
          <h3 className="retro-heading mb-5 text-[3rem] sm:text-[4.6rem]">Snoop Dogg Is Global Currency</h3>
          <p className="retro-body max-w-5xl">
            Party with Snoop Dogg is built around a global icon with rare longevity, cross-genre appeal,
            and cultural dominance that has stayed commercially relevant for decades. He is not only a
            hip-hop legend; he is a pop-culture institution recognized by music fans, premium nightlife
            audiences, lifestyle consumers, sports communities, and brand partners. That mix gives this
            event a powerful investor advantage: the artist name already carries trust, recall, and social
            momentum before the first ticket campaign goes live.
          </p>
        </Reveal>
      </Section>

      <Section eyebrow="Section 02" title="Achievements">
        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((item) => (
            <Reveal key={item.title}>
              <MotionDiv className="investor-card p-6 sm:p-8" whileHover={{ y: -8, rotate: -0.4 }}>
                <h3 className="retro-heading text-[3.2rem] sm:text-[4.2rem]">{item.title}</h3>
                <p className="retro-body mt-4 text-[1rem] sm:text-[1.15rem]">{item.text}</p>
              </MotionDiv>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Section 03" title="Why This Event Works">
        <div className="grid gap-5 lg:grid-cols-5">
          {why.map((item) => (
            <Reveal key={item}>
              <MotionDiv className="investor-card h-full p-5" whileHover={{ y: -7, scale: 1.01 }}>
                <p className="retro-body text-[0.88rem] sm:text-[0.94rem]">{item}</p>
              </MotionDiv>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Section 04" title="Event Concept">
        <Reveal>
          <h3 className="retro-heading mb-6 text-[3rem] sm:text-[4.6rem]">Party With Snoop Dogg</h3>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {concepts.map((item) => (
            <Reveal key={item.title}>
              <MotionDiv className="investor-card p-6" whileHover={{ y: -8, rotateX: 2 }}>
                <h3 className="retro-heading text-[3rem] sm:text-[3.9rem]">{item.title}</h3>
                <p className="retro-body mt-4 text-[1rem]">{item.text}</p>
              </MotionDiv>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="retro-body max-w-5xl">
            Profitability comes from stacking revenue layers around the core performance: premium ticketing,
            table inventory, alcohol partnerships, controlled sponsor zones, city-edition merchandise, and
            content value for every participating brand. The concept is designed as a business ecosystem,
            not a single-night show.
          </p>
        </Reveal>
      </Section>

      <Section eyebrow="Section 05" title="Footfall And Scale">
        <Reveal>
          <h3 className="retro-heading mb-6 text-[3rem] sm:text-[4.6rem]">Premium Reach At Tour Scale</h3>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {["10K per event", "5 cities + 1 surprise", "60K premium audience target"].map((item) => (
            <Reveal key={item}>
              <MotionDiv className="investor-card flex min-h-48 items-center p-7" whileHover={{ y: -8 }}>
                <p className="retro-heading text-[3.5rem] sm:text-[4.6rem]">{item}</p>
              </MotionDiv>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Section 06" title="Cities">
        <Reveal>
          <h3 className="retro-heading mb-6 text-[3rem] sm:text-[4.6rem]">Five Confirmed Markets Plus One Wildcard</h3>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cities.map((city, index) => (
            <CityCard
              key={city.city}
              city={city.city}
              image={city.image}
              index={index}
              overlayImage={"overlayImage" in city ? city.overlayImage : undefined}
            />
          ))}
          <MysteryCityCard />
        </div>
      </Section>

      <Section eyebrow="Section 07" title="Genre And Experience">
        <Reveal>
          <h3 className="retro-heading mb-5 text-[3rem] sm:text-[4.6rem]">Hip-Hop Built For The Crowd</h3>
          <p className="retro-body max-w-5xl">
            The experience is anchored in hip-hop but shaped for a modern Indian premium crowd: a
            crowd-driven DJ set, high-energy transitions, classic Snoop moments, sponsor-friendly visual
            peaks, and a floor plan that keeps the audience moving. It should feel like a festival headline
            moment with the intimacy and spending behavior of an elite nightlife property.
          </p>
        </Reveal>
      </Section>

      <Section eyebrow="Section 08" title="Revenue Streams">
        <Reveal>
          <h3 className="retro-heading mb-6 text-[3rem] sm:text-[4.6rem]">Monetization Stack</h3>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {revenue.map((item) => (
            <Reveal key={item}>
              <MotionDiv className="investor-card flex min-h-44 items-end p-6" whileHover={{ y: -9, rotate: 0.6 }}>
                <p className="retro-heading text-[3rem] sm:text-[3.8rem]">{item}</p>
              </MotionDiv>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Section 09" title="Additional Value">
        <Reveal>
          <h3 className="retro-heading mb-5 text-[3rem] sm:text-[4.6rem]">More Than A Concert</h3>
          <p className="retro-body max-w-5xl">
            The production can scale from city to city with a repeatable technical backbone while still
            leaving space for local identity. Opening slots create artist debut opportunities, celebrity
            presence raises earned media value, and every city can generate sponsor content, influencer
            inventory, and post-event assets that keep the property alive after the lights come down.
          </p>
        </Reveal>
      </Section>

      <Section eyebrow="Section 10" title="Stage Design">
        <Reveal>
          <h3 className="retro-heading mb-5 text-[3rem] sm:text-[4.6rem]">Local Soul, Hip-Hop Architecture</h3>
          <p className="retro-body max-w-5xl">
            Each stage identity should borrow from the host city without becoming decorative nostalgia:
            traditional visual motifs, monument-inspired forms, local color cues, LED typography, low-slung
            West Coast attitude, smoke, chrome, and bold hip-hop scale. The result is a tour system that
            feels unmistakably global while giving every Indian city its own signature night.
          </p>
        </Reveal>
      </Section>

      <Section eyebrow="Section 11" title="Contact" className="pb-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <div className="space-y-4">
              <CopyPhone phone="8847097860" />
              <CopyPhone phone="8000980019" />
              <Link className="retro-body block" href="mailto:Info.godside@gmail.com">
                Info.godside@gmail.com
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                className="investor-card retro-heading flex min-h-24 items-center justify-center px-7 py-5 text-center text-[3rem] transition-transform hover:-translate-y-1"
                href="https://wa.me/918847097860?text=I%20want%20to%20join%20Party%20with%20Snoop%20Dogg"
                target="_blank"
                rel="noreferrer"
              >
                Join Us
              </Link>
              <Link
                className="investor-card retro-heading flex min-h-24 items-center justify-center px-7 py-5 text-center text-[3rem] transition-transform hover:-translate-y-1"
                href="https://www.instagram.com/godsidemngmnt?igsh=ZnF3eWp3amhsZDV0"
                target="_blank"
                rel="noreferrer"
              >
                Know More
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  )
}
