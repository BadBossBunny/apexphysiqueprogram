import { Check, ShieldCheck } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { Reveal, SectionHeading } from '@/components/reveal'

const valueStack = [
  { item: '12-Week Periodized Training Program', value: 249 },
  { item: 'Adaptive Macro & Nutrition Protocol', value: 149 },
  { item: 'Progress Dashboard & Exercise Video Library', value: 99 },
  { item: 'Weekly Coach Check-in Adjustments', value: 99 },
]

const benefits = [
  'Lifetime access to all 12 weeks of programming',
  'Gym, hotel, and home workout variations',
  'Restaurant & travel eating playbook',
  'Private community of high-performers',
]

export function PricingCard() {
  const total = valueStack.reduce((sum, v) => sum + v.value, 0)

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="scroll-mt-20 border-t border-slate-800/80 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Enroll Today"
          title="One program. One price. Zero excuses."
          description="Everything you need to finish these 12 weeks in the best shape of your adult life."
        />

        <Reveal className="mx-auto mt-14 max-w-2xl">
          <article className="rounded-3xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-[0_0_30px_rgba(132,204,22,0.15)] ring-2 ring-lime-500/50 backdrop-blur-md sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-white">Apex Physique Program</h3>
                <p className="mt-1 text-slate-400">12 weeks · One-time payment</p>
              </div>
              <span className="rounded-full bg-lime-500 px-3 py-1 font-mono text-xs font-bold uppercase text-slate-950">
                Save 67%
              </span>
            </div>

            <ul className="mt-8 flex flex-col divide-y divide-slate-800 rounded-xl border border-slate-800 bg-slate-950/50">
              {valueStack.map((v) => (
                <li key={v.item} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
                  <span className="text-slate-300">{v.item}</span>
                  <span className="font-mono text-slate-500">${v.value}</span>
                </li>
              ))}
              <li className="flex items-center justify-between gap-4 px-4 py-3 text-sm font-semibold">
                <span className="text-white">Total Value</span>
                <span className="font-mono text-slate-400 line-through">${total}</span>
              </li>
            </ul>

            <div className="mt-8 flex items-end justify-center gap-3">
              <span className="font-mono text-2xl text-slate-600 line-through">${total}</span>
              <span className="font-mono text-6xl font-bold tracking-tight text-white sm:text-7xl">$199</span>
            </div>
            <p className="mt-2 text-center text-sm text-slate-500">Pay once. Keep it forever.</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="mt-0.5 size-4 shrink-0 text-lime-400" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>

            <CtaButton className="mt-10 w-full" />

            <aside className="mt-8 flex gap-4 rounded-xl border border-lime-500/20 bg-lime-500/5 p-5">
              <ShieldCheck className="size-8 shrink-0 text-lime-400" aria-hidden="true" />
              <div>
                <h4 className="font-bold text-white">The 30-Day &ldquo;Zero-B.S.&rdquo; Guarantee</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  Follow the program for 30 days. If you are not visibly stronger and leaner, email
                  me and I will refund every dollar. No hoops, no questions.
                </p>
              </div>
            </aside>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
