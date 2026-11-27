import type { ProductPageData } from '../components/marketing/ProductPage';

export const budgetPage: ProductPageData = {
  seo: {
    title: 'My budget: M-Pesa budget app',
    description: 'My budget in the Jirani app shows what is safe to spend today. Import your M-Pesa statement, plan bills, goals and debts, set shop limits, plan your shopping and share a household budget. Private by default.',
    path: '/budget',
  },
  badge: 'My budget',
  title: 'Know what is safe to spend today.',
  intro: 'A budget built for everyday life in Kenya. Import your M-Pesa statement and see where the money went, plan your bills, goals and debts, and get one number that tells you how much you can spend today and still reach the end of the month.',
  facts: ['Import your M-Pesa statement', 'Bills, goals and debts in one place', 'Private to you unless you invite someone', 'Shared budgets for a home'],
  cta: { label: 'Open My budget', cta: 'budget-hero-open' },
  hero: [
    { id: 'budget-safe', alt: 'My budget showing the safe amount to spend each day, how much of the month has passed and money in, spent and left', caption: 'Safe to spend' },
    { id: 'budget-categories', alt: 'Budget pockets for rent, food, transport, airtime and data, electricity and water, school, family support, health, giving and fun', caption: 'Pockets' },
  ],
  sections: [
    {
      title: 'One number for today',
      text: '“Safe to spend today” looks at the money you have, what you have spent and the days left, then keeps your bills, savings and debts set aside.',
      points: [
        'See how far through the month you are against how much of your money is used.',
        'A plain status such as “A bit tight” tells you when to slow down.',
        'Money in, spent and left, all at a glance.',
        'Your month starts on your pay day, so it follows how you are actually paid.',
      ],
      screen: { id: 'budget-safe', alt: 'The safe to spend today card', caption: 'Safe to spend today' },
    },
    {
      title: 'Your M-Pesa statement, sorted for you',
      text: 'Import your M-Pesa statement as a PDF or CSV, or paste your M-Pesa messages, and Jirani puts the payments into your pockets.',
      points: [
        'No typing every payment by hand.',
        'Anything Jirani cannot place goes to a “to sort” list, so you decide where it belongs.',
        'See your month as a short story, then a full report you can download.',
        'Export your budget as CSV or PDF whenever you want a copy.',
      ],
    },
    {
      title: 'Pockets for every part of life',
      text: 'Start with a Kenyan household set of pockets, or a simple 50/30/20 split, then give each pocket its own amount for the month.',
      points: [
        'Rent, food, transport, airtime and data, electricity and water, school and learning, family support, health, giving and fun.',
        'Each pocket shows how much is spent against what you planned, and tells you early when it is nearly used.',
        'Tap a pocket to see what went into it.',
      ],
      screen: { id: 'budget-categories', alt: 'Budget pockets', caption: 'Pockets' },
    },
    {
      title: 'Bills, goals and debts',
      text: 'Money that is already spoken for is set aside, so it never surprises you.',
      points: [
        'Recurring bills you can pay, skip or repeat, and income that comes in every month.',
        'Savings goals, with round-up and contributions, so a goal grows in small steps.',
        'Debts you are paying off, with each payment recorded.',
        '“What you owe” in one list, including balances you owe to Jirani shops.',
      ],
    },
    {
      title: 'Plan the shop before you go',
      text: 'Write a shopping list, see the plan, and keep each shop within a limit you set.',
      points: [
        'Shopping lists you can download as a PDF.',
        'A plan for the trip before you leave home.',
        'A spending limit for each shop, so one place does not eat the month.',
      ],
    },
    {
      title: 'A budget you can share at home',
      text: 'Keep My budget for yourself, and add a shared budget for the household.',
      points: [
        'A shared budget is clearly marked, and everything in it is visible to the people you invite.',
        'Invite by phone number, give each person a role, and approve what needs approving.',
        'Split a cost and settle up. Every entry shows who added it.',
        'Your own budget stays yours.',
      ],
      screen: { id: 'budget-shared', alt: 'A shared household budget', caption: 'Shared: home' },
    },
    {
      title: 'Private, and your choice',
      text: 'You switch My budget on yourself, after a clear consent screen.',
      points: [
        'It is private to you unless you invite someone.',
        'Hide amounts on screen when others are around.',
        'Export your data, or delete it, from inside the app.',
        'Counting how the feature is used is optional, and you can say no.',
      ],
    },
  ],
  faqs: [
    { id: 'who', question: 'Who can use My budget?', answer: 'Anyone with a Jirani account. You do not need a business.' },
    { id: 'private', question: 'Is my budget private?', answer: 'Yes. My budget is yours. A shared budget is shared only with the people you invite, and it is clearly marked as shared.' },
    { id: 'free', question: 'Is My budget free?', answer: 'Yes. My budget is free to use with your Jirani account.' },
    { id: 'mpesa', question: 'Can it read my M-Pesa statement?', answer: 'Yes. Import your M-Pesa statement as a PDF or CSV, or paste your M-Pesa messages. Payments are sorted into your pockets, and anything unclear goes to a list for you to sort.' },
    { id: 'month', question: 'Does the month start on the 1st?', answer: 'You can run it on your own dates. The app shows the exact range, for example 5 November to 4 December, so it can follow your pay day.' },
  ],
  closing: { title: 'Start with one number.', text: 'Open My budget, add what comes in, and see what is safe to spend today.' },
};
