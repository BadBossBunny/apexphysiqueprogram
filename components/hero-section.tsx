import Image from 'next/image'
import { CheckCircle2, Clock, Flame, ShieldCheck } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

const bullets = [
  '4 x 45-minute sessions per week',
  'Custom macros, not meal plans you will quit',
  'Built for travel, meetings, and real life',
]

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24"
    >
      <Reveal>
        <p className="inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-lime-400">
          <span className="size-1.5 rounded-full bg-lime-400" aria-hidden="true" />
          Elite Hybrid Performance Coaching
        </p>
        <h1
          id="hero-heading"
          className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Build an athlete&apos;s body in <span className="text-lime-400">12 weeks.</span> On a
          CEO&apos;s schedule.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-400">
          The Apex Physique Program is the exact strength, conditioning, and nutrition system I use
          with founders, surgeons, and executives to strip fat and add muscle without living in the
          gym.
        </p>

        <ul className="mt-8 flex flex-col gap-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-slate-300">
              <CheckCircle2 className="size-5 shrink-0 text-lime-400" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4">
          <CtaButton className="w-full sm:w-auto" />
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-lime-400" aria-hidden="true" />
              30-day money-back guarantee
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4 text-lime-400" aria-hidden="true" />
              Instant portal access
            </span>
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="relative">
        <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-2xl backdrop-blur-md">
          <Image
            src="/images/marcus-hero.png"
            alt="Coach Marcus Vance standing in a dark training facility"
            width={800}
            height={1000}
            priority
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        </div>

        <div className="absolute inset-x-4 bottom-4 rounded-xl border border-slate-800/80 bg-slate-900/70 p-4 shadow-2xl backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">Week 7 · Today</p>
              <p className="mt-0.5 font-semibold text-white">Lower Body Power + Zone 2</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-md bg-lime-500/15 px-2 py-1 font-mono text-xs font-semibold text-lime-400">
              <Flame className="size-3.5" aria-hidden="true" />
              45:00
            </span>
          </div>
          <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-slate-800 pt-4">
            {[
              ['Body Fat', '-6.2%'],
              ['Squat', '+45 lb'],
              ['VO2 Max', '+11%'],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs text-slate-500">{label}</dt>
                <dd className="font-mono text-lg font-bold text-lime-400">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  )
}
