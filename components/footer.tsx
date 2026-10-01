'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUp, Lock, Mail, ShieldCheck } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

const legal = ['Terms of Service', 'Privacy Policy', 'Health Disclaimer', 'Refund Policy']

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 px-4 pb-28 pt-20 sm:px-6 sm:pb-10 lg:px-8">
      <Reveal className="mx-auto w-full max-w-7xl">
        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/50 p-8 text-center shadow-2xl backdrop-blur-md sm:p-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
            Last Call
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            12 weeks from now, you will wish you started today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-400">
            The time is going to pass anyway. Decide what you will look and feel like when it does.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton />
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <li className="inline-flex items-center gap-1.5">
              <Lock className="size-4 text-lime-400" aria-hidden="true" /> 256-Bit SSL Encryption
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Mail className="size-4 text-lime-400" aria-hidden="true" /> Instant Email Access
            </li>
            <li className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-lime-400" aria-hidden="true" /> 30-Day Guarantee
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-800/80 pt-8 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="h-5 w-1.5 rounded-full bg-lime-500" aria-hidden="true" />
            <span className="text-sm font-extrabold tracking-[0.2em] text-white">MARCUS VANCE</span>
          </div>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
              <li>
                <Link href="/contact" className="font-semibold text-lime-400 transition-colors hover:text-lime-300">
                  Contact
                </Link>
              </li>
              {legal.map((l) => (
                <li key={l}>
                  <a href="#" className="text-slate-500 transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <motion.a
            href="#top"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-lime-500/60 hover:text-white"
          >
            <ArrowUp className="size-4" aria-hidden="true" /> Back to Top
          </motion.a>
        </div>
        <p className="mt-8 text-center text-xs text-slate-600">
          {`© ${new Date().getFullYear()} Marcus Vance Coaching. Results vary. Consult a physician before starting any exercise program.`}
        </p>
      </Reveal>
    </footer>
  )
}
