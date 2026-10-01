'use client'

import { useId, useState } from 'react'
import { cn } from '@/lib/utils'
import { CtaButton } from '@/components/cta-button'

const goals = [
  { id: 'cut', label: 'Lose Fat', adjust: -500 },
  { id: 'recomp', label: 'Recomp', adjust: -150 },
  { id: 'build', label: 'Build Muscle', adjust: 300 },
] as const

const activities = [
  { id: 'low', label: 'Desk-bound', multiplier: 13 },
  { id: 'moderate', label: 'Moderate', multiplier: 15 },
  { id: 'high', label: 'Very Active', multiplier: 17 },
] as const

type GoalId = (typeof goals)[number]['id']
type ActivityId = (typeof activities)[number]['id']

function calculate(weight: number, goal: GoalId, activity: ActivityId) {
  const multiplier = activities.find((a) => a.id === activity)!.multiplier
  const adjust = goals.find((g) => g.id === goal)!.adjust
  const calories = Math.round(weight * multiplier + adjust)
  const protein = Math.round(weight * (goal === 'cut' ? 1.1 : 1))
  const fats = Math.round((calories * 0.25) / 9)
  const carbs = Math.max(0, Math.round((calories - protein * 4 - fats * 9) / 4))
  return { calories, protein, carbs, fats }
}

function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: readonly { id: T; label: string }[]
  value: T
  onChange: (v: T) => void
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-white">{label}</legend>
      <div className="mt-3 grid grid-cols-3 gap-2" role="radiogroup">
        {options.map((o) => {
          const selected = o.id === value
          return (
            <button
              key={o.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(o.id)}
              className={cn(
                'rounded-lg border px-2 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400',
                selected
                  ? 'border-lime-500 bg-lime-500/15 text-lime-400'
                  : 'border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700 hover:text-white',
              )}
            >
              {o.label}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export function MacroCalculator() {
  const weightId = useId()
  const [weight, setWeight] = useState(185)
  const [goal, setGoal] = useState<GoalId>('cut')
  const [activity, setActivity] = useState<ActivityId>('moderate')
  const { calories, protein, carbs, fats } = calculate(weight, goal, activity)

  const macros = [
    { label: 'Protein', grams: protein, kcal: protein * 4 },
    { label: 'Carbs', grams: carbs, kcal: carbs * 4 },
    { label: 'Fats', grams: fats, kcal: fats * 9 },
  ]

  return (
    <div className="grid overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-2xl backdrop-blur-md lg:grid-cols-2">
      <div className="flex flex-col gap-8 p-6 sm:p-8">
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor={weightId} className="text-sm font-medium text-white">
              Body Weight
            </label>
            <span className="font-mono text-lg font-bold text-lime-400">
              {weight} <span className="text-sm text-slate-500">lb</span>
            </span>
          </div>
          <input
            id={weightId}
            type="range"
            min={110}
            max={300}
            step={1}
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="mt-4 w-full cursor-pointer accent-lime-500"
          />
          <div className="mt-1 flex justify-between font-mono text-xs text-slate-600">
            <span>110</span>
            <span>300</span>
          </div>
        </div>

        <Segmented label="Primary Goal" options={goals} value={goal} onChange={setGoal} />
        <Segmented label="Activity Level" options={activities} value={activity} onChange={setActivity} />
      </div>

      <div className="flex flex-col border-t border-slate-800/80 bg-slate-950/40 p-6 sm:p-8 lg:border-l lg:border-t-0">
        <p className="text-sm text-slate-500">Daily Calories</p>
        <p className="font-mono text-5xl font-bold tracking-tight text-white sm:text-6xl" aria-live="polite">
          {calories.toLocaleString()}
          <span className="ml-2 text-lg text-slate-500">kcal</span>
        </p>

        <ul className="mt-8 flex flex-col gap-5">
          {macros.map((m) => {
            const pct = Math.round((m.kcal / calories) * 100)
            return (
              <li key={m.label}>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-slate-300">{m.label}</span>
                  <span className="font-mono text-sm">
                    <span className="font-bold text-lime-400">{m.grams}g</span>
                    <span className="ml-2 text-slate-500">{pct}%</span>
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-lime-500 transition-[width] duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-8 rounded-xl border border-lime-500/20 bg-lime-500/5 p-4">
          <p className="text-sm leading-relaxed text-slate-300">
            This is your starting point. Inside the program, your targets auto-adjust every week
            based on your check-ins, training phase, and progress.
          </p>
        </div>
        <CtaButton size="md" className="mt-6 w-full">
          Get the Full Protocol — $199
        </CtaButton>
      </div>
    </div>
  )
}
