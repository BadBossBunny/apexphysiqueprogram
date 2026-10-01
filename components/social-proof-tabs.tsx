import Image from 'next/image'
import { Quote, Star } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Reveal, SectionHeading } from '@/components/reveal'

const results = [
  {
    image: '/images/result-1.png',
    name: 'David R.',
    role: 'Software Director, 38',
    badges: ['-24 lb', '-9% BF'],
  },
  {
    image: '/images/result-2.png',
    name: 'Sarah K.',
    role: 'Corporate Attorney, 33',
    badges: ['-14 lb', '+3 lb Muscle'],
  },
  {
    image: '/images/result-3.png',
    name: 'Michael T.',
    role: 'Surgeon, 42',
    badges: ['-31 lb', '-11% BF'],
  },
]

const testimonials = [
  {
    quote:
      'I have hired three trainers in ten years. Marcus is the first who built a program around my calendar instead of asking me to rebuild my life. Down 22 pounds and stronger than college.',
    name: 'James Whitfield',
    role: 'Managing Partner, Private Equity',
  },
  {
    quote:
      'The weekly check-ins are the secret. Every Sunday I knew exactly what to change. I travel two weeks a month and still finished all 12 weeks. My bloodwork has never looked better.',
    name: 'Priya Shah',
    role: 'VP of Product, Fintech',
  },
]

const stories = [
  {
    title: 'From 3 failed diets to 9% body fat',
    name: 'Daniel O., 36 · Startup Founder',
    before: 'Averaging 4 hours of sleep, skipping workouts, and stuck at 212 lb after multiple crash diets.',
    after: 'Hit 188 lb at 9% body fat, deadlift up 80 lb, and training became the anchor of his week.',
    stats: [
      ['Weeks', '12'],
      ['Lost', '24 lb'],
      ['Deadlift', '+80 lb'],
    ],
  },
  {
    title: 'Postpartum strength, rebuilt on 3 days',
    name: 'Elena M., 34 · Hospital Administrator',
    before: 'Low energy, back pain, and only three realistic training windows per week with a newborn.',
    after: 'Pain-free, 16 lb lighter, and her first bodyweight pull-up by week 10 on a 3-day split.',
    stats: [
      ['Weeks', '12'],
      ['Lost', '16 lb'],
      ['Pull-ups', '0 → 3'],
    ],
  },
]

const glass =
  'rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-lime-500/50 hover:shadow-[0_0_30px_rgba(132,204,22,0.12)]'

const triggerClass =
  'h-full px-3 text-sm text-slate-400 hover:text-white data-active:bg-lime-500 data-active:text-slate-950 dark:data-active:bg-lime-500 dark:data-active:text-slate-950 dark:data-active:border-lime-500 sm:px-5'

export function SocialProofTabs() {
  return (
    <section id="results" aria-labelledby="results-heading" className="scroll-mt-20 border-t border-slate-800/80 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proven Results"
          title="Real professionals. Real transformations."
          description="No stock photos, no fake testimonials. These are clients with demanding careers who followed the protocol."
        />

        <Reveal className="mt-12">
          <Tabs defaultValue="results" className="items-center gap-10">
            <TabsList className="h-11 rounded-xl border border-slate-800 bg-slate-900/70 p-1">
              <TabsTrigger value="results" className={triggerClass}>
                Before &amp; After
              </TabsTrigger>
              <TabsTrigger value="testimonials" className={triggerClass}>
                Testimonials
              </TabsTrigger>
              <TabsTrigger value="stories" className={triggerClass}>
                Case Stories
              </TabsTrigger>
            </TabsList>

            <TabsContent value="results" className="w-full">
              <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {results.map((r) => (
                  <li key={r.name}>
                    <article className={`${glass} overflow-hidden`}>
                      <div className="relative">
                        <Image
                          src={r.image}
                          alt={`${r.name} before and after the 12-week program`}
                          width={640}
                          height={420}
                          className="aspect-[3/2] w-full object-cover"
                        />
                        <div className="absolute inset-x-0 top-0 flex justify-between p-3 font-mono text-[10px] font-semibold uppercase tracking-wider">
                          <span className="rounded bg-slate-950/80 px-2 py-1 text-slate-300">Week 0</span>
                          <span className="rounded bg-lime-500 px-2 py-1 text-slate-950">Week 12</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-3 p-5">
                        <div>
                          <h3 className="font-bold text-white">{r.name}</h3>
                          <p className="text-sm text-slate-500">{r.role}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          {r.badges.map((b) => (
                            <span key={b} className="rounded-md border border-lime-500/30 bg-lime-500/10 px-2 py-0.5 font-mono text-xs font-bold text-lime-400">
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="testimonials" className="w-full">
              <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {testimonials.map((t) => (
                  <li key={t.name}>
                    <figure className={`${glass} flex h-full flex-col p-6 sm:p-8`}>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="size-4 fill-lime-400 text-lime-400" aria-hidden="true" />
                          ))}
                        </div>
                        <Quote className="size-8 text-slate-700" aria-hidden="true" />
                      </div>
                      <blockquote className="mt-5 flex-1 text-pretty text-lg leading-relaxed text-slate-200">
                        {`"${t.quote}"`}
                      </blockquote>
                      <figcaption className="mt-6 border-t border-slate-800 pt-5">
                        <p className="font-bold text-white">{t.name}</p>
                        <p className="text-sm text-slate-500">{t.role}</p>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="stories" className="w-full">
              <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {stories.map((s) => (
                  <li key={s.title}>
                    <article className={`${glass} h-full p-6 sm:p-8`}>
                      <p className="font-mono text-xs uppercase tracking-wider text-lime-400">Case Study</p>
                      <h3 className="mt-2 text-balance text-xl font-bold tracking-tight text-white">{s.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{s.name}</p>
                      <dl className="mt-6 flex flex-col gap-4">
                        <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                          <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Before</dt>
                          <dd className="mt-1 leading-relaxed text-slate-400">{s.before}</dd>
                        </div>
                        <div className="rounded-xl border border-lime-500/20 bg-lime-500/5 p-4">
                          <dt className="text-xs font-semibold uppercase tracking-wider text-lime-400">After</dt>
                          <dd className="mt-1 leading-relaxed text-slate-300">{s.after}</dd>
                        </div>
                      </dl>
                      <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-800 pt-5">
                        {s.stats.map(([label, value]) => (
                          <div key={label}>
                            <dt className="text-xs text-slate-500">{label}</dt>
                            <dd className="font-mono text-lg font-bold text-lime-400">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </article>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>
    </section>
  )
}
