'use client'

import { CtaButton } from '@/components/cta-button'

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 block border-t border-slate-800 bg-slate-950/90 px-4 py-3 backdrop-blur-md sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-white">Apex Physique</p>
          <p className="font-mono text-sm text-lime-400">$199</p>
        </div>
        <CtaButton size="md" showArrow={false}>
          Get Instant Access
        </CtaButton>
      </div>
    </div>
  )
}
