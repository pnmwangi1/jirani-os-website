import type { ProductPageData } from '../components/marketing/ProductPage';

export const budgetPage: ProductPageData = {
  seo: {
    title: 'My budget',
    description: 'My budget in the Jirani app shows what is safe to spend today, tracks rent, food, transport, airtime, school fees and more, and lets you share a household budget with people you invite.',
    path: '/budget',
  },
  badge: 'My budget',
  title: 'Know what is safe to spend today.',
  intro: 'A simple budget for everyday life in Kenya: rent, food, transport, airtime, school fees, family support and fun. One number tells you how much you can spend today and still reach the end of the month.',
  facts: ['Built for a month that starts on your pay day', 'Private to you unless you invite someone', 'Shared budgets for a home'],
  cta: { label: 'Open My budget', cta: 'budget-hero-open' },
  hero: [
    { id: 'budget-safe', alt: 'My budget showing the safe amount to spend each day, how much of the month has passed and money in, spent and left', caption: 'Safe to spend' },
    { id: 'budget-categories', alt: 'Budget categories as rings: rent, food, transport, airtime and data, electricity and water, school, family support, health, giving and fun', caption: 'Categories' },
  ],
  sections: [
    {
      title: 'One number for today',
      text: '“Safe to spend today” looks at the money you have, what you have spent and the days left, then keeps bills, savings and debts set aside.',
      points: [
        'See how far through the month you are against how much of your money is used.',
        'A plain status such as “A bit tight” tells you when to slow down.',
        'Money in, spent and left, all at a glance.',
      ],
      screen: { id: 'budget-safe', alt: 'The safe to spend today card', caption: 'Safe to spend today' },
    },
    {
      title: 'Your categories, with rings',
      text: 'Give each part of life its own amount for the month and watch it fill.',
      points: [
        'Rent, food, transport, airtime and data, electricity and water, school and learning, family support, health, giving and fun.',
        'Each ring says “On track” or “Nearly there” so you know before you overspend.',
        'Tap a category to see what went into it, and sort anything that has not been placed yet.',
      ],
      screen: { id: 'budget-categories', alt: 'Budget category rings', caption: 'Categories' },
    },
    {
      title: 'A budget you can share at home',
      text: 'Keep My budget for yourself, and add a shared budget for the household.',
      points: [
        'A shared budget is clearly marked, and everything in it is visible to the people you invite.',
        'Your own budget stays yours.',
        'See what you owe, money coming in, your month and your year, and plan a shopping trip before you go.',
      ],
      screen: { id: 'budget-shared', alt: 'A shared household budget', caption: 'Shared: home' },
    },
  ],
  faqs: [
    { id: 'who', question: 'Who can use My budget?', answer: 'Anyone with a Jirani account. You do not need a business.' },
    { id: 'private', question: 'Is my budget private?', answer: 'Yes. My budget is yours. A shared budget is shared only with the people you invite, and it is clearly marked as shared.' },
    { id: 'month', question: 'Does the month start on the 1st?', answer: 'You can run it on your own dates. The app shows the exact range, for example 5 November to 4 December, so it can follow your pay day.' },
  ],
  closing: { title: 'Start with one number.', text: 'Open My budget, add what comes in, and see what is safe to spend today.' },
};
