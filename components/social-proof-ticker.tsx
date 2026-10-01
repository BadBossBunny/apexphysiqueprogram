import { Star, Trophy, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const metrics = [
  { icon: Users, value: '500+', label: 'Professionals Transformed' },
  { icon: Star, value: '4.9/5', label: 'Average Client Rating' },
  { icon: Trophy, value: '94%', label: 'Program Completion Rate' },
]

export function SocialProofTicker() {
  return (
    <section aria-label="Program results at a glance" className="border-y border-slate-800/80 bg-slate-900/40">
      <Reveal className="mx-auto grid w-full max-w-7xl grid-cols-1 divide-y divide-slate-800/80 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
        {metrics.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center justify-center gap-4 py-6 sm:py-8">
            <Icon className="size-6 text-lime-400" aria-hidden="true" />
            <div>
              <p className="font-mono text-2xl font-bold text-lime-400 sm:text-3xl">{value}</p>
              <p className="text-sm text-slate-400">{label}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
