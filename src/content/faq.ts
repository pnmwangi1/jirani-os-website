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
      'Jirani OS is a business operating system that unifies property management, sales, billing, inventory and accounting into one platform, instead of running separate tools for each. It is built for small and medium businesses, property managers and landlords, and is designed to scale from a single shop to a multi-branch enterprise.',
  },
  {
    id: 'who-is-it-for',
    category: 'Getting Started',
    question: 'Who is Jirani OS built for?',
    answer:
      'Property managers, landlords, retail and wholesale shops, water utility providers, service businesses, manufacturers and growing enterprises that have outgrown spreadsheets and disconnected apps. If you are currently juggling more than one tool to run your business, Jirani OS is built for you.',
  },
  {
    id: 'getting-started-time',
    category: 'Getting Started',
    question: 'How long does it take to get started?',
    answer:
      'Most businesses are set up and taking their first payment or invoicing their first tenant within a day. The exact time depends on how much existing data you are migrating — our team can advise on the best approach for your situation.',
  },
  {
    id: 'multi-branch',
    category: 'Getting Started',
    question: 'Can Jirani OS handle multiple branches or properties?',
    answer:
      'Yes — multi-branch and multi-property support is built into the core of the system, not added on later. You can view consolidated reports across every location or drill into one specific branch.',
  },
  {
    id: 'pricing-when',
    category: 'Pricing',
    question: 'What does Jirani OS cost?',
    answer:
      'We are finalizing pricing ahead of general availability. Leave your email on the Pricing page and we will notify you as soon as plans are published — early sign-ups will be the first to know.',
  },
  {
    id: 'free-trial',
    category: 'Pricing',
    question: 'Will there be a free trial?',
    answer:
      'We plan to offer a trial period so you can evaluate Jirani OS with your own data before committing. Details will be published alongside pricing.',
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
      'In most cases, yes. Reach out through the Contact page describing what you are currently using, and our team will advise on the best way to bring your existing records into Jirani OS.',
  },
];
