// jiranios.com/d/:code — the page a WhatsApp duel invite lands on when the app is NOT installed (or the link is opened in a browser).
// Paste into the website repo next to Refer.tsx and route it at /d/:code. If the app IS installed, Android opens the app directly
// (App Links) and this page never shows. Shows only the challenger's nickname and the game; nothing else is public.
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL, PLAY_STORE_URL } from '../lib/constants';

const API = API_BASE_URL;
const PLAY = PLAY_STORE_URL;

type Preview = { game: string; game_name: string; difficulty: string | null; best_of: number; challenger: string; open: boolean; status: string };
const EMOJI: Record<string, string> = { word: '🔤', duka: '🏪', sudoku: '🔢', afterglow: '✨' };

export default function Duel() {
  const { code = '' } = useParams();
  const [p, setP] = useState<Preview | null>(null);
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    fetch(`${API}/public/duel/${encodeURIComponent(code)}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((j) => setP(j.data))
      .catch(() => setMissing(true));
  }, [code]);
  // The Play Store keeps this value and the app reads it on first open, so the challenge is waiting after signup.
  // Opens the installed app straight from this page (Android Chrome / Samsung Internet); if the app is not installed the browser
  // falls back to the Play Store. Works even when App Links are not verified, because it names the app's package.
  const openApp = `intent://jiranios.com/d/${encodeURIComponent(String(code).toUpperCase())}#Intent;scheme=https;package=com.jiranios.app;S.browser_fallback_url=${encodeURIComponent(`${PLAY}${PLAY.includes('?') ? '&' : '?'}referrer=${encodeURIComponent(`duel_${String(code).toUpperCase()}`)}`)};end`;
  const store = `${PLAY}${PLAY.includes('?') ? '&' : '?'}referrer=${encodeURIComponent(`duel_${String(code).toUpperCase()}`)}`;
  const line = missing ? 'This challenge link is not valid any more.'
    : !p ? 'Loading the challenge…'
    : p.open ? `${p.challenger} challenged you to ${p.game_name}${p.difficulty ? ` (${p.difficulty})` : ''}${p.best_of === 3 ? ', best of 3' : ''}.`
    : p.status === 'expired' ? `${p.challenger}'s challenge has run out of time. Ask for a new one.`
    : `${p.challenger}'s challenge has already been taken. Ask for a new one.`;
  return (
    <main style={{ maxWidth: 440, margin: '0 auto', padding: '48px 20px', fontFamily: 'system-ui, sans-serif', textAlign: 'center' }}>
      <div style={{ fontSize: 56 }}>{p ? EMOJI[p.game] || '🎮' : '🎮'}</div>
      <h1 style={{ fontSize: 24, margin: '12px 0 8px' }}>A Jirani duel</h1>
      <p style={{ fontSize: 17, lineHeight: 1.5 }}>{line}</p>
      <p style={{ fontSize: 14, color: '#555' }}>Same puzzle, one try each, best result wins. Just for fun: no money or prizes.</p>
      {(!p || p.open) && !missing && (
        <>
          <a href={openApp} data-testid="open-app" style={{ display: 'block', margin: '24px 0 10px', padding: '14px 18px', borderRadius: 12, background: '#4F46E5', color: '#fff', fontWeight: 700, textDecoration: 'none' }}>Open in the Jirani app</a>
          <a href={store} style={{ display: 'block', margin: '0 0 10px', padding: '12px 18px', borderRadius: 12, border: '1px solid #4F46E5', color: '#4F46E5', fontWeight: 700, textDecoration: 'none' }}>Don't have it? Get the app</a>
          <p style={{ fontSize: 13, color: '#555' }}>Tap “Open in the Jirani app”. If the app is not installed you will be taken to the Play Store, and your challenge will be waiting after you sign up.</p>
        </>
      )}
    </main>
  );
}
