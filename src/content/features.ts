import {
  Share2, QrCode, Tag, FileSpreadsheet, ArrowLeftRight, Target, FileBarChart,
  Users, ShoppingCart, Receipt, Store, Smartphone, Truck as DeliveryTruck, MapPin,
  Package, Truck, Wallet, PieChart, Wrench, Boxes, UserCog, Bell,
  BarChart3, LayoutDashboard, Lock, History, ClipboardList, Bike, Route,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { virtualFeatures } from './virtualFeatures';
import { VIRTUAL_PRICE_KES } from '../lib/constants';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeatureGroup {
  id: string;
  title: string;
  intro: string;
  features: Feature[];
}

export const featureGroups: FeatureGroup[] = [
  {
    id: 'shop-delivery',
    title: 'Your Shop, Your Customer App & Automatic Delivery',
    intro: 'Every business on Jirani OS gets more than a till — a real shop customers can find online, an app to order from at their own convenience, and delivery that happens without anyone picking up a phone.',
    features: [
      { icon: Store, title: 'Your own online shop', description: 'The moment you set up, your business gets a real shop customers can browse and order from — not just a counter they have to walk up to.' },
      { icon: Smartphone, title: 'Customer app', description: 'Customers get their own app to discover your shop, browse what you sell, place orders and reorder favourites — whenever suits them, not just when they can visit in person.' },
      { icon: DeliveryTruck, title: 'Delivery, automatically dispatched', description: 'An order placed through your shop does not need a phone call to reach the customer. Jirani OS prices the delivery and offers it to your riders in order, then tracks it — automatically, the moment the order is placed.' },
      { icon: Wallet, title: 'Delivery rules, your call', description: 'Free delivery above an order value, within a distance, or always — set the rule once and Jirani OS applies it to every order, every time.' },
      { icon: MapPin, title: 'Route & fuel costing', description: 'Every delivery is routed and costed automatically, so you know exactly what a delivery costs before the rider even leaves.' },
    ],
  },
  {
    id: 'shop-link',
    title: 'Share Your Shop Anywhere',
    intro: 'Your shop is also a web page. Customers browse it without downloading anything and sign in only when they check out.',
    features: [
      { icon: Share2, title: 'A link of your own', description: 'Get an address like shop.jiranios.com/your-shop. Share it on WhatsApp, Instagram or your receipts.' },
      { icon: QrCode, title: 'Printable QR poster', description: 'Stick it on your door or counter. Customers scan it and are in your shop in seconds.' },
      { icon: MapPin, title: 'Shops that can reach you', description: 'Shoppers tell the shop where they are first, so they only see what can be delivered or collected.' },
      { icon: Tag, title: 'Deals and shop look', description: 'Show deals, add your logo, colour and a short description so your shop looks like yours.' },
    ],
  },
  {
    id: 'commerce',
    title: 'Commerce & Point of Sale',
    intro: 'For shops, service businesses and anyone selling products or services day to day.',
    features: [
      { icon: ShoppingCart, title: 'Point of sale', description: 'A fast till for products and services on the phone app or a computer, with barcode scanning by phone camera, and the cart saved on your phone if the signal drops. Cash, M-Pesa and split payments, and the same till your online shop\u2019s orders flow into. Stock handed to a phone can keep selling offline and syncs when the signal returns.' },
      { icon: Receipt, title: 'Billing & invoicing', description: 'One billing engine handles sales and service invoices consistently, whether the order came from the counter or from your shop online.' },
      { icon: Tag, title: 'Gift vouchers and deposits', description: 'Sell a gift voucher or take a deposit with just the customer\u2019s phone number. Jirani checks the number and keeps the customer on your own customer list. Deposits and vouchers are then used at the till.' },
      { icon: Users, title: 'CRM', description: 'Customer accounts, purchase history and credit tracking, whether it is a walk-in or a standing account ordering through your customer app.' },
    ],
  },
  {
    id: 'operations',
    title: 'Inventory, Purchasing & Production',
    intro: 'Stock that stays accurate, from raw materials to what is actually on the shelf.',
    features: [
      { icon: Package, title: 'Inventory management', description: 'Real-time stock levels across branches, with a full audit trail of every movement.' },
      { icon: Truck, title: 'Purchasing', description: 'Purchase orders, supplier tracking and stock receiving in one workflow.' },
      { icon: Boxes, title: 'Production & recipes', description: 'Bill-of-materials driven production — make finished goods from raw materials with accurate costing.' },
      { icon: Wrench, title: 'Service management', description: 'Track service jobs from request to completion, with staff assignment and commission tracking.' },
    ],
  },
  {
    id: 'finance',
    title: 'Accounting & Financial Reporting',
    intro: 'Real double-entry accounting underneath, not a spreadsheet pretending to be one.',
    features: [
      { icon: Wallet, title: 'Accounting engine', description: 'Full double-entry bookkeeping, generated automatically from the transactions your team already records.' },
      { icon: PieChart, title: 'Financial reports', description: 'Profit & loss, balance sheet and cash flow, always current — not a month-end reconstruction.' },
      { icon: ClipboardList, title: 'Petty cash, loans and month close', description: 'Track petty cash, loans and equipment, set opening balances and close the month, so the books are ready when your accountant is.' },
      { icon: Users, title: 'Accountant access', description: 'Share your books with your accountant without handing over a login to everything.' },
      { icon: LayoutDashboard, title: 'Role-specific dashboards', description: 'Each person sees exactly what their role needs — a cashier sees the till, an owner sees everything.' },
      { icon: BarChart3, title: 'Business Intelligence & Analytics', description: 'Real analytics on sales, stock and delivery performance across every branch — not just a dashboard, a system that tells you what is actually happening in your business right now.' },
    ],
  },
  {
    id: 'operations-admin',
    title: 'Staff, Access & Notifications',
    intro: 'The operational backbone that keeps a growing team accountable.',
    features: [
      { icon: UserCog, title: 'Staff management', description: 'Onboard staff per branch, assign roles, include casual workers who have no login, and track performance without spreadsheets.' },
      { icon: Lock, title: 'Role-based permissions', description: 'Every person sees and does exactly what their role allows — nothing more.' },
      { icon: History, title: 'Audit trails', description: 'A complete, tamper-evident record of who did what, and when — for every sensitive action, from a stock adjustment to a dispatched delivery.' },
      { icon: Bell, title: 'Notifications', description: 'The right person is notified the moment something needs their attention, on the channel they use.' },
      { icon: ClipboardList, title: 'Multi-branch operations', description: 'Built from day one to scale from a single shop to a multi-branch enterprise.' },
    ],
  },
  {
    id: 'hr-payroll',
    title: 'HR & Payroll',
    intro: 'Hire, schedule, pay and let go, from one place. Included on Jirani Start and Jirani Plus.',
    features: [
      { icon: UserCog, title: 'Staff records and a HR officer role', description: 'Keep each person\u2019s details, pay terms and documents in one place, and give an HR officer the tools without the rest of the business.' },
      { icon: ClipboardList, title: 'Attendance, shifts and roster', description: 'Staff clock in and out, you plan shifts on a roster, and forgotten clock-outs are caught and can be closed automatically.' },
      { icon: Bell, title: 'Leave', description: 'Staff ask for leave, and the right person approves it.' },
      { icon: Wallet, title: 'Payroll runs with PAYE, NSSF, SHIF and Housing Levy', description: 'Prepare the month\u2019s payroll, and Jirani works out the statutory deductions from rates your business adopts. Confirm the rates with KRA and NSSF. Someone other than the preparer approves the run before it is recorded as paid by cash, bank or M-Pesa.' },
      { icon: Receipt, title: 'Payslips, P9 and remittance records', description: 'Staff see their own payslips, you produce P9 forms, and Jirani keeps a record of the amounts to remit. Jirani records payments. It does not send money to your staff or file returns with KRA.' },
      { icon: FileBarChart, title: 'Advances, commissions, final pay and exit', description: 'Salary advances repaid in instalments, commission rules that work out what each seller earned, final pay and an exit checklist when someone leaves.' },
    ],
  },
  {
    id: 'riders',
    title: 'Riders and Delivery',
    intro: 'Riders set their own rate. Businesses and customers choose the riders they trust.',
    features: [
      { icon: Bike, title: 'Your own riders', description: 'Add free-delivery riders and trusted paid riders to your shop. Orders are offered to them in order.' },
      { icon: Wallet, title: 'A fixed price up front', description: 'Base fee plus per-km rate times distance. The customer sees it before ordering and it does not change.' },
      { icon: Route, title: 'Customers bring their own rider', description: 'A customer can keep a personal list of riders and combine orders into one trip.' },
      { icon: DeliveryTruck, title: 'Next rider, automatically', description: 'If a rider declines or does not answer in time, the order moves to the next rider on the list.' },
    ],
  },
  {
    id: 'owner-tools',
    title: 'Everyday Tools for Owners',
    intro: 'The things an owner opens every day.',
    features: [
      { icon: LayoutDashboard, title: 'Owner dashboard', description: 'Today at a glance across every branch: sales, cash, orders and what needs your attention.' },
      { icon: FileBarChart, title: 'Sales reports by shift', description: 'See sales per shift and per day, and download them as a report.' },
      { icon: ArrowLeftRight, title: 'Shop-to-shop stock loans', description: 'Borrow any item from another shop when you are out, or lend yours. Loans are tracked in units, with a due date and a record of what came back.' },
      { icon: Target, title: 'Leads and follow-ups', description: 'Keep track of enquiries and get reminded to follow up.' },
      { icon: FileSpreadsheet, title: 'Import from Excel', description: 'Bring your products, customers and suppliers across from a spreadsheet, with a check before anything is saved.' },
      { icon: UserCog, title: 'HR and payroll', description: 'Attendance, leave, payroll with PAYE, NSSF, SHIF and Housing Levy, payslips and P9 forms, salary advances and commissions in one place. See HR and payroll above.' },
    ],
  },
  {
    id: 'virtual-properties',
    title: 'Virtual Properties',
    intro: `Run a property from your phone, from a Jirani customer account. KES ${VIRTUAL_PRICE_KES} per property per month, and residents and staff join free.`,
    features: [...virtualFeatures.map((f) => ({ icon: f.icon, title: f.title, description: f.outcome })), { icon: FileBarChart, title: 'Meter readings and utility bills', description: 'Record water and electricity readings, check them, issue numbered bills with PDFs and see who has paid. Jirani records payments and does not collect the money.' }],
  },
];
