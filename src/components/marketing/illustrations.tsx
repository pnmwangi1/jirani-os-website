interface IllustrationProps {
  className?: string;
}

/** Shared base props. Every illustration below reads colors from the
 * current CSS custom properties via Tailwind's arbitrary-value color
 * classes (fill-primary, fill-tenant, etc.) so they automatically
 * adapt between light and dark theme without any illustration-specific
 * dark-mode logic. */

export function PropertyIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 240" fill="none" className={className} role="img" aria-label="Property management illustration">
      <rect x="40" y="90" width="80" height="120" rx="8" className="fill-primary-light" />
      <rect x="130" y="60" width="90" height="150" rx="8" className="fill-primary/20" />
      <rect x="230" y="100" width="60" height="110" rx="8" className="fill-tenant-light" />
      {/* windows */}
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => (
          <rect key={`a-${row}-${col}`} x={54 + col * 34} y={110 + row * 26} width="16" height="16" rx="3" className="fill-primary/40" />
        ))
      )}
      {[0, 1, 2, 3].map((row) =>
        [0, 1].map((col) => (
          <rect key={`b-${row}-${col}`} x={148 + col * 40} y={78 + row * 28} width="18" height="18" rx="3" className="fill-primary/50" />
        ))
      )}
      {[0, 1].map((row) =>
        [0, 1].map((col) => (
          <rect key={`c-${row}-${col}`} x={244 + col * 26} y={118 + row * 30} width="14" height="14" rx="3" className="fill-tenant/50" />
        ))
      )}
      {/* ground line */}
      <rect x="20" y="208" width="280" height="4" rx="2" className="fill-border" />
      {/* location pin accent */}
      <circle cx="160" cy="34" r="16" className="fill-tenant" />
      <path d="M160 20a10 10 0 0 0-10 10c0 7 10 18 10 18s10-11 10-18a10 10 0 0 0-10-10Z" className="fill-tenant" />
      <circle cx="160" cy="30" r="4" fill="white" />
    </svg>
  );
}

export function AccountingIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 240" fill="none" className={className} role="img" aria-label="Accounting and financial reporting illustration">
      <rect x="30" y="30" width="260" height="180" rx="16" className="fill-surface stroke-border" strokeWidth="2" />
      <rect x="54" y="150" width="24" height="40" rx="4" className="fill-primary/30" />
      <rect x="90" y="120" width="24" height="70" rx="4" className="fill-primary/50" />
      <rect x="126" y="90" width="24" height="100" rx="4" className="fill-primary" />
      <rect x="162" y="130" width="24" height="60" rx="4" className="fill-tenant/60" />
      <rect x="198" y="105" width="24" height="85" rx="4" className="fill-tenant" />
      <path d="M54 145 L102 108 L138 122 L186 78 L222 95" className="stroke-success" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="222" cy="95" r="6" className="fill-success" />
      <rect x="54" y="54" width="70" height="10" rx="5" className="fill-border" />
      <rect x="54" y="70" width="40" height="8" rx="4" className="fill-border" />
    </svg>
  );
}

export function CommerceIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 240" fill="none" className={className} role="img" aria-label="Point of sale and commerce illustration">
      <rect x="60" y="60" width="200" height="130" rx="14" className="fill-surface stroke-border" strokeWidth="2" />
      <rect x="60" y="60" width="200" height="34" rx="14" className="fill-primary" />
      <circle cx="76" cy="77" r="4" fill="white" fillOpacity="0.6" />
      <circle cx="90" cy="77" r="4" fill="white" fillOpacity="0.6" />
      <rect x="80" y="110" width="60" height="16" rx="4" className="fill-primary-light" />
      <rect x="80" y="134" width="90" height="10" rx="3" className="fill-border" />
      <rect x="80" y="150" width="70" height="10" rx="3" className="fill-border" />
      <rect x="180" y="106" width="60" height="60" rx="10" className="fill-tenant" />
      <path d="M196 136h28M210 122v28" stroke="white" strokeWidth="4" strokeLinecap="round" />
      {/* receipt */}
      <rect x="230" y="150" width="60" height="80" rx="6" className="fill-surface stroke-border" strokeWidth="2" />
      <rect x="240" y="164" width="40" height="6" rx="3" className="fill-border" />
      <rect x="240" y="176" width="30" height="6" rx="3" className="fill-border" />
      <rect x="240" y="188" width="36" height="6" rx="3" className="fill-border" />
      <rect x="240" y="206" width="24" height="8" rx="4" className="fill-success" />
    </svg>
  );
}

