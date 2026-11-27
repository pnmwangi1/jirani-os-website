export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: 'run-business',
    category: 'Running your business',
    question: 'What can I run on Jirani OS?',
    answer:
      'The till with shift sessions, stock with reorder alerts and stock counts, customer accounts with credit and aging, suppliers and purchases, staff roles with attendance, leave and payroll, gift vouchers and deposits, and Profit and Loss and Balance Sheet reports. Restaurants also get tables, kitchen tickets and reservations, and service businesses get bookings, jobs, quotes, laundry orders and production.',
  },
  {
    id: 'payroll',
    category: 'Running your business',
    question: 'Does Jirani OS run payroll with PAYE, NSSF, SHIF and Housing Levy?',
    answer:
      'Yes. You prepare a payroll run for the month, and Jirani works out PAYE, NSSF, SHIF and the Housing Levy using rates your business adopts, which you can edit and should confirm with KRA and NSSF. Someone other than the preparer approves the run before it is recorded as paid by cash, bank or M-Pesa. Staff can see their own payslips, and you can produce P9 forms. Jirani records the payment and the amounts to remit. It does not send money to your staff or file returns with KRA for you. Payroll is on both Jirani Start and Jirani Plus.',
  },
  {
    id: 'hr-one-system',
    category: 'Running your business',
    question: 'Can I run HR, payroll and accounts in one system?',
    answer:
      'Yes. People covers staff records and roles, attendance and shifts, leave, payroll, salary advances with instalments, commissions, final pay and exit checklists, with a dedicated HR officer role. Your sales, stock and Profit and Loss sit in the same app, so the numbers match.',
  },
  {
    id: 'plus-needed',
    category: 'Running your business',
    question: 'Do I need Jirani Plus?',
    answer:
      'Jirani Start covers one branch and 3 staff with the everyday tools, including barcode scanning and customer credit limits. Plus adds full accounting (ledger, trial balance, cash flow), moving stock between branches, comparing branches, advanced business insights and branch dashboards, with 3 branches and 9 staff.',
  },
  {
    id: 'what-is-jirani',
    category: 'Getting Started',
    question: 'What exactly is Jirani OS?',
    answer:
      'Jirani OS is one platform for your business, your property and your personal money. Businesses run sales, stock, staff, payroll and accounts, and every business gets its own online shop. Anyone with a customer account can run a virtual property with parking prompts, gate passes, notices, utility bills and repairs, and plan their own month with My budget. Shoppers order from shops near them, and riders set their own rate and deliver for the businesses and customers who trust them. It scales from a single shop to many branches.',
  },
  {
    id: 'what-can-it-do',
    category: 'Getting Started',
    question: 'What can Jirani OS do?',
    answer:
      'Three things in one account. For business: till, stock, customers and credit, suppliers, staff and payroll, accounts and your own online shop. For property: parking prompts, gate passes, notices, lost and found, utility bills and repairs for a building you look after. For personal money: My budget, which tells you what is safe to spend today and reads your M-Pesa statement.',
  },
  {
    id: 'pos-mpesa',
    category: 'Getting Started',
    question: 'Is there POS software in Kenya that works with M-Pesa and gives me an online shop?',
    answer:
      'Yes. Jirani OS takes cash, M-Pesa, bank and customer-account payments at the till, tracks stock, and gives every business its own online shop and delivery dispatch. You can scan barcodes with your phone camera on the Jirani app too.',
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
    id: 'rider-how',
    category: 'Riders',
    question: 'How do riders work on Jirani OS?',
    answer:
      'A rider creates a rider account and sets a base fee and a per-km rate. Businesses add riders to their free-delivery or trusted paid lists, and customers can add riders to their own list. When an order needs delivery it is offered to the riders on the list, in order, and each rider sees their pay before accepting.',
  },
  {
    id: 'rider-pays',
    category: 'Riders',
    question: 'Who pays the rider?',
    answer:
      'The customer pays the rider\u2019s rate for delivery: the base fee plus the per-km rate times the distance, shown before they order. A business\u2019s free-delivery riders cost the customer nothing.',
  },
  {
    id: 'property-what',
    category: 'Properties',
    question: 'What is a virtual property?',
    answer:
      'A way to run a building from your phone: parking prompts, gate passes and expected guests, notices, lost and found, property chat, repairs with photos and quotes, meter readings and utility bills, and your own team of manager, caretaker and security. It does not collect rent. You create the property from a Jirani customer account, pin its location and invite people by phone number. Residents and staff can join from any account.',
  },
  {
    id: 'property-parking-private',
    category: 'Properties',
    question: 'How do parking prompts keep my details private?',
    answer:
      'Anyone who belongs to the property can type a number plate. Jirani answers only whether it found the plate. It never shows the owner or the unit. The owner gets a message that a vehicle needs to move, and it never says who asked. If there is no reply, the owner is prompted three times, two minutes apart, and then security is alerted, or management if there is no security guard.',
  },
  {
    id: 'property-utilities',
    category: 'Properties',
    question: 'Can I bill tenants for water and electricity?',
    answer:
      'Yes. Record meter readings, check them, work out each unit\u2019s usage, issue numbered bills with PDFs, send statements and keep arrears and collection reports. Jirani records the payments you receive. It does not collect or hold the money.',
  },
  {
    id: 'property-landlord',
    category: 'Properties',
    question: 'Can I manage a property without being a landlord?',
    answer:
      'Yes. A virtual property is set up from a normal Jirani customer account. A caretaker, a residents\u2019 committee member or an owner can all create one and invite the manager, caretaker, security and residents by phone number.',
  },
  {
    id: 'property-price',
    category: 'Properties',
    question: 'What does a virtual property cost, and who pays?',
    answer:
      'KES 250 per property per month, paid with M-Pesa when you set it up and then each month. Tokens can also pay for it if you use Pay as you go. Residents and staff join free.',
  },
  {
    id: 'property-start',
    category: 'Properties',
    question: 'How do I set up a property?',
    answer:
      'Create a free Jirani account, open the app, find the virtual property tile on your dashboard, then add the property name and location. After you pay, invite your team and residents by phone number. Residents accept the invitation when they are at the property.',
  },
  {
    id: 'budget-app',
    category: 'My budget',
    question: 'Is there a budget app for Kenya that reads M-Pesa statements?',
    answer:
      'Yes. My budget is free in the Jirani app. Import your M-Pesa statement as a PDF or CSV, or paste your M-Pesa messages, and your payments are sorted into pockets. It shows what is safe to spend today and keeps bills, goals and debts set aside. You can share a household budget with people you invite. It is private to you unless you invite someone.',
  },
  {
    id: 'industries-supported',
    category: 'Getting Started',
    question: 'Which industries does Jirani OS support?',
    answer:
      'Six come with a guided setup: water refill, mini mart, jerseys and apparel, restaurants, LPG and electronics. Others, such as hardware, pharmacy, salon, laundry, device repair, printing, wholesale and small manufacturers, run on the general goods and services tools. See the Industries page for the full list.',
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
      'Jirani Start is KES 1,000/month and Jirani Plus is KES 2,500/month — see the Pricing page for exactly what each plan includes. Both come with your own online shop and delivery dispatch from day one. If you would rather not pay monthly, you can pay as you go with tokens instead.',
  },
  {
    id: 'payg',
    category: 'Pricing',
    question: 'Does Jirani OS have pay-as-you-go POS pricing?',
    answer:
      'Yes. Switch your business to Pay as you go and there is no monthly fee and no expiry. You buy tokens with M-Pesa and use them when you do paid work, such as completing a sale, sending a quote, recording a purchase, a stock take, a delivery or downloading a report or payslip. Lookups, receipts and invoices are free. You get the everyday Jirani Start tools, tokens can also pay for extra branches, extra staff and virtual property bills, and owners can set a daily spending limit for staff.',
  },
  {
    id: 'free-trial',
    category: 'Pricing',
    question: 'Is there a free trial?',
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
      'Yes, you can keep selling. The owner or a manager gives a phone a set amount of stock, the phone sells from it with no signal, and the sales sync when the connection returns, after which the stock is counted and closed. Waiters can also take orders with no signal, and they reach the kitchen when the phone is back online. Payments that need a network, such as M-Pesa prompts, need a connection. The cart you are building is also saved on your phone.',
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
