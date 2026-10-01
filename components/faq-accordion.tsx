import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Reveal, SectionHeading } from '@/components/reveal'

const faqs = [
  {
    q: 'I work 60+ hours a week. Do I really have time for this?',
    a: 'Yes. The program is built for exactly that. Four 45-minute sessions per week, with a 3-day option for heavy travel weeks. Most clients train before work and are done before their first call.',
  },
  {
    q: 'What equipment do I need?',
    a: 'A standard commercial gym is ideal. Every session also includes a hotel-gym and a dumbbells-only variation, so you never miss a workout while traveling.',
  },
  {
    q: 'I have an old injury. Is this safe for me?',
    a: 'Every movement has regressions and joint-friendly swaps demonstrated in the video library. If you have an active injury, get medical clearance first and flag it in your first check-in so I can adjust.',
  },
  {
    q: 'Do I have to follow a strict meal plan?',
    a: 'No. You get flexible macro targets and a playbook for restaurants, business dinners, and travel. Eat foods you enjoy, just in the right amounts.',
  },
  {
    q: 'I have never lifted seriously before. Is this too advanced?',
    a: 'Weeks 1-2 are a structured foundation phase that teaches every lift with clear technique cues. Beginners consistently see the fastest results in the program.',
  },
  {
    q: 'How and when do I get access?',
    a: 'Immediately. After checkout you receive an email with your portal login. You can start Week 1 today on desktop or the mobile web app, and you keep access forever.',
  },
]

export function FaqAccordion() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 border-t border-slate-800/80 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Straight answers to real objections." />
        <Reveal className="mt-12">
          <Accordion className="gap-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="rounded-xl border border-slate-800/80 bg-slate-900/50 px-5 backdrop-blur-md transition-colors data-open:border-lime-500/40"
              >
                <AccordionTrigger className="py-5 text-base font-semibold text-white hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-3 leading-relaxed text-slate-400">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
