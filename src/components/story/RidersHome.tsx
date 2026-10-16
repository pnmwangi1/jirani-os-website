import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../marketing/Reveal';
import { RiderLinks } from './RiderLinks';
import { RateCalculator } from './RateCalculator';

export function RidersHome() {
  return (
    <div>
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Riders you trust, at a price you see first.</h2>
        <p className="mt-3 text-base text-ink-muted">Every rider sets their own rate. Businesses and customers choose who they trust, and Jirani OS does the rest.</p>
      </Reveal>
      <div className="mt-10"><RiderLinks /></div>
      <div className="mt-10"><RateCalculator compact /></div>
      <Reveal delay={0.1} className="mt-6 text-center">
        <Link to="/riders" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">How riders earn <ArrowRight size={15} /></Link>
      </Reveal>
    </div>
  );
}
