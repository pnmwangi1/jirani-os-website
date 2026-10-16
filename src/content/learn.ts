import type { GroupKind } from '../components/story/GroupScene';

// Short guides written from the Jirani OS training manual (be/content/training-manual.md). Each step matches the app.
export interface Guide {
  slug: string;
  title: string;
  minutes: number;
  kind: GroupKind;
  summary: string;
  steps: { title: string; body: string }[];
  tip?: string;
}

export const guides: Guide[] = [
  { slug: 'first-day', title: 'Your first day on Jirani OS', minutes: 5, kind: 'grow',
    summary: 'A tick-by-tick path from a new account to your first real sale.',
    steps: [
      { title: 'Create your account', body: 'Sign in with Google, or use a phone number if you prefer.' },
      { title: 'Set up your business', body: 'Choose Goods & Services or Food & Beverage and describe your business. Run the setup wizard if one fits your business type.' },
      { title: 'Add products or services', body: 'Add what you sell, then set the opening stock for anything you added as a product.' },
      { title: 'Add a supplier and your staff', body: 'Add at least one supplier if you record purchases, and give each staff member the right role.' },
      { title: 'Open a till and make a test sale', body: 'Get comfortable with the flow before a real customer is standing in front of you.' },
      { title: 'Set up delivery and your online shop', body: 'Set your branch location and turn on the online shop if you want customers to find and order from you.' },
      { title: 'Check your subscription', body: 'Know how many trial days you have left, and what each plan includes, before the trial ends.' },
    ],
    tip: 'Fill in your invoice details and business logo early so invoices and quotes look right from the first sale.' },
  { slug: 'make-a-sale', title: 'Make a sale at the till', minutes: 4, kind: 'sell',
    summary: 'Open the till, build the cart, take payment and close the shift.',
    steps: [
      { title: 'Open the till and shift', body: 'Enter the cash float in the drawer. Every sale needs an open till, and a branch can have only one open till at a time.' },
      { title: 'Build the cart', body: 'Search for a product by name or scan its barcode (barcode scanning is on Jirani Plus), then adjust quantities in the cart.' },
      { title: 'Discount and customer', body: 'Add a discount if you are giving one. Pick a customer if you are selling on credit.' },
      { title: 'Charge', body: 'Choose Cash, M-Pesa (with the transaction code), Split between cash and M-Pesa, or Credit to a customer account.' },
      { title: 'Close the till', body: 'At the end of the shift, count what is in the drawer and compare it with what Jirani recorded for cash, M-Pesa and card.' },
    ],
    tip: 'Jirani stops you before the charge step if no till is open, not after.' },
  { slug: 'stock-and-counts', title: 'Keep stock right', minutes: 4, kind: 'stock',
    summary: 'Correct a single item, count the whole shop, and move stock between branches.',
    steps: [
      { title: 'Adjust one item', body: 'Open the product, tap Adjust stock, enter a plus or minus and pick an honest reason: damaged, expired, sample, suspected loss and more.' },
      { title: 'Count everything', body: 'Start a stock take. You type what you counted without seeing what the system expects, so the count stays honest.' },
      { title: 'Review the variance', body: 'See expected against counted for every item, with shortages in red and extras in green.' },
      { title: 'Confirm and post', body: 'One tap applies every correction at once, properly recorded.' },
      { title: 'Move stock to another branch', body: 'On Jirani Plus, pick the destination branch, the products and the quantities.' },
    ],
    tip: 'A water refill size draws from the water pool. Add litres with Restock on the pool, not Adjust stock on the product.' },
  { slug: 'sell-on-credit', title: 'Sell on credit and collect it', minutes: 4, kind: 'credit',
    summary: 'Know who owes you, how much and for how long, and record each payment.',
    steps: [
      { title: 'Charge a sale to credit', body: 'Pick an existing customer and choose Credit. The sale becomes an invoice and their balance goes up. A credit limit, if you set one (Jirani Plus), stops them going past it.' },
      { title: 'Record a payment', body: 'Open the customer, tap Record payment, and enter the amount and method: cash, bank or M-Pesa.' },
      { title: 'Allocate it', body: 'Use Auto-fill (oldest first) or choose the invoices yourself. Their balance and aging update straight away.' },
      { title: 'Watch the aging', body: 'Balances are grouped as 0-30, 31-60, 61-90 and 90+ days so you know who to call first.' },
      { title: 'Work your leads', body: 'Customers who stopped buying, unanswered quotes and overdue credit show up as follow-ups, checked every morning at 7:30.' },
    ] },
  { slug: 'suppliers', title: 'Buy from suppliers and track what you owe', minutes: 3, kind: 'suppliers',
    summary: 'Record purchases so stock goes up and supplier balances stay honest.',
    steps: [
      { title: 'Add the supplier', body: 'Save their name and phone number once.' },
      { title: 'Record a purchase', body: 'Enter what arrived and what it cost. Stock goes up and the cost is recorded.' },
      { title: 'Check what you owe', body: 'Review supplier balances weekly so nothing becomes overdue by surprise.' },
    ],
    tip: 'Reorder alerts tell you when a product hits the level you set, so you buy before you run out.' },
  { slug: 'staff-and-roles', title: 'Add staff and give each the right access', minutes: 3, kind: 'people',
    summary: 'Staff see only what their job needs. Your plan sets how many seats you have.',
    steps: [
      { title: 'Add a staff member', body: 'Invite them and assign a role. Jirani Start includes 3 staff seats, Jirani Plus includes 9.' },
      { title: 'Keep records in People', body: 'Record pay terms, pay sheets, salary advances with an instalment plan, leave and shifts. Jirani keeps the records; it does not move money.' },
      { title: 'Need more seats?', body: 'Buy an extra staff seat for the branch you choose, or an extra branch that includes 3 staff seats.' },
    ] },
  { slug: 'online-shop', title: 'Turn on your online shop', minutes: 3, kind: 'grow',
    summary: 'Your branch becomes visible to customers, with its own web link and QR poster.',
    steps: [
      { title: 'Set the branch location', body: 'In Edit branch, tap Use my current location. The online shop switch stays off until a location is set.' },
      { title: 'Switch on Online shop visible', body: 'You also need an active subscription. If it lapses, the shop hides and comes back by itself after you renew.' },
      { title: 'Share your link', body: 'The My shop link card has Copy link, Share on WhatsApp and Preview, and a QR poster you can print for the door or counter.' },
      { title: 'Receive orders', body: 'Online orders arrive marked as online orders, ready to confirm and deliver.' },
    ],
    tip: 'Everything you sell shows online. To hide an item, deactivate it.' },
  { slug: 'delivery-riders', title: 'Offer delivery with riders', minutes: 3, kind: 'branches',
    summary: 'Mix free riders, trusted paid riders and your own driver, or offer pickup only.',
    steps: [
      { title: 'Add riders', body: 'Search for a rider by phone number. They must already have their own Jirani rider account.' },
      { title: 'Choose free or trusted paid', body: 'Free riders cost the customer nothing. Trusted paid riders set their own base fee and per-kilometre rate.' },
      { title: 'Customers choose at checkout', body: 'They can see pickup, their own rider, free delivery, paid delivery and your fleet, whichever you have set up.' },
    ],
    tip: 'Every delivery method is optional. You can offer pickup only if you prefer.' },
  { slug: 'daily-routine', title: 'A simple daily routine', minutes: 3, kind: 'money',
    summary: 'Open, sell, close, and the weekly habits that keep the numbers true.',
    steps: [
      { title: 'Opening up', body: 'Open the till, check overnight notifications such as online orders and low-stock alerts, and glance at the dashboard.' },
      { title: 'Through the day', body: 'Sell, answer messages, watch deliveries, and act on low-stock alerts.' },
      { title: 'Closing up', body: 'Close the till, check the day’s revenue and cash in Reports, and review quotes, orders and reservations still open.' },
      { title: 'Every week and month', body: 'Do a stock take, check supplier balances, follow up on credit customers, review Profit and Loss, and check your renewal date.' },
    ] },
];
