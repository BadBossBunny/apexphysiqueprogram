import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { CtaButton } from '@/components/cta-button'

const stories = [
  {
    image: '/images/story-1.png',
    name: 'Ryan C.',
    role: 'Investment Banker, 39',
    headline: 'Lost the dad bod during deal season',
    story:
      '80-hour weeks had pushed Ryan to 226 lb and borderline blood pressure. We built 35-minute sessions he could hit at 6am and a meal framework that worked with client dinners.',
    quote: 'I closed the biggest deal of my career in the same quarter I got into the best shape of my life.',
    stats: [
      { label: 'Weight', value: '-27 lb' },
      { label: 'Body Fat', value: '-10%' },
      { label: 'BP', value: 'Normal' },
    ],
  },
  {
    image: '/images/story-2.png',
    name: 'Natalie W.',
    role: 'Marketing Executive, 31',
    headline: 'From cardio burnout to real strength',
    story:
      'Natalie was running 5 days a week and still felt soft and exhausted. We swapped half the cardio for progressive lifting and fixed her protein intake.',
    quote: 'I train less than I used to and I look completely different. My energy at work is unreal.',
    stats: [
      { label: 'Squat', value: '+65 lb' },
      { label: 'Waist', value: '-3 in' },
      { label: 'Sessions', value: '4/wk' },
    ],
  },
  {
    image: '/images/story-3.png',
    name: 'Anthony L.',
    role: 'Orthopedic Surgeon, 46',
    headline: 'Pain-free and stronger at 46',
    story:
      'Years of standing in the OR left Anthony with chronic back pain and 30 extra pounds. A mobility-first protocol rebuilt his posterior chain before we added load.',
    quote: 'I tell my own patients about this program now. The structure is as precise as surgery.',
    stats: [
      { label: 'Weight', value: '-31 lb' },
      { label: 'Back Pain', value: 'Gone' },
      { label: 'Deadlift', value: '315 lb' },
    ],
  },
]

export function SuccessStories() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="scroll-mt-20 border-t border-slate-800/80 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="Three clients. Three very different starting points."
          description="Every story starts with a busy schedule and a body that was not cooperating. Here is how the protocol adapted to each one."
        />

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <li key={s.name} className="flex">
              <Reveal delay={i * 0.1} className="flex w-full">
                <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-lime-500/50 hover:shadow-[0_0_30px_rgba(132,204,22,0.12)]">
                  <div className="relative">
                    <Image
                      src={s.image || '/placeholder.svg'}
                      alt={`Portrait of ${s.name}, ${s.role}`}
                      width={640}
                      height={720}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 pt-16">
                      <h3 className="text-lg font-bold text-white">{s.name}</h3>
                      <p className="text-sm text-slate-400">{s.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-xs uppercase tracking-wider text-lime-400">
                      {s.headline}
                    </p>
                    <p className="mt-3 leading-relaxed text-slate-400">{s.story}</p>

                    <dl className="mt-6 grid grid-cols-3 gap-2">
                      {s.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-lg border border-slate-800 bg-slate-950/50 px-3 py-2.5 text-center"
                        >
                          <dt className="text-[11px] uppercase tracking-wider text-slate-500">{stat.label}</dt>
                          <dd className="mt-0.5 font-mono text-base font-bold text-lime-400">{stat.value}</dd>
                        </div>
                      ))}
                    </dl>

                    <figure className="mt-6 flex flex-1 gap-3 border-t border-slate-800 pt-5">
                      <Quote className="size-5 shrink-0 text-lime-500/60" aria-hidden="true" />
                      <blockquote className="text-pretty italic leading-relaxed text-slate-200">
                        {`"${s.quote}"`}
                      </blockquote>
                    </figure>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <CtaButton>Write Your Own Success Story</CtaButton>
        </Reveal>
      </div>
    </section>
  )
}
