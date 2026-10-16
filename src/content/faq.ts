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
      'Jirani OS is one app with three uses. Businesses run sales, stock, staff, delivery and accounts, and every business gets its own online shop. Shoppers order from shops near them. Property managers run a property with parking prompts, gate passes, notices and repairs. It is built for small and medium businesses, and scales from a single shop to many branches.',
  },
  {
    id: 'who-is-it-for',
    category: 'Getting Started',
    question: 'Who is Jirani OS built for?',
    answer:
      'Retail and wholesale shops, restaurants, water refill businesses, service businesses, manufacturers and growing enterprises that have outgrown spreadsheets and disconnected apps. Shoppers can use it to order from local shops, and anyone who looks after a property can set one up for their residents and team.',
  },
  {
    id: 'getting-started-time',
    category: 'Getting Started',
    question: 'How long does it take to get started?',
    answer:
      'Most businesses are set up, live with their own shop, and taking their first payment within a day. The exact time depends on how much existing data you are migrating — our team can advise on the best approach for your situation.',
  },
  {
    id: 'shopper-account',
    category: 'Shopping',
    question: 'Do I need an account to order from a shop?',
    answer:
      'You can browse a shop and fill your cart without one. You sign in only when you check out. Tell the shop where you are first, so you only see shops that can reach you, then choose delivery or collect.',
  },
  {
    id: 'shop-link',
    category: 'Shopping',
    question: 'How does my business get an online shop?',
    answer:
      'Every business on Jirani OS gets one. Switch on Online shop visible in the app and you get your own address, such as shop.jiranios.com/your-shop, plus a QR poster to print. Add product photos in the first 7 days, because after that the public link shows only products that have photos.',
  },
  {
    id: 'property-what',
    category: 'Properties',
    question: 'What is a virtual property?',
    answer:
      'A way to run a building from your phone: parking prompts, gate passes and expected guests, notices, lost and found, property chat, repairs with photos and quotes, and your own team of manager, caretaker and security. You create the property, pin its location and invite people by phone number.',
  },
  {
    id: 'property-price',
    category: 'Properties',
    question: 'What does a virtual property cost, and who pays?',
    answer:
      'KES 250 per property per month, paid with M-Pesa when you set it up and then each month. Residents and staff join free.',
  },
  {
    id: 'property-start',
    category: 'Properties',
    question: 'How do I set up a property?',
    answer:
      'Create a free Jirani account, open the app, find the virtual property tile on your dashboard, then add the property name and location. After you pay, invite your team and residents by phone number. Residents accept the invitation when they are at the property.',
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
    question: 'What happens if my internet drops while I am selling?',
    answer:
      'The cart you are building is saved on your phone and syncs when the connection returns, so a dropped signal does not lose it. Taking the payment itself needs a connection, so that stock, credit limits and receipt numbers stay correct.',
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
