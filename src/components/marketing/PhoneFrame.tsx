interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
}

/** A realistic phone device frame for the real Jirani OS app screenshots
 * — distinct from MockupFrame (browser chrome, for conceptual/placeholder
 * dashboard views). Screenshots are real product images, not
 * illustrations, so this earns a more literal device frame. */
export function PhoneFrame({ src, alt, className = '' }: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[260px] ${className}`}>
      <div className="relative rounded-[2.2rem] border-[6px] border-ink bg-ink p-1 shadow-soft-lg">
        <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-ink" />
        <div className="overflow-hidden rounded-[1.7rem]">
          <img src={src} alt={alt} className="block w-full" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
