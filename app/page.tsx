import { SiteShell } from '@/components/site-shell'
import { HeroSection } from '@/components/hero-section'
import { SocialProofTicker } from '@/components/social-proof-ticker'
import { FeaturesGrid } from '@/components/features-grid'
import { SocialProofTabs } from '@/components/social-proof-tabs'
import { SuccessStories } from '@/components/success-stories'
import { PricingCard } from '@/components/pricing-card'
import { FaqAccordion } from '@/components/faq-accordion'

export default function Page() {
  return (
    <SiteShell>
      <HeroSection />
      <SocialProofTicker />
      <FeaturesGrid />
      <SocialProofTabs />
      <SuccessStories />
      <PricingCard />
      <FaqAccordion />
    </SiteShell>
  )
}
