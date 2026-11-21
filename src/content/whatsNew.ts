// What's new: real releases only, newest first. Add an entry when something ships; never list planned work here.
// Peter to confirm each entry is live in the app before the site is deployed.
export interface Release {
  id: string;
  date: string; // shown as written, e.g. "November 2026"
  title: string;
  summary: string;
  points: string[];
  audience: 'Everyone' | 'Businesses' | 'Shoppers';
}

export const releases: Release[] = [
  {
    id: 'games-streaks',
    date: 'November 2026',
    audience: 'Everyone',
    title: 'Games: streaks, a weekly league and gentle reminders',
    summary: 'Finish any daily game to keep a Games streak, and see how you rank this week.',
    points: [
      'A streak that counts Word of the Day, Jirani Shop, Afterglow and Daily Sudoku together.',
      'A weekly league that resets every Monday. Names shown are gaming aliases, never real names.',
      'Optional reminders, at most one a day, never at night, and you can pause them from notification settings.',
    ],
  },
  {
    id: 'shop-month',
    date: 'November 2026',
    audience: 'Everyone',
    title: 'Jirani Shop: a month of trading',
    summary: 'Run one shop for 20 trading days, with seasons, rival prices and stock that goes off.',
    points: [
      'One trading day unlocks each day. Missed a day? Catch up in order, never ahead.',
      'Seasons such as school fees, the rains and the festive rush change what sells.',
      'Earn a cosmetic title and badge. Rewards are cosmetic only.',
    ],
  },
  {
    id: 'swahili-saturdays',
    date: 'Coming 5 December 2026',
    audience: 'Everyone',
    title: 'Word of the Day goes Swahili on Saturdays',
    summary: 'From 5 December the Saturday word is a Swahili or Kenyan word, with its meaning shown after you play.',
    points: ['Every other day stays in English.', 'The share card carries a Kenyan flag on Saturdays.'],
  },
];
