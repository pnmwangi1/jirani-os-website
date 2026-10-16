export interface NavLink {
  label: string;
  to: string;
}

export const primaryNav: NavLink[] = [
  { label: 'Features', to: '/features' },
  { label: 'Shops', to: '/shops' },
  { label: 'Riders', to: '/riders' },
  { label: 'Properties', to: '/properties' },
  { label: 'Delivery', to: '/delivery' },
  { label: 'Industries', to: '/industries' },
  { label: 'Learn', to: '/learn' },
  { label: 'Pricing', to: '/pricing' },
];

export const footerNav = {
  product: [
    { label: 'Solutions', to: '/solutions' },
    { label: 'Features', to: '/features' },
    { label: 'Delivery & Logistics', to: '/delivery' },
    { label: 'Shops near you', to: '/shops' },
    { label: 'Riders', to: '/riders' },
    { label: 'Virtual properties', to: '/properties' },
    { label: 'Industries', to: '/industries' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Security', to: '/security' },
  ],
  company: [
    { label: 'About', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ],
  resources: [
    { label: 'Learn', to: '/learn' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Security', to: '/security' },
    { label: 'Delete Account', to: '/delete-account' },
  ],
};
