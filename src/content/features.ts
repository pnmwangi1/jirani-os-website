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
      { icon: ShoppingCart, title: 'Point of sale', description: 'A fast till for products and services, with the cart saved on your phone if the signal drops. Cash, M-Pesa and split payments, and the same till your online shop\u2019s orders flow into.' },
      { icon: Receipt, title: 'Billing & invoicing', description: 'One billing engine handles sales and service invoices consistently, whether the order came from the counter or from your shop online.' },
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
      { icon: LayoutDashboard, title: 'Role-specific dashboards', description: 'Each person sees exactly what their role needs — a cashier sees the till, an owner sees everything.' },
      { icon: BarChart3, title: 'Business Intelligence & Analytics', description: 'Real analytics on sales, stock and delivery performance across every branch — not just a dashboard, a system that tells you what is actually happening in your business right now.' },
    ],
  },
  {
    id: 'operations-admin',
    title: 'Staff, Access & Notifications',
    intro: 'The operational backbone that keeps a growing team accountable.',
    features: [
      { icon: UserCog, title: 'Staff management', description: 'Onboard staff per branch, assign roles and track performance without spreadsheets.' },
      { icon: Lock, title: 'Role-based permissions', description: 'Every person sees and does exactly what their role allows — nothing more.' },
      { icon: History, title: 'Audit trails', description: 'A complete, tamper-evident record of who did what, and when — for every sensitive action, from a stock adjustment to a dispatched delivery.' },
      { icon: Bell, title: 'Notifications', description: 'The right person is notified the moment something needs their attention, on the channel they use.' },
      { icon: ClipboardList, title: 'Multi-branch operations', description: 'Built from day one to scale from a single shop to a multi-branch enterprise.' },
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
      { icon: ArrowLeftRight, title: 'Shop-to-shop stock loans', description: 'Borrow stock from another shop or lend yours, with a due date and a record of what came back.' },
      { icon: Target, title: 'Leads and follow-ups', description: 'Keep track of enquiries and get reminded to follow up.' },
      { icon: FileSpreadsheet, title: 'Import from Excel', description: 'Bring your products, customers and suppliers across from a spreadsheet, with a check before anything is saved.' },
      { icon: UserCog, title: 'People and payroll', description: 'Roles, pay, salary advances and commissions in one place.' },
    ],
  },
  {
    id: 'virtual-properties',
    title: 'Virtual Properties',
    intro: `Run a property from your phone. KES ${VIRTUAL_PRICE_KES} per property per month, and residents and staff join free.`,
    features: virtualFeatures.map((f) => ({ icon: f.icon, title: f.title, description: f.outcome })),
  },
];
