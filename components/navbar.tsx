'use client'

import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CtaButton } from '@/components/cta-button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const links = [
  { href: '/#program', label: 'Program' },
  { href: '/#calculator', label: 'Calculator' },
  { href: '/#results', label: 'Results' },
  { href: '/#stories', label: 'Stories' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
]

function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY + 140
      let current = ''
      for (const { href } of links) {
        const el = document.getElementById(href.split('#')[1])
        if (el && el.offsetTop <= offset) current = href
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}

function Logo() {
  return (
    <a href="/#top" className="flex items-center gap-2.5" aria-label="Marcus Vance home">
      <span className="h-6 w-1.5 rounded-full bg-lime-500" aria-hidden="true" />
      <span className="text-sm font-extrabold tracking-[0.2em] text-white sm:text-base">
        MARCUS VANCE
      </span>
    </a>
  )
}

export function Navbar() {
  const active = useActiveSection()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden md:flex">
          <ul className="flex items-center gap-1">
            {links.map((link) => {
              const isActive = active === link.href
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-white',
                      isActive ? 'text-white' : 'text-slate-400',
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-lime-500 transition-opacity',
                        isActive ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <CtaButton size="sm" showArrow={false} className="hidden sm:inline-flex">
            {'Get Program — $199'}
          </CtaButton>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-800 text-white transition-colors hover:border-lime-500/60 md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="border-slate-800 bg-slate-950 text-white">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="px-4">
                <ul className="flex flex-col gap-1">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'flex items-center justify-between rounded-lg border px-4 py-3 text-base font-semibold transition-colors',
                          active === link.href
                            ? 'border-lime-500/50 bg-lime-500/10 text-lime-400'
                            : 'border-transparent text-slate-300 hover:bg-slate-900',
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto p-4" onClick={() => setMobileOpen(false)}>
                <CtaButton size="md" className="w-full">
                  {'Get Program — $199'}
                </CtaButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
