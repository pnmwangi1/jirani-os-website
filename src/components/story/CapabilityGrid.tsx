import { BeforeWith } from './BeforeWith';
import { Reveal } from '../marketing/Reveal';
import { capabilities } from '../../content/capabilities';

export function CapabilityGrid({ ids, heading = true }: { ids?: string[]; heading?: boolean }) {
  const list = ids ? capabilities.filter((c) => ids.includes(c.id)) : capabilities;
  return (
    <div>
      {heading && (
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Everything the business needs, in one app.</h2>
          <p className="mt-3 text-base text-ink-muted">Tap Before or With Jirani on any card to see the difference.</p>
        </Reveal>
      )}
      <div className={`${heading ? 'mt-12' : ''} grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3`}>
        {list.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 0.06}>
            <BeforeWith kind={c.kind} title={c.title} before={c.before} withJirani={c.withJirani} bullets={c.bullets} plus={c.plus} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
