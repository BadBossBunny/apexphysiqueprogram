import { Activity, Apple, CalendarClock, Dumbbell, LineChart, MessageSquare } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { MacroCalculator } from '@/components/macro-calculator'

const features = [
  {
    icon: Dumbbell,
    title: 'Hybrid Strength Blocks',
    body: 'Periodized strength and hypertrophy phases that build dense, athletic muscle in 4 sessions a week.',
  },
  {
    icon: Activity,
    title: 'Engine Conditioning',
    body: 'Zone 2 and interval work that lifts VO2 max and burns fat without wrecking your recovery.',
  },
  {
    icon: Apple,
    title: 'Flexible Macro Protocol',
    body: 'Precision targets that adapt weekly. Eat at restaurants, travel, and still hit your numbers.',
  },
  {
    icon: CalendarClock,
    title: '45-Minute Sessions',
    body: 'Every workout is engineered to fit before your first meeting. No filler, no junk volume.',
  },
  {
    icon: LineChart,
    title: 'Progress Dashboard',
    body: 'Track lifts, body metrics, and check-ins in one portal so you always know what is working.',
  },
  {
    icon: MessageSquare,
    title: 'Weekly Coach Check-ins',
    body: 'Submit your data every Sunday. Get direct adjustments from me, not a chatbot.',
  },
]

export function FeaturesGrid() {
  return (
    <section id="program" aria-labelledby="program-heading" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Program"
          title="Six systems. One elite physique."
          description="Every component is built around one goal: the most results from the least time. Science over trends, execution over motivation."
        />

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.05} className="h-full">
                <article className="group h-full rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-lime-500/50 hover:shadow-[0_0_30px_rgba(132,204,22,0.12)]">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-lime-500/20 bg-lime-500/10 text-lime-400 transition-colors group-hover:bg-lime-500 group-hover:text-slate-950">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-white">{title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">{body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <div id="calculator" className="scroll-mt-24 pt-20 sm:pt-28">
          <SectionHeading
            eyebrow="Live Demo"
            title="See your starting macros in seconds."
            description="A preview of the precision you get inside the program. Adjust the inputs and watch your targets update live."
          />
          <Reveal className="mt-12">
            <MacroCalculator />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
