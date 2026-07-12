export interface IndustryDetail {
  id: string;
  title: string;
  challenge: string;
  approach: string;
  outcomes: string[];
}

export const industries: IndustryDetail[] = [
  {
    id: 'real-estate',
    title: 'Real Estate & Property Management',
    challenge:
      'Rent collection, maintenance requests and tenant communication often live in separate spreadsheets, WhatsApp threads and paper files — making it hard to know, at any given moment, what is actually owed.',
    approach:
      'Jirani OS keeps every tenancy, invoice, payment and maintenance ticket in one system, tied to the specific unit and tenant it belongs to. Rent invoicing, arrears tracking and deposit handling happen automatically, on a schedule you set.',
    outcomes: [
      'Know exactly what is owed across every property, in real time',
      'Tenants pay and raise issues without a phone call',
      'Owner reports generated automatically, not reconstructed at month-end',
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
    title: 'Utility Providers',
    challenge:
      'Metered billing — water especially — is often run on a separate, disconnected system from everything else, making consumption tracking and collections harder than they need to be.',
    approach:
      'Meter readings feed directly into consumption-based invoicing, using the same billing engine as every other charge in the system. Arrears follow-up and payment collection happen through the same tenant-facing tools.',
    outcomes: [
      'Consumption-based billing without a separate system to maintain',
      'One place for tenants to see and pay both rent and utility charges',
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
