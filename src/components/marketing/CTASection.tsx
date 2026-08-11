import { ArrowRight } from 'lucide-react';
import { LinkButton, AnchorButton } from '../ui/Button';
import { Reveal } from './Reveal';
import { APP_URL } from '../../lib/constants';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = 'Ready to run your business from one place?',
  subtitle = 'Talk to us about what you are currently juggling — we will show you exactly how Jirani OS replaces it.',
}: CTASectionProps) {
  return (
    <Reveal>
      <div className="rounded-3xl bg-primary px-8 py-14 text-center md:px-16 md:py-20">
        <h2 className="mx-auto max-w-xl text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/75">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <AnchorButton href={APP_URL} target="_blank" rel="noopener noreferrer" size="lg" variant="invert">
            Start your 7-day free trial <ArrowRight size={16} />
          </AnchorButton>
          <LinkButton to="/contact" size="lg" variant="ghost" className="!text-white hover:bg-white/10">
            Talk to sales
          </LinkButton>
        </div>
      </div>
    </Reveal>
  );
}
