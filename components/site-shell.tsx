import { CheckoutProvider } from '@/components/checkout-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import { MobileStickyBar } from '@/components/mobile-sticky-bar'

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <CheckoutProvider>
      <div id="top" className="relative min-h-screen overflow-x-clip bg-slate-950 text-slate-400">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[720px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(132,204,22,0.12),transparent)]"
        />
        <Navbar />
        <main className="relative pb-20 sm:pb-0">{children}</main>
        <Footer />
        <BackToTop />
        <MobileStickyBar />
      </div>
    </CheckoutProvider>
  )
}
