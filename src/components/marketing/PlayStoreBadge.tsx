import { PLAY_STORE_URL } from '../../lib/constants';

interface PlayStoreBadgeProps {
  className?: string;
}

// Item (explicit request — "add a way to download the app"): the
// official Google-hosted badge asset, linked directly rather than
// copied in, so it always renders Google's current, correctly
// licensed artwork instead of a static image we'd have to keep in
// sync ourselves.
export function PlayStoreBadge({ className = '' }: PlayStoreBadgeProps) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Jirani OS on Google Play"
      className={`inline-block ${className}`}
    >
      <img
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        alt="Get it on Google Play"
        className="h-14 w-auto"
      />
    </a>
  );
}
