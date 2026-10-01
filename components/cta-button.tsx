'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCheckout } from '@/components/checkout-provider'

type CtaButtonProps = {
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showArrow?: boolean
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm sm:text-base',
  lg: 'h-14 px-6 sm:px-8 text-base sm:text-lg',
}

export function CtaButton({
  children = 'Start Your 12-Week Transformation — $199',
  size = 'lg',
  className,
  showArrow = true,
}: CtaButtonProps) {
  const { openCheckout } = useCheckout()

  return (
    <motion.button
      type="button"
      onClick={openCheckout}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg bg-lime-500 font-semibold text-slate-950 shadow-[0_0_24px_rgba(132,204,22,0.25)] transition-colors hover:bg-lime-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        sizes[size],
        className,
      )}
    >
      <span className="text-balance">{children}</span>
      {showArrow && <ArrowRight className="size-4 shrink-0" aria-hidden="true" />}
    </motion.button>
  )
}