export function SecurityIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 240" fill="none" className={className} role="img" aria-label="Security and access control illustration">
      <path
        d="M160 30 L240 60 V120 C240 165 205 195 160 210 C115 195 80 165 80 120 V60 Z"
        className="fill-primary-light stroke-primary"
        strokeWidth="2"
      />
      <path
        d="M160 50 L222 74 V120 C222 155 197 178 160 190 C123 178 98 155 98 120 V74 Z"
        className="fill-primary/15"
      />
      <rect x="138" y="112" width="44" height="36" rx="6" className="fill-primary" />
      <path d="M146 112v-14a14 14 0 0 1 28 0v14" className="stroke-primary" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="160" cy="128" r="5" fill="white" />
      <rect x="157" y="128" width="6" height="12" rx="2" fill="white" />
    </svg>
  );
}

export function CommunicationIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 240" fill="none" className={className} role="img" aria-label="Notifications and communication illustration">
      <rect x="40" y="50" width="160" height="110" rx="16" className="fill-surface stroke-border" strokeWidth="2" />
      <path d="M60 160 L60 185 L95 160 Z" className="fill-surface stroke-border" strokeWidth="2" />
      <rect x="60" y="74" width="120" height="10" rx="5" className="fill-primary/40" />
      <rect x="60" y="94" width="90" height="8" rx="4" className="fill-border" />
      <rect x="60" y="110" width="100" height="8" rx="4" className="fill-border" />
      <rect x="150" y="100" width="150" height="90" rx="16" className="fill-primary" />
      <path d="M170 190 L170 210 L200 190 Z" className="fill-primary" />
      <rect x="172" y="122" width="110" height="10" rx="5" fill="white" fillOpacity="0.85" />
      <rect x="172" y="142" width="80" height="8" rx="4" fill="white" fillOpacity="0.5" />
      <rect x="172" y="158" width="95" height="8" rx="4" fill="white" fillOpacity="0.5" />
      <circle cx="270" cy="90" r="16" className="fill-tenant" />
      <rect x="264" y="83" width="3" height="14" fill="white" />
      <rect x="257" y="89" width="17" height="3" fill="white" />
    </svg>
  );
}

