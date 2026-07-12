export interface NavLink {
  label: string;
  to: string;
}

export const primaryNav: NavLink[] = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Features', to: '/features' },
  { label: 'Industries', to: '/industries' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
];

export const footerNav = {
  product: [
    { label: 'Solutions', to: '/solutions' },
    { label: 'Features', to: '/features' },
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
    { label: 'FAQ', to: '/faq' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Security', to: '/security' },
    { label: 'Delete Account', to: '/delete-account' },
  ],
};
