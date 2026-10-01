'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, CreditCard, Lock } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

type FormState = {
  name: string
  email: string
  card: string
  expiry: string
  cvc: string
  zip: string
  agreed: boolean
}

const initialForm: FormState = { name: '', email: '', card: '', expiry: '', cvc: '', zip: '', agreed: false }

const formatCard = (v: string) =>
  v.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ')

const formatExpiry = (v: string) => {
  const d = v.replace(/\D/g, '').slice(0, 4)
  return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d
}

function validate(f: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {}
  if (f.name.trim().length < 2) errors.name = 'Enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) errors.email = 'Enter a valid email.'
  if (f.card.replace(/\s/g, '').length !== 16) errors.card = 'Enter a 16-digit card number.'
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(f.expiry)) errors.expiry = 'MM/YY'
  if (!/^\d{3,4}$/.test(f.cvc)) errors.cvc = '3-4 digits'
  if (!/^\d{5}$/.test(f.zip)) errors.zip = '5 digits'
  if (!f.agreed) errors.agreed = 'You must accept the agreement to enroll.'
  return errors
}

const inputClass =
  'h-11 border-slate-700 bg-slate-950/60 text-white placeholder:text-slate-600 focus-visible:border-lime-500 focus-visible:ring-lime-500/30'

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-slate-300">
        {label}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

function OrderSummary() {
  return (
    <aside className="flex flex-col gap-5 border-b border-slate-800 bg-slate-950/50 p-6 md:border-b-0 md:border-r">
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-lime-400">Order Summary</p>
        <p className="mt-2 font-bold text-white">12-Week Apex Physique Program</p>
        <p className="text-sm text-slate-500">Lifetime access · One-time payment</p>
      </div>
      <dl className="flex flex-col gap-3 border-t border-slate-800 pt-5 font-mono text-sm">
        <div className="flex justify-between">
          <dt className="text-slate-400">Original price</dt>
          <dd className="text-slate-400 line-through">$596</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-400">Instant discount</dt>
          <dd className="text-lime-400">-$397</dd>
        </div>
        <div className="flex items-baseline justify-between border-t border-slate-800 pt-3">
          <dt className="font-sans font-semibold text-white">Total today</dt>
          <dd className="text-3xl font-bold text-white">$199</dd>
        </div>
      </dl>
      <ul className="mt-auto flex flex-col gap-2 text-sm text-slate-400">
        {['Full 12-week training program', 'Adaptive macro protocol', 'Weekly coach check-ins', '30-day money-back guarantee'].map(
          (i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-lime-400" aria-hidden="true" />
              {i}
            </li>
          ),
        )}
      </ul>
    </aside>
  )
}

export function CheckoutModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle')

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const handleOpenChange = (next: boolean) => {
    onOpenChange(next)
    if (!next && status === 'success') {
      setForm(initialForm)
      setStatus('idle')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return
    setStatus('processing')
    setTimeout(() => setStatus('success'), 1200)
  }

  const errProps = (key: keyof FormState) => ({
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
  })

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[92dvh] gap-0 overflow-y-auto border-slate-800 bg-slate-900 p-0 text-white sm:max-w-4xl">
        <DialogHeader className="border-b border-slate-800 p-6 pr-12">
          <DialogTitle className="text-balance text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            {'Complete Your Enrollment — 12-Week Apex Physique Program'}
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Secure checkout. Your portal login arrives by email instantly.
          </DialogDescription>
        </DialogHeader>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 p-10 text-center"
          >
            <span className="inline-flex size-16 items-center justify-center rounded-full bg-lime-500/15 text-lime-400">
              <CheckCircle2 className="size-8" aria-hidden="true" />
            </span>
            <h3 className="text-2xl font-extrabold tracking-tight text-white">
              {`Welcome to the program, ${form.name.split(' ')[0]}.`}
            </h3>
            <p className="max-w-md leading-relaxed text-slate-400">
              Your access details are on the way to <span className="text-white">{form.email}</span>.
              Week 1 starts whenever you are ready.
            </p>
            <p className="text-xs text-slate-600">Prototype only — no payment was processed.</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <OrderSummary />

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full Name" error={errors.name}>
                  <Input id="name" autoComplete="name" placeholder="Alex Morgan" value={form.name} onChange={(e) => update('name', e.target.value)} className={inputClass} {...errProps('name')} />
                </Field>
                <Field id="email" label="Email Address" error={errors.email}>
                  <Input id="email" type="email" autoComplete="email" placeholder="alex@company.com" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass} {...errProps('email')} />
                </Field>
              </div>

              <fieldset className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <legend className="flex items-center gap-2 px-1 text-sm font-medium text-slate-300">
                  <Lock className="size-4 text-lime-400" aria-hidden="true" />
                  Payment Details
                </legend>
                <Field id="card" label="Card Number" error={errors.card}>
                  <div className="relative">
                    <Input id="card" inputMode="numeric" autoComplete="cc-number" placeholder="4242 4242 4242 4242" value={form.card} onChange={(e) => update('card', formatCard(e.target.value))} className={`${inputClass} pl-10 font-mono`} {...errProps('card')} />
                    <CreditCard className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
                  </div>
                </Field>
                <div className="grid grid-cols-3 gap-3">
                  <Field id="expiry" label="Expiry" error={errors.expiry}>
                    <Input id="expiry" inputMode="numeric" autoComplete="cc-exp" placeholder="MM/YY" value={form.expiry} onChange={(e) => update('expiry', formatExpiry(e.target.value))} className={`${inputClass} font-mono`} {...errProps('expiry')} />
                  </Field>
                  <Field id="cvc" label="CVC" error={errors.cvc}>
                    <Input id="cvc" inputMode="numeric" autoComplete="cc-csc" placeholder="123" value={form.cvc} onChange={(e) => update('cvc', e.target.value.replace(/\D/g, '').slice(0, 4))} className={`${inputClass} font-mono`} {...errProps('cvc')} />
                  </Field>
                  <Field id="zip" label="Zip" error={errors.zip}>
                    <Input id="zip" inputMode="numeric" autoComplete="postal-code" placeholder="10001" value={form.zip} onChange={(e) => update('zip', e.target.value.replace(/\D/g, '').slice(0, 5))} className={`${inputClass} font-mono`} {...errProps('zip')} />
                  </Field>
                </div>
              </fieldset>

              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreed"
                    checked={form.agreed}
                    onCheckedChange={(checked) => update('agreed', checked === true)}
                    className="mt-0.5 border-slate-600 data-checked:border-lime-500 data-checked:bg-lime-500 data-checked:text-slate-950"
                    {...errProps('agreed')}
                  />
                  <Label htmlFor="agreed" className="text-sm font-normal leading-relaxed text-slate-300">
                    I agree to commit to the 12-week protocol guidelines and health disclaimers.
                  </Label>
                </div>
                {errors.agreed && (
                  <p id="agreed-error" className="text-xs text-red-400">
                    {errors.agreed}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={status === 'processing'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-lime-500 text-base font-bold text-slate-950 shadow-[0_0_24px_rgba(132,204,22,0.25)] transition-colors hover:bg-lime-400 disabled:opacity-70 sm:text-lg"
              >
                <Lock className="size-4" aria-hidden="true" />
                {status === 'processing' ? 'Processing…' : 'Pay $199 & Complete Enrollment'}
              </motion.button>

              <p className="text-center font-mono text-xs text-slate-500">
                {'256-Bit SSL Encryption • Instant Email Access • 30-Day Guarantee'}
              </p>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
