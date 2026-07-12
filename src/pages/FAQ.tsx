import { useSeo } from '../lib/seo';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Accordion } from '../components/ui/Accordion';
import { Reveal } from '../components/marketing/Reveal';
import { CTASection } from '../components/marketing/CTASection';
import { faqs } from '../content/faq';

const categories = Array.from(new Set(faqs.map((f) => f.category)));

export default function FAQ() {
  useSeo({
    title: 'FAQ',
    description: 'Answers to common questions about Jirani OS — getting started, pricing, security, and support.',
    path: '/faq',
  });

  return (
    <>
      <Section className="pb-12">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="primary">FAQ</Badge>
            <h1 className="mt-4 text-4xl font-extrabold text-ink md:text-5xl">Questions, answered.</h1>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container mx-auto max-w-3xl space-y-12">
          {categories.map((cat, ci) => (
            <Reveal key={cat} delay={ci * 0.05}>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-wide text-primary">{cat}</h2>
              <Accordion items={faqs.filter((f) => f.category === cat).map((f) => ({ id: f.id, question: f.question, answer: f.answer }))} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="container">
          <CTASection title="Still have a question?" subtitle="Reach out directly — a real person will get back to you." />
        </div>
      </Section>
    </>
  );
}
