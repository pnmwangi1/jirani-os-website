import { PhoneFrame } from './PhoneFrame';
import { Reveal } from './Reveal';
import type { AppScreenshot } from '../../content/screenshots';

/** Shows a curated set of real screenshots in a gently staggered row —
 * alternating vertical offsets so it reads as a natural arrangement
 * rather than a flat grid, echoing the tilted-card language established
 * by the hero's ConvergenceVisual. */
export function ScreenshotShowcase({ screenshots }: { screenshots: AppScreenshot[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
      {screenshots.map((shot, i) => (
        <Reveal key={shot.src} delay={i * 0.05} className={i % 2 === 1 ? 'sm:mt-8' : ''}>
          <PhoneFrame src={shot.src} alt={shot.alt} caption={shot.caption} />
        </Reveal>
      ))}
    </div>
  );
}
