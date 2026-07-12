import {
  Building2, Users, DoorOpen, ShieldCheck, ShoppingCart, Receipt,
  Package, Truck, Wallet, PieChart, Wrench, Boxes, UserCog, Bell,
  LayoutDashboard, FileBarChart, Lock, History, Droplet, ClipboardList,
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
    id: 'property',
    title: 'Property & Tenant Management',
    intro: 'Everything a landlord, caretaker or estate manager needs to run a property day to day.',
    features: [
      { icon: Building2, title: 'Property & estate management', description: 'Manage single buildings or multi-property portfolios from one dashboard, with per-branch visibility.' },
      { icon: DoorOpen, title: 'Rent management', description: 'Automated invoicing, proration for mid-month move-ins, arrears tracking and payment reconciliation.' },
      { icon: Users, title: 'Tenant portal', description: 'Tenants view invoices, pay rent, raise tickets and message the office — without a phone call.' },
      { icon: ShieldCheck, title: 'Visitor & access control', description: 'Gate passes, visitor logs and security check-ins, tied to the specific unit being visited.' },
      { icon: Droplet, title: 'Utility management', description: 'Water metering and billing today, with the same engine designed to extend to electricity and gas.' },
    ],
  },
  {
    id: 'commerce',
    title: 'Commerce & Point of Sale',
    intro: 'For shops, service businesses and anyone selling products or services day to day.',
    features: [
      { icon: ShoppingCart, title: 'Point of sale', description: 'A fast, offline-resilient till for products and services, with cash, M-Pesa and split payments.' },
      { icon: Receipt, title: 'Billing & invoicing', description: 'One billing engine handles rent, utilities, sales and service invoices consistently.' },
      { icon: Users, title: 'CRM', description: 'Customer accounts, purchase history and credit tracking, whether it is a walk-in or a standing account.' },
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
      { icon: FileBarChart, title: 'Dashboards & reports', description: 'Role-specific dashboards that show each person exactly what they need, nothing they do not.' },
    ],
  },
  {
    id: 'operations-admin',
    title: 'Staff, Access & Notifications',
    intro: 'The operational backbone that keeps a growing team accountable.',
    features: [
      { icon: UserCog, title: 'Staff management', description: 'Onboard staff per branch, assign roles and track performance without spreadsheets.' },
      { icon: Lock, title: 'Role-based permissions', description: 'Every person sees and does exactly what their role allows — nothing more.' },
      { icon: History, title: 'Audit trails', description: 'A complete, tamper-evident record of who did what, and when — for every sensitive action.' },
      { icon: Bell, title: 'Notifications', description: 'The right person is notified the moment something needs their attention, on the channel they use.' },
      { icon: LayoutDashboard, title: 'Asset management', description: 'Track equipment and assets across branches, with maintenance history attached.' },
      { icon: ClipboardList, title: 'Multi-branch operations', description: 'Built from day one to scale from a single shop to a multi-branch enterprise.' },
    ],
  },
];
