export interface IndustryDetail {
  id: string;
  title: string;
  challenge: string;
  approach: string;
  outcomes: string[];
}

export const industries: IndustryDetail[] = [
  {
    id: 'ecommerce-delivery',
    title: 'Online Shop & Delivery',
    challenge:
      'Customers want to order without walking in or calling — but a separate website, a separate delivery app and a rider on standby usually means three more bills and three systems that do not talk to each other.',
    approach:
      'Every business on Jirani OS gets a shop customers can browse and order from through the Jirani OS customer app. An order placed there is priced, routed and dispatched to a rider automatically — no phone call, no separate system.',
    outcomes: [
      'A real online shop, live from day one, no separate website needed',
      'Customers order and reorder at their own convenience through the customer app',
      'Delivery priced, routed and dispatched automatically, every time',
    ],
  },
  {
    id: 'retail-wholesale',
    title: 'Retail & Wholesale',
    challenge:
      'A till that cannot handle bulk pricing, stock counts that never quite match what is on the shelf, and no clear picture of which products actually drive margin.',
    approach:
      'One point of sale handles retail and wholesale pricing together. Every sale updates stock immediately, and the same data feeds directly into accounting — no manual reconciliation step in between.',
    outcomes: [
      'Stock levels that reflect reality, not last week\u2019s count',
      'Bulk and retail pricing from the same checkout flow',
      'Margin visibility per product, not just per sale',
    ],
  },
  {
    id: 'utilities',
    title: 'Water Refill & Metered Businesses',
    challenge:
      'Metered, by-the-litre selling is often run on a separate, disconnected system from everything else, making consumption tracking and stock reconciliation harder than they need to be.',
    approach:
      'Every litre sold updates your tank\u2019s stock automatically, using the same billing engine as every other product in the system. Set a reorder level, and if your supplier is also on Jirani OS, restocking happens on its own — no phone call needed.',
    outcomes: [
      'By-the-litre billing without a separate system to maintain',
      'Tank stock that updates itself on every sale, no manual counting',
      'Built to extend beyond water as your utility offering grows',
    ],
  },
  {
    id: 'services-manufacturing',
    title: 'Service Businesses & Manufacturing',
    challenge:
      'Tracking a job from request to completion — and knowing what it actually cost to deliver — is difficult when staff assignment, materials and billing live in different places.',
    approach:
      'Service jobs and production runs are tracked end to end, with materials consumed from inventory automatically and staff commissions calculated as part of the same workflow, not a separate spreadsheet.',
    outcomes: [
      'Accurate costing, because materials are tracked as they are used',
      'Commission calculated automatically, not manually at month-end',
      'One system covering the shop floor and the books',
    ],
  },
];
