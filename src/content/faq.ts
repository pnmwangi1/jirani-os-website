export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: 'what-is-jirani',
    category: 'Getting Started',
    question: 'What exactly is Jirani OS?',
    answer:
      'Jirani OS is a business operating system that gives every business its own online shop, a customer app to order from, automatic delivery dispatch, sales, billing, inventory and accounting — instead of running separate tools for each. It is built for small and medium businesses, and is designed to scale from a single shop to a multi-branch enterprise.',
  },
  {
    id: 'who-is-it-for',
    category: 'Getting Started',
    question: 'Who is Jirani OS built for?',
    answer:
      'Retail and wholesale shops, water refill businesses, service businesses, manufacturers and growing enterprises that have outgrown spreadsheets and disconnected apps. If you are currently juggling more than one tool to run your business, Jirani OS is built for you.',
  },
  {
    id: 'getting-started-time',
    category: 'Getting Started',
    question: 'How long does it take to get started?',
    answer:
      'Most businesses are set up, live with their own shop, and taking their first payment within a day. The exact time depends on how much existing data you are migrating — our team can advise on the best approach for your situation.',
  },
  {
    id: 'multi-branch',
    category: 'Getting Started',
    question: 'Can Jirani OS handle multiple branches?',
    answer:
      'Yes — multi-branch support is built into the core of the system, not added on later. You can view consolidated reports across every location or drill into one specific branch.',
  },
  {
    id: 'pricing-when',
    category: 'Pricing',
    question: 'What does Jirani OS cost?',
    answer:
      'Jirani Start is KES 1,000/month and Jirani Plus is KES 2,500/month — see the Pricing page for exactly what each plan includes. Both come with your own online shop and delivery dispatch from day one.',
  },
  {
    id: 'free-trial',
    category: 'Pricing',
    question: 'Will there be a free trial?',
    answer:
      'Yes — every new business starts with a free 7-Day Jirani Plus Experience, full access, before you pay anything, paid via M-Pesa once you decide to continue.',
  },
  {
    id: 'data-security',
    category: 'Security',
    question: 'How is my business data protected?',
    answer:
      'Data is encrypted in transit and at rest, access is controlled through role-based permissions, and every sensitive action is recorded in an audit trail. See the Security page for a full breakdown.',
  },
  {
    id: 'data-ownership',
    category: 'Security',
    question: 'Who owns the data I put into Jirani OS?',
    answer:
      'You do. Your business data belongs to you — Jirani OS is the system you use to manage it, not the owner of it. Our full Privacy Policy explains exactly what is collected and how it is used.',
  },
  {
    id: 'offline-support',
    category: 'Support',
    question: 'Does the point of sale work without internet?',
    answer:
      'Yes. The point of sale is built to stay usable through connectivity gaps, syncing automatically once a connection is restored — a common, real condition for many of the businesses we build for.',
  },
  {
    id: 'support-channels',
    category: 'Support',
    question: 'How do I get help if I run into an issue?',
    answer:
      'Use the Contact page to reach our team directly. As Jirani OS grows, we will be expanding support channels, including in-app support.',
  },
  {
    id: 'migrate-existing-data',
    category: 'Support',
    question: 'Can I bring in data from my existing spreadsheets or system?',
    answer:
      'In most cases, yes. Jirani OS supports bulk import from Excel using a downloadable, validated template, so your products or customers land in the right place without starting from zero. Reach out through the Contact page if you would like our team to advise on migrating anything more complex.',
  },
];
