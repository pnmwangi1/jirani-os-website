import type { IndustryKind } from '../components/story/IndustryScene';

// Every line comes from how Jirani OS behaves (setup wizards, modules and the training manual).
// `guided: true` means the business has its own setup wizard; the others run on the general Goods & Services or
// Food & Beverage tools, and the site says so.
export interface IndustryProfile {
  id: string;
  kind: IndustryKind;
  title: string;
  guided: boolean;
  pitch: string;
  bullets: string[];
}

export const industryProfiles: IndustryProfile[] = [
  { id: 'water-refill', kind: 'water', title: 'Water refill', guided: true,
    pitch: 'Sell by the litre and always know what is left in the tank.',
    bullets: ['A water pool for your tank or borehole, with its meter reading', 'Every refill takes litres off the pool automatically', '20 L, 10 L and 5 L sizes set up in a few taps', 'A low-tank alert at the level you choose', 'Restock the pool when your supplier delivers'] },
  { id: 'mini-mart', kind: 'minimart', title: 'Mini mart and general goods', guided: true,
    pitch: 'A till, a shelf and a stock count that agree with each other.',
    bullets: ['Add many products at once in a bulk grid', 'Split a bulk sack into selling sizes', 'Make your own products from raw materials, with a recipe', 'Wholesale prices and reorder points on every product', 'Shop loans for the bottle a customer wants and you do not have'] },
  { id: 'jersey-apparel', kind: 'jersey', title: 'Jerseys and apparel', guided: true,
    pitch: 'Every team, type and size created once, each with its own stock.',
    bullets: ['Pick teams, types and sizes and every combination is created', 'Each size keeps its own price and stock under one design', 'Change one size without touching the others'] },
  { id: 'restaurant', kind: 'restaurant', title: 'Restaurant, café and bar', guided: true,
    pitch: 'Waiters, kitchen and bar work as one team, not by shouting.',
    bullets: ['Tables, a floor plan and reservations', 'Kitchen and bar get their own tickets: queued, preparing, ready', 'The waiter who took the order is told when it is ready', 'Every line shows who added it', 'Happy-hour pricing'] },
  { id: 'lpg', kind: 'lpg', title: 'LPG and gas', guided: true,
    pitch: 'Count cylinders, not just litres: full, empty and out with customers.',
    bullets: ['Full and empty cylinders by brand and size', 'Exchange or outright sale, handled correctly at the till', 'Quarantine a damaged cylinder so it is not sold', 'Licence and permit expiry tracked for you', 'Customers can order a refill or an outright cylinder online'] },
  { id: 'electronics', kind: 'electronics', title: 'Electronics and phones', guided: true,
    pitch: 'Every device tracked by its own serial number, from supplier to sale.',
    bullets: ['Each phone or device tracked by IMEI or serial number', 'Consignment stock: you owe the supplier only when it sells', 'Take in a customer’s old device as a trade-in', 'Send a faulty device back to the supplier', 'A dashboard of units available, sold, under repair and owed'] },
  { id: 'hardware', kind: 'hardware', title: 'Hardware', guided: false,
    pitch: 'Retail and trade customers, bulk stock and accounts for regulars.',
    bullets: ['Retail and wholesale prices at the same till', 'Credit accounts for contractors who pay later', 'Reorder alerts so the fast movers never run out', 'Supplier purchases recorded as stock comes in'] },
  { id: 'pharmacy', kind: 'pharmacy', title: 'Pharmacy and chemist', guided: false,
    pitch: 'Fast lookups at the counter and stock that never surprises you.',
    bullets: ['Scan barcodes at the till (Plus)', 'Reorder alerts on every product', 'Customer accounts for regulars', 'Margin per product, so you know what earns'] },
  { id: 'salon', kind: 'salon', title: 'Salon and barbershop', guided: false,
    pitch: 'Appointments, walk-ins and what each stylist earned.',
    bullets: ['Bookings that move from pending to confirmed, checked in, in progress and done', 'Services priced per service', 'Commission rules that work out each stylist’s earnings', 'Customer history in one place'] },
  { id: 'laundry', kind: 'laundry', title: 'Laundry', guided: false,
    pitch: 'Priced at drop-off, tracked through every wash stage, delivered back.',
    bullets: ['Billed at drop-off, per item or per kg', 'Wash stages so you know where each order is', 'Pickup and delivery of the laundry', 'Care notes kept apart from issue notes'] },
  { id: 'repair', kind: 'repair', title: 'Device and phone repair', guided: false,
    pitch: 'Every job logged with the device, the problem and the photos.',
    bullets: ['A job board for repair trades', 'The customer’s device kept on file with brand, model and IMEI', 'Condition photos at intake that print on the claim ticket', 'Quotes the customer can approve'] },
  { id: 'printing', kind: 'printing', title: 'Printing and custom work', guided: false,
    pitch: 'Quote the job, make it, bill it, and keep the regulars on account.',
    bullets: ['Quotes for custom jobs', 'Materials tracked as stock', 'Customer accounts for regular clients', 'Sales and profit by product'] },
  { id: 'wholesale', kind: 'wholesale', title: 'Wholesale', guided: false,
    pitch: 'Bulk prices, credit accounts and suppliers you pay on time.',
    bullets: ['Wholesale prices by customer and in bulk', 'Credit accounts with balances by age', 'Purchase orders and supplier payments', 'Move stock between branches (Plus)'] },
  { id: 'manufacturing', kind: 'manufacturing', title: 'Small manufacturers', guided: false,
    pitch: 'Make a batch and watch the raw materials go down on their own.',
    bullets: ['Production runs that use up raw materials automatically', 'A recipe for every product you make', 'Margin per product', 'Commission for the people who make and sell'] },
  { id: 'online', kind: 'online', title: 'Online shop and delivery', guided: false,
    pitch: 'Customers order any hour. A rider you trust brings it.',
    bullets: ['Your own shop link and a printable QR poster', 'Delivery by your riders, trusted riders or the customer’s', 'The delivery price is fixed before the customer orders', 'Free delivery rules you set once'] },
];

export const guidedIndustries = industryProfiles.filter((i) => i.guided);
