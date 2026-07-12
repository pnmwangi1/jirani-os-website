import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const options = [
  { value: 'light' as const, icon: Sun, label: 'Light' },
  { value: 'system' as const, icon: Monitor, label: 'System' },
  { value: 'dark' as const, icon: Moon, label: 'Dark' },
];

export function ThemeToggle() {
  const { preference, setPreference } = useTheme();

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border bg-surface p-0.5" role="radiogroup" aria-label="Theme preference">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          role="radio"
          aria-checked={preference === value}
          aria-label={label}
          onClick={() => setPreference(value)}
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
            preference === value ? 'bg-primary text-white' : 'text-ink-muted hover:text-ink'
          }`}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
}
