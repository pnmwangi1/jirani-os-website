import { Building2, Home, Store, Warehouse, Droplet, Wrench, Factory, UtensilsCrossed, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Solution {
  id: string;
  icon: LucideIcon;
  title: string;
  tone: 'primary' | 'tenant' | 'manager' | 'accountant' | 'caretaker' | 'contractor' | 'success' | 'warning' | 'info';
  summary: string;
  points: string[];
}

export const solutions: Solution[] = [
  {
    id: 'property-managers',
    icon: Building2,
    title: 'Property Managers',
    tone: 'manager',
    summary: 'Run every building in your portfolio from one dashboard, with real-time visibility into occupancy, arrears and maintenance.',
    points: [
      'Multi-property, multi-branch view for your whole portfolio',
      'Automated rent invoicing and arrears tracking',
      'Maintenance requests routed straight to the right contractor',
      'Owner-ready financial reports, generated automatically',
    ],
  },
  {
    id: 'landlords',
    icon: Home,
    title: 'Landlords',
    tone: 'tenant',
    summary: 'Whether you own one building or ten, know exactly what is owed, what is paid, and what needs your attention.',
    points: [
      'A tenant portal that cuts down phone calls and follow-ups',
      'Rent collected via M-Pesa, reconciled automatically',
      'Deposit tracking and move-out settlement handled correctly',
      'One place to see income and expenses across every unit',
    ],
  },
  {
    id: 'retail',
    icon: Store,
    title: 'Retail Shops',
    tone: 'primary',
    summary: 'A point of sale that keeps working when the internet does not, backed by inventory that stays accurate.',
    points: [
      'Fast checkout with cash, M-Pesa and split payment support',
      'Stock levels that update the moment a sale happens',
      'Customer accounts and credit tracking built in',
      'Sales reports without waiting on a manual stock count',
    ],
  },
  {
    id: 'wholesale',
    icon: Warehouse,
    title: 'Wholesale Businesses',
    tone: 'accountant',
    summary: 'Manage bulk pricing, supplier relationships and stock movement across branches without losing track of margins.',
    points: [
      'Tiered and bulk pricing built into the same POS',
      'Purchase orders and supplier tracking in one workflow',
      'Multi-branch stock visibility, in real time',
      'Accounting that reflects true cost of goods automatically',
    ],
  },
  {
    id: 'water-companies',
    icon: Droplet,
    title: 'Water Refill Shops',
    tone: 'info',
    summary: 'Sell water by the litre from your tank, and let the system track what\u2019s left — automatically, every sale.',
    points: [
      'Sell any size — 1 litre, 20 litres, whatever your customers bring',
      'Your tank\u2019s stock updates itself every time someone buys, no manual counting',
      'Know exactly how much water is left before you run dry',
      'Set a reorder level, and if your supplier is also on Jirani OS, restocking happens automatically — no phone call needed',
      'Handles cash and M-Pesa at the till, just like any other product',
    ],
  },
  {
    id: 'service-businesses',
    icon: Wrench,
    title: 'Service Businesses',
    tone: 'contractor',
    summary: 'From salons to repair shops, track jobs from request to completion, with staff commissions calculated automatically.',
    points: [
      'Job tracking from booking through to completion',
      'Staff assignment and automatic commission calculation',
      'Service history tied to each customer',
      'Billing that handles both products and services together',
    ],
  },
  {
    id: 'manufacturers',
    icon: Factory,
    title: 'Manufacturers',
    tone: 'warning',
    summary: 'Bill-of-materials driven production, so your finished-goods costing reflects what actually went into making them.',
    points: [
      'Recipes and bill-of-materials for accurate production costing',
      'Raw material stock consumed automatically on production',
      'Finished goods flow straight into sellable inventory',
      'Full traceability from raw material to final sale',
    ],
  },
  {
    id: 'restaurants',
    icon: UtensilsCrossed,
    title: 'Restaurants',
    tone: 'caretaker',
    summary: 'Future-ready through the same inventory and recipe engine used for production — built for when you are ready.',
    points: [
      'Recipe-based costing for every dish on the menu',
      'Ingredient stock consumed automatically per order',
      'One system for the till, the kitchen and the books',
      'Grows with you from a single outlet to multiple branches',
    ],
  },
  {
    id: 'growing-enterprises',
    icon: TrendingUp,
    title: 'Growing Enterprises',
    tone: 'success',
    summary: 'Built from day one to scale — the same system that runs a single shop runs a multi-branch operation without a rebuild.',
    points: [
      'Role-based permissions that scale with your headcount',
      'Multi-branch reporting, consolidated or broken out',
      'One accounting engine across every location',
      'Add capabilities as you grow, without switching systems',
    ],
  },
];
