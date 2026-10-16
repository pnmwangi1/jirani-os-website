// The Jirani OS wordmark. Vector, so it stays sharp at any size; the light and dark versions swap with the theme.
export function Logo({ className = 'h-8' }: { className?: string }) {
  return (
    <>
      <img src="/jirani-os-light.svg" alt="Jirani OS" className={`${className} w-auto dark:hidden`} />
      <img src="/jirani-os-dark.svg" alt="" aria-hidden="true" className={`${className} hidden w-auto dark:block`} />
    </>
  );
}
