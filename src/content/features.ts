import {
  Users, ShoppingCart, Receipt, Store, Smartphone, Truck as DeliveryTruck, MapPin,
  Package, Truck, Wallet, PieChart, Wrench, Boxes, UserCog, Bell,
  BarChart3, LayoutDashboard, Lock, History, ClipboardList,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

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
      { icon: DeliveryTruck, title: 'Delivery, automatically dispatched', description: 'An order placed through your shop does not need a phone call to reach the customer. Jirani OS prices the delivery, assigns a rider, and tracks it — automatically, the moment the order is placed.' },
      { icon: Wallet, title: 'Delivery rules, your call', description: 'Free delivery above an order value, within a distance, or always — set the rule once and Jirani OS applies it to every order, every time.' },
      { icon: MapPin, title: 'Route & fuel costing', description: 'Every delivery is routed and costed automatically, so you know exactly what a delivery costs before the rider even leaves.' },
    ],
  },
  {
    id: 'commerce',
    title: 'Commerce & Point of Sale',
    intro: 'For shops, service businesses and anyone selling products or services day to day.',
    features: [
      { icon: ShoppingCart, title: 'Point of sale', description: 'A fast, offline-resilient till for products and services, with cash, M-Pesa and split payments — the same till your online shop\u2019s orders flow into.' },
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
];