export function AutomationIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 240" fill="none" className={className} role="img" aria-label="Workflow and automation illustration">
      <circle cx="70" cy="70" r="26" className="fill-primary-light stroke-primary" strokeWidth="2" />
      <circle cx="160" cy="130" r="30" className="fill-primary" />
      <circle cx="250" cy="70" r="26" className="fill-tenant-light stroke-tenant" strokeWidth="2" />
      <circle cx="160" cy="200" r="22" className="fill-success-light stroke-success" strokeWidth="2" />
      <path d="M92 82 L140 116" className="stroke-border" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
      <path d="M228 82 L180 116" className="stroke-border" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
      <path d="M160 160 L160 178" className="stroke-border" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
      <path d="M62 62 l8 8 14-14" className="stroke-primary" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M152 122 l6 6 12-12" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M242 62 l8 8 14-14" className="stroke-tenant" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M152 192 l6 6 12-12" className="stroke-success" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DataIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 240" fill="none" className={className} role="img" aria-label="Data and reporting illustration">
      <rect x="30" y="40" width="130" height="90" rx="12" className="fill-surface stroke-border" strokeWidth="2" />
      <circle cx="70" cy="85" r="28" className="fill-none stroke-primary" strokeWidth="10" strokeDasharray="120 176" strokeLinecap="round" transform="rotate(-90 70 85)" />
      <circle cx="70" cy="85" r="28" className="fill-none stroke-tenant" strokeWidth="10" strokeDasharray="56 176" strokeDashoffset="-120" strokeLinecap="round" transform="rotate(-90 70 85)" />
      <rect x="118" y="70" width="30" height="8" rx="4" className="fill-border" />
      <rect x="118" y="86" width="30" height="8" rx="4" className="fill-border" />
      <rect x="30" y="150" width="260" height="60" rx="12" className="fill-surface stroke-border" strokeWidth="2" />
      <rect x="46" y="168" width="60" height="26" rx="4" className="fill-primary-light" />
      <rect x="116" y="178" width="60" height="16" rx="4" className="fill-tenant-light" />
      <rect x="186" y="162" width="60" height="32" rx="4" className="fill-success-light" />
      <path d="M46 194 L106 194 M116 194 L176 194 M186 194 L246 194" className="stroke-border" strokeWidth="2" />
      <rect x="180" y="40" width="110" height="90" rx="12" className="fill-primary" />
      <rect x="196" y="58" width="78" height="9" rx="4" fill="white" fillOpacity="0.85" />
      <rect x="196" y="76" width="50" height="7" rx="3" fill="white" fillOpacity="0.5" />
      <path d="M196 108 L214 96 L232 104 L252 84 L270 92" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function InventoryIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 240" fill="none" className={className} role="img" aria-label="Inventory and stock management illustration">
      <rect x="50" y="110" width="70" height="70" rx="8" className="fill-primary-light stroke-primary" strokeWidth="2" />
      <path d="M50 128h70M85 110v70" className="stroke-primary" strokeWidth="2" />
      <rect x="130" y="80" width="70" height="100" rx="8" className="fill-primary" />
      <path d="M130 104h70" className="stroke-surface" strokeWidth="2" />
      <rect x="210" y="120" width="60" height="60" rx="8" className="fill-tenant-light stroke-tenant" strokeWidth="2" />
      <path d="M210 136h60M240 120v60" className="stroke-tenant" strokeWidth="2" />
      <rect x="30" y="190" width="260" height="6" rx="3" className="fill-border" />
      <circle cx="245" cy="70" r="18" className="fill-success" />
      <path d="M237 70 l6 6 12-12" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PricingIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 240" fill="none" className={className} role="img" aria-label="Pricing plans illustration">
      {/* three plan cards, the middle one raised/highlighted - a direct, literal "choose your plan" visual, unlike a generic data chart */}
      <rect x="30" y="90" width="80" height="120" rx="12" className="fill-surface stroke-border" strokeWidth="2" />
      <rect x="120" y="60" width="80" height="150" rx="12" className="fill-primary" />
      <rect x="210" y="90" width="80" height="120" rx="12" className="fill-surface stroke-border" strokeWidth="2" />
      {/* left card contents */}
      <rect x="44" y="106" width="40" height="8" rx="4" className="fill-border" />
      <rect x="44" y="122" width="30" height="14" rx="4" className="fill-ink-muted/30" />
      <rect x="44" y="150" width="52" height="6" rx="3" className="fill-border" />
      <rect x="44" y="164" width="52" height="6" rx="3" className="fill-border" />
      {/* middle (highlighted) card contents */}
      <rect x="134" y="76" width="40" height="8" rx="4" fill="white" fillOpacity="0.85" />
      <rect x="134" y="92" width="34" height="16" rx="4" fill="white" fillOpacity="0.95" />
      <rect x="134" y="122" width="52" height="6" rx="3" fill="white" fillOpacity="0.6" />
      <rect x="134" y="136" width="52" height="6" rx="3" fill="white" fillOpacity="0.6" />
      <rect x="134" y="150" width="52" height="6" rx="3" fill="white" fillOpacity="0.6" />
      <rect x="134" y="176" width="52" height="18" rx="9" fill="white" fillOpacity="0.2" />
      {/* right card contents */}
      <rect x="224" y="106" width="40" height="8" rx="4" className="fill-border" />
      <rect x="224" y="122" width="30" height="14" rx="4" className="fill-ink-muted/30" />
      <rect x="224" y="150" width="52" height="6" rx="3" className="fill-border" />
      <rect x="224" y="164" width="52" height="6" rx="3" className="fill-border" />
      {/* a small "star" badge over the highlighted plan */}
      <circle cx="160" cy="50" r="16" className="fill-tenant" />
      <path d="M160 42l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="white" />
    </svg>
  );
}

export function MobileAppIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 240" fill="none" className={className} role="img" aria-label="Mobile app illustration">
      <rect x="120" y="30" width="90" height="180" rx="20" className="fill-ink" />
      <rect x="128" y="46" width="74" height="140" rx="4" className="fill-primary-light" />
      <circle cx="165" cy="200" r="6" className="fill-surface" />
      <rect x="145" y="62" width="50" height="8" rx="4" className="fill-primary/40" />
      <rect x="145" y="80" width="50" height="34" rx="6" className="fill-surface" />
      <rect x="145" y="122" width="24" height="24" rx="6" className="fill-tenant-light" />
      <rect x="173" y="122" width="24" height="24" rx="6" className="fill-success-light" />
      <circle cx="70" cy="70" r="20" className="fill-tenant-light" />
      <circle cx="250" cy="150" r="24" className="fill-success-light" />
      <circle cx="60" cy="170" r="14" className="fill-primary/20" />
    </svg>
  );
}
