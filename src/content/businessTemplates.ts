import { Droplet, ShoppingBasket, Shirt, Hammer, Flame, Scissors, Printer, Pill, UtensilsCrossed } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface BusinessTemplate {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Phase 5 (explicit request): concise, specific "how does Jirani OS
 * help MY business" copy for the actual Service Provider business
 * setup-engine templates that exist in the product today — not
 * generic software-feature language. */
export const businessTemplates: BusinessTemplate[] = [
  {
    id: 'water-refill',
    icon: Droplet,
    title: 'Water Refill',
    description: 'Track water stock, sell by different quantities and keep every sale connected to your business records.',
  },
  {
    id: 'mini-mart',
    icon: ShoppingBasket,
    title: 'Mini Mart',
    description: 'Scan products from your phone, sell faster and keep stock and customer accounts in sync.',
  },
  {
    id: 'jersey-apparel',
    icon: Shirt,
    title: 'Jersey & Apparel Shop',
    description: 'Manage sizes and stock across items, and follow customer orders from sale to collection.',
  },
  {
    id: 'hardware',
    icon: Hammer,
    title: 'Hardware',
    description: 'Handle bulk and retail pricing from the same till, with stock that stays accurate as it moves.',
  },
  {
    id: 'gas-refill',
    icon: Flame,
    title: 'Gas Refill',
    description: 'Track cylinder stock and exchanges, and keep customer accounts and credit organised.',
  },
  {
    id: 'salon-barbershop',
    icon: Scissors,
    title: 'Salon & Barbershop',
    description: 'Sell services and products together while keeping customer history and staff activity organised.',
  },
  {
    id: 'printing',
    icon: Printer,
    title: 'Printing',
    description: 'Track jobs and materials as they are used, with billing that follows the work automatically.',
  },
  {
    id: 'pharmacy',
    icon: Pill,
    title: 'Pharmacy',
    description: 'Keep stock, sales and customer accounts connected, without a separate system to reconcile.',
  },
  {
    id: 'bar-restaurant',
    icon: UtensilsCrossed,
    title: 'Bar & Restaurant',
    description: 'Run tables, kitchen tickets and billing from one system, from order to payment.',
  },
];
