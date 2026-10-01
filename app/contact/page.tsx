import type { Metadata } from 'next'
import { Clock, Mail, MapPin, ShieldCheck } from 'lucide-react'
import { SiteShell } from '@/components/site-shell'
import { ContactForm } from '@/components/contact-form'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Contact | Marcus Vance Coaching',
  description: 'Questions about the 12-Week Transformation Program? Get in touch with Marcus Vance directly.',
}

const details = [
  { icon: Mail, label: 'Email', value: 'coach@marcusvance.com' },
  { icon: Clock, label: 'Response time', value: 'Within 24 hours, Mon to Sat' },
  { icon: MapPin, label: 'Based in', value: 'Austin, TX · Coaching worldwide' },
]

export default function ContactPage() {
  return (
    <SiteShell>
      <section aria-labelledby="contact-heading" className="px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="flex flex-col lg:col-span-2">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">Contact</p>
            <h1
              id="contact-heading"
              className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            >
              {"Let's talk about your goals."}
            </h1>
            <p className="mt-4 text-pretty leading-relaxed text-slate-400">
              Not sure if the program fits your schedule? Send a message and Marcus will personally reply.
            </p>

            <ul className="mt-10 flex flex-col gap-5">
              {details.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-lime-500/30 bg-lime-500/10">
                    <Icon className="size-5 text-lime-400" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
                    <p className="mt-0.5 font-medium text-white">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-lime-500/30 bg-lime-500/5 p-6">
              <p className="font-bold text-white">Already know you are ready?</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                Skip the inbox. Enroll now and get instant access to week one.
              </p>
              <CtaButton size="md" className="mt-5 w-full">
                {'Get Program — $199'}
              </CtaButton>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="size-4 text-lime-400" aria-hidden="true" />
                30-day money-back guarantee
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-2xl backdrop-blur-md sm:p-10 lg:col-span-3">
            <h2 className="text-xl font-bold text-white">Send a message</h2>
            <p className="mt-1 text-sm text-slate-500">All fields except topic are required.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
