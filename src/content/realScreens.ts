// Real screens from the Jirani OS app (demo account, status bar cropped). Files live in /public/app/*.webp.
export interface RealScreen { id: string; alt: string; caption: string }
export interface ScreenGroup { id: 'run' | 'sell' | 'live'; label: string; blurb: string; screens: RealScreen[] }

export const screenGroups: ScreenGroup[] = [
  {
    id: 'run', label: 'Run', blurb: 'Know how the business is doing, today and across every branch.',
    screens: [
      { id: 'dashboard', alt: 'Business dashboard with total sales, how customers paid, best sellers and cash position', caption: 'Dashboard' },
      { id: 'report-busiest', alt: 'Report showing sales down on the week before and a heatmap of the busiest days and hours', caption: 'Busiest hours' },
      { id: 'report-aging', alt: 'Report showing what customers owe by how long and what is owed to suppliers', caption: 'Who owes you' },
    ],
  },
  {
    id: 'sell', label: 'Sell', blurb: 'A till that works with the signal, an online shop, and tables for restaurants and bars.',
    screens: [
      { id: 'pos', alt: 'Point of sale with products, stock counts, held sales and a till open banner', caption: 'The till' },
      { id: 'tables', alt: 'Tables screen for a bar and restaurant with seats, waiters, reservations and kitchen tabs', caption: 'Tables and kitchen' },
      { id: 'shop-discovery', alt: 'Shops near you with distance filters, ratings and an open now badge', caption: 'Shops near you' },
    ],
  },
  {
    id: 'live', label: 'Live', blurb: 'For shoppers and everyone else: orders, a budget, and a break between jobs.',
    screens: [
      { id: 'customer-home', alt: 'Customer home with orders, what is overdue, a virtual property and the games card', caption: 'Your home screen' },
      { id: 'budget-safe', alt: 'My budget showing the safe amount to spend today, money in, spent and left', caption: 'My budget' },
      { id: 'games-hub', alt: 'Games hub with Word of the Day, Jirani Shop, Afterglow, Daily Sudoku and Duels', caption: 'Games' },
    ],
  },
];

/** Features page: the real screen shown beside a capability. Capabilities not listed keep their illustration alone. */
export const capabilityScreens: Record<string, { id: string; alt: string }> = {
  sell: { id: 'pos', alt: 'The Jirani OS till with products and stock' },
  credit: { id: 'report-aging', alt: 'Customer balances by how long they have been owed' },
  money: { id: 'report-sales', alt: 'Sales over time with downloadable reports' },
  grow: { id: 'dashboard-target', alt: "Today's sales target and how far along it is" },
  branches: { id: 'dashboard', alt: 'One dashboard across all branches' },
};
