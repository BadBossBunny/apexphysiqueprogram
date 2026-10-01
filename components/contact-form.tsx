'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { submitContact, type ContactState } from '@/app/contact/actions'

const initialState: ContactState = { status: 'idle' }

const fieldClass =
  'h-11 border-slate-800 bg-slate-950/60 text-white placeholder:text-slate-600 focus-visible:border-lime-500 focus-visible:ring-lime-500/30'

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)

  if (state.status === 'success') {
    return (
      <div role="status" className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle2 className="size-12 text-lime-400" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-white">Message sent</h2>
        <p className="max-w-sm leading-relaxed text-slate-400">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-slate-300">Full name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Jordan Smith"
            aria-invalid={!!state.errors?.name}
            aria-describedby={state.errors?.name ? 'name-error' : undefined}
            className={fieldClass}
          />
          {state.errors?.name && <p id="name-error" className="text-sm text-red-400">{state.errors.name}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-slate-300">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={!!state.errors?.email}
            aria-describedby={state.errors?.email ? 'email-error' : undefined}
            className={fieldClass}
          />
          {state.errors?.email && <p id="email-error" className="text-sm text-red-400">{state.errors.email}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="topic" className="text-slate-300">Topic</Label>
        <select
          id="topic"
          name="topic"
          defaultValue="program"
          className="h-11 rounded-md border border-slate-800 bg-slate-950/60 px-3 text-sm text-white outline-none focus-visible:border-lime-500 focus-visible:ring-[3px] focus-visible:ring-lime-500/30"
        >
          <option value="program">Questions about the program</option>
          <option value="fit">Is this right for me?</option>
          <option value="billing">Billing &amp; refunds</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-slate-300">Message</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about your schedule, your goals, and what has not worked before."
          aria-invalid={!!state.errors?.message}
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
          className="resize-y rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-600 focus-visible:border-lime-500 focus-visible:ring-[3px] focus-visible:ring-lime-500/30 aria-invalid:border-red-500/60"
        />
        {state.errors?.message && <p id="message-error" className="text-sm text-red-400">{state.errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 font-semibold text-white transition-colors hover:border-lime-500/60 hover:bg-slate-700 disabled:opacity-60"
      >
        {pending ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        {pending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
