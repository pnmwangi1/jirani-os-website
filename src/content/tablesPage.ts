import type { ProductPageData } from '../components/marketing/ProductPage';

export const tablesPage: ProductPageData = {
  seo: {
    title: 'Tables and kitchen',
    description: 'Run a bar, restaurant or café on Jirani OS: tables and floor, reservations, kitchen tickets, walk-in, takeaway and delivery orders, waiters, and a till that keeps working offline.',
    path: '/tables',
  },
  badge: 'Bars, restaurants and cafés',
  title: 'Every table, every ticket, one screen.',
  intro: 'See which tables are free and which are seated, who is serving them, and what the kitchen is cooking. Walk-ins, takeaway and delivery all land in the same place.',
  facts: ['Tables, floor and reservations', 'Kitchen tickets', 'Walk-in, takeaway and delivery', 'Keeps selling offline'],
  cta: { label: 'Start free for 7 days', cta: 'tables-hero-start' },
  hero: [
    { id: 'tables', alt: 'Tables screen for a bar and restaurant showing seats, waiters and late walk-in orders', caption: 'Tables' },
    { id: 'pos', alt: 'The till with products, stock counts and held sales', caption: 'The till' },
  ],
  sections: [
    {
      title: 'See the floor at a glance',
      text: 'Each table shows its seats, whether it is available or seated, and which waiter has it.',
      points: [
        'Filter by free or seated, or search for a table by name.',
        'Open a table’s timeline to see what happened and when.',
        'Reservations and a floor view sit alongside the tables list.',
      ],
      screen: { id: 'tables', alt: 'The tables list with waiters and timelines', caption: 'Tables and waiters' },
    },
    {
      title: 'Orders from every door',
      text: 'Walk-in, takeaway and delivery orders start from the same row of buttons.',
      points: [
        'Late tickets stand out in red so nothing sits too long.',
        'The kitchen sees its own tickets, and the tabs to Orders and Kitchen are one tap away.',
        'End a shift with a count, so the day closes cleanly.',
      ],
    },
    {
      title: 'The signal drops. The till does not.',
      text: 'Stock is ready on the phone, so you can keep selling offline and sync when you are back.',
      points: [
        'A clear banner tells you when offline stock is ready.',
        'Cash, M-Pesa and a customer account all work from the same till.',
      ],
      screen: { id: 'pos', alt: 'The till with stock counts', caption: 'The till' },
    },
  ],
  faqs: [
    { id: 'who', question: 'Who is this for?', answer: 'Bars, restaurants and cafés, and any business that serves people at tables. Shops and services use the same till without the tables.' },
    { id: 'staff', question: 'Can my waiters and kitchen have their own logins?', answer: 'Yes. You add staff and give each person a role, so a waiter sees tables and the kitchen sees tickets.' },
    { id: 'offline', question: 'What works offline?', answer: 'Selling from stock saved on the phone. Payments that need a network, such as M-Pesa prompts, need a connection.' },
    { id: 'trial', question: 'Is there a free trial?', answer: 'Business owners get a 7-day free trial, no card required.' },
  ],
  closing: { title: 'Set up your tables today.', text: 'Free for 7 days. No card required.' },
};
