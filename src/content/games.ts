import type { ProductPageData } from '../components/marketing/ProductPage';

// Facts here match the app. Swahili Saturdays start on 5 December 2026. Rewards are cosmetic only: there is no money in any game.
export const gamesPage: ProductPageData = {
  seo: {
    title: 'Games',
    description: 'Daily games in the Jirani app: Word of the Day with Swahili Saturdays, Jirani Shop, Afterglow, Daily Sudoku and friendly duels. Free to play, with streaks and a weekly league.',
    path: '/games',
  },
  badge: 'Games',
  title: 'A short break that is actually fun.',
  intro: 'Five games inside the Jirani app. Play for a few minutes, keep your streak, and challenge a friend. Nothing to pay and no money at stake.',
  facts: ['Free to play', 'Rewards are cosmetic only', 'New puzzles every day', 'Play with a friend by link'],
  cta: { label: 'Play in the app', cta: 'games-hero-play' },
  hero: [
    { id: 'games-hub', alt: 'The Jirani games hub with Word of the Day, Jirani Shop, Afterglow, Daily Sudoku and Duels', caption: 'The games hub' },
    { id: 'customer-home', alt: 'Jirani home screen with a Take a break card showing a one day streak', caption: 'Your streak on Home' },
  ],
  sections: [
    {
      title: 'Word of the Day',
      text: 'Five letters, six tries, and the same word for everyone.',
      points: [
        'On Saturdays from 5 December 2026 the word is Swahili or Kenyan, and its meaning shows after you play.',
        'Every other day is in English.',
        'Want more? Endless practice never runs out.',
      ],
      screen: { id: 'games-hub', alt: 'Word of the Day on the games hub', caption: 'Word of the Day' },
    },
    {
      title: 'Jirani Shop: run a shop, beat the week',
      text: 'Set your prices, buy your stock and see how the week goes. It is a game, and it teaches how a real shop thinks.',
      points: [
        'Seasons such as school fees, the rains and the festive rush change what sells.',
        'Rival prices, stock that goes off, and customers who ask for credit.',
        'A month challenge of 20 trading days, one a day. Missed a day? Catch up in order, never ahead.',
        'Earn a cosmetic title and badge. Business owners get tips that link to the matching tool in the app.',
      ],
    },
    {
      title: 'Afterglow, Daily Sudoku and Duels',
      text: 'Three more ways to take a break.',
      points: [
        'Afterglow: a daily run with a best trail to beat, and an endless mode.',
        'Daily Sudoku: today’s shared puzzle, plus practice puzzles.',
        'Duels: challenge a friend to the same puzzle. Send the invite link on WhatsApp and each of you gets one attempt.',
      ],
    },
    {
      title: 'Streaks, a weekly league and gentle reminders',
      text: 'Finish any daily game to keep your Games streak going. Every Monday a fresh league starts.',
      points: [
        'Points are simple: finishing a game counts, doing well adds a little. Practice and duels do not count.',
        'Your gaming alias is shown, never your real name.',
        'Reminders are optional: at most one a day, never at night, and you can pause them from notification settings.',
      ],
    },
  ],
  faqs: [
    { id: 'free', question: 'Is it really free?', answer: 'Yes. There is nothing to buy, and there is no money in any game. Rewards are cosmetic, such as titles and badges.' },
    { id: 'account', question: 'Do I need a business to play?', answer: 'No. Anyone with a Jirani account can play. Business owners also get tips in Jirani Shop that link to the matching tool in the app.' },
    { id: 'name', question: 'Will other players see my name?', answer: 'No. Leagues and duels show your gaming alias, not your real name.' },
    { id: 'reminders', question: 'Will the app nag me to play?', answer: 'No. Reminders are optional: at most one a day, none between 9pm and 8am, and only when a streak is at risk or a duel is waiting. You can pause them any time in notification settings.' },
    { id: 'invite', question: 'A friend sent me a duel link. What now?', answer: 'Open it. If the app is installed it opens straight to the challenge. If not, it takes you to Google Play and the challenge is waiting after you sign up.' },
  ],
  closing: { title: 'Take five minutes.', text: 'Open the app, pick a game, and keep your streak going.' },
};
