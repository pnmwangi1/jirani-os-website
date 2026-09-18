import { Truck, Smartphone, Store, Warehouse, Droplet, Wrench, Factory, UtensilsCrossed, TrendingUp } from 'lucide-react';
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
    id: 'delivery-logistics',
    icon: Truck,
    title: 'Delivery & Logistics',
    tone: 'manager',
    summary: 'Every order placed through your online shop gets priced, routed and dispatched to a rider — automatically, without a single phone call.',
    points: [
      'Your own delivery fleet, or riders on the Jirani OS network',
      'Free delivery above an order value, within a distance, or always — your rule',
      'Route and fuel cost calculated automatically before a rider leaves',
      'Live delivery tracking, from dispatch to doorstep',
    ],
  },
  {
    id: 'repair-services',
    icon: Smartphone,
    title: 'Device & Phone Repair',
    tone: 'tenant',
    summary: 'Track every device from drop-off to collection — model, fault, part cost and status — so nothing gets lost and nothing gets forgotten.',
    points: [
      'Every device logged with model, IMEI and reported fault',
      'Job status visible from intake to collection',
      'Parts and labour costed and billed together',
      'Customers notified the moment their device is ready',
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
      'Customers order from your shop and get it delivered — no phone call needed on their end either',
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
