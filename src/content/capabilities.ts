import type { GroupKind } from '../components/story/GroupScene';

// Everything here is taken from what Jirani OS actually does (the app code and the training manual).
// `plus` lines are the ones that need Jirani Plus; everything else works on Jirani Start too.
export interface Capability {
  id: string;
  kind: GroupKind;
  title: string;
  before: string;
  withJirani: string;
  bullets: string[];
  plus?: string[];
}

export const capabilities: Capability[] = [
  {
    id: 'sell', kind: 'sell', title: 'Sell',
    before: 'Sales go in a notebook, and the till never quite balances.',
    withJirani: 'Every sale is rung up, paid for and recorded, and each shift ends with a count.',
    bullets: [
      'Open the till with a cash float and close it with a count',
      'Scan barcodes with your phone camera, or a scanner on a computer, for quick checkouts',
      'Retail and wholesale prices from the same checkout',
      'Pay with cash, M-Pesa, bank or a customer account',
      'Returns and voids put stock and money back correctly',
      'Restaurants: tables, kitchen tickets and reservations',
      'Services: bookings, jobs, quotes, laundry and production',
    ],
  },
  {
    id: 'stock', kind: 'stock', title: 'Stock',
    before: 'Nobody is sure what is on the shelf until it runs out.',
    withJirani: 'Stock updates on every sale, and you are told before you run out.',
    bullets: [
      'Reorder alerts and stock counts that show what is missing',
      'Products you make from raw materials, with a recipe',
      'Variants such as sizes and teams, each with its own stock',
      'Water by the litre and gas cylinders, full and empty',
      'Phones and devices tracked by serial number',
      'Borrow from and lend to nearby shops, in units',
    ],
    plus: ['Move stock between your branches'],
  },
  {
    id: 'credit', kind: 'credit', title: 'Customers and credit',
    before: 'Nobody remembers who owes what, or for how long.',
    withJirani: 'Every customer has an account, a statement and an age on what they owe.',
    bullets: [
      'Sell on credit and record payments as they arrive',
      'Set a credit limit for each customer, with credit terms',
      'See balances by age: 0-30, 31-60, 61-90 and 90+ days',
      'Wholesale pricing for the customers who get it',
      'Follow up leads, and see which sources turn into sales',
      'Message customers from inside the app',
    ],
  },
  {
    id: 'suppliers', kind: 'suppliers', title: 'Suppliers and buying',
    before: 'Supplier bills get lost and stock arrives with no record.',
    withJirani: 'Every delivery is recorded, and you can see what you owe and to whom.',
    bullets: [
      'Record purchases and bring stock in at the same time',
      'Supplier payments and a clear "who you owe" list',
      'Stock you hold on consignment, settled when it sells',
      'Bring your suppliers across from an Excel sheet',
    ],
  },
  {
    id: 'people', kind: 'people', title: 'People',
    before: 'Nobody is sure who can do what, or what they are owed.',
    withJirani: 'Each person gets a role and sees only what their job needs.',
    bullets: [
      'Roles that fit your business, such as waiter, kitchen, driver and sales',
      'Casual workers you record without giving them a login',
      'Pay terms, pay sheets and salary advances you can repay in instalments',
      'Leave, shifts and a record when someone leaves',
      'Commission rules that work out what each seller earned',
    ],
  },
  {
    id: 'money', kind: 'money', title: 'Money and reports',
    before: 'You do not know if the business is really making money.',
    withJirani: 'Profit, cash and M-Pesa are in one place, and they match your sales and stock.',
    bullets: [
      'Today at a glance: revenue, sales, cash and M-Pesa',
      'Profit and Loss and a Balance Sheet on every plan',
      'Margin per product, and what stock is worth at cost',
      'Expenses by category, and stock lost or written off',
      'Sales by shift, ready to download',
    ],
    plus: ['Full accounting: chart of accounts, trial balance, general ledger and cash flow'],
  },
  {
    id: 'grow', kind: 'grow', title: 'Grow',
    before: 'Orders come in by WhatsApp and phone call, one at a time.',
    withJirani: 'You get your own online shop, and customers order any hour of the day.',
    bullets: [
      'A shop link and a QR poster of your own',
      'Deals and a look that is yours',
      'Delivery by your own riders, trusted riders or the customer’s',
      'Your own driver and routes, with the fuel cost counted',
      'Refer and earn for customers who bring friends',
    ],
  },
  {
    id: 'branches', kind: 'branches', title: 'More than one branch',
    before: 'You run between shops with no clear picture of either.',
    withJirani: 'Every branch is in one app, with its own team and its own numbers.',
    bullets: [
      'Branches with their own staff and stock',
      'Add a branch or extra staff seats when you need them',
    ],
    plus: ['Branch dashboards and branch comparison', 'Profit by branch'],
  },
];

export const capabilityById = Object.fromEntries(capabilities.map((c) => [c.id, c]));
