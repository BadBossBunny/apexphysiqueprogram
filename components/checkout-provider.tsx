'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { CheckoutModal } from '@/components/checkout-modal'

type CheckoutContextValue = {
  openCheckout: () => void
}

const CheckoutContext = createContext<CheckoutContextValue | null>(null)

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const openCheckout = useCallback(() => setOpen(true), [])
  const value = useMemo(() => ({ openCheckout }), [openCheckout])

  return (
    <CheckoutContext.Provider value={value}>
      {children}
      <CheckoutModal open={open} onOpenChange={setOpen} />
    </CheckoutContext.Provider>
  )
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext)
  if (!ctx) throw new Error('useCheckout must be used within CheckoutProvider')
  return ctx
}
