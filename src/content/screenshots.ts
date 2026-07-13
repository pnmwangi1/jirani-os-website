export interface AppScreenshot {
  src: string;
  alt: string;
  caption: string;
}

// Item: real screenshots from the actual Jirani OS app. Captions are
// accurate to what's genuinely shown in each - confirmed directly
// rather than guessed at.
export const appScreenshots: AppScreenshot[] = [
  { src: '/screenshots/login.jpg', alt: 'Jirani OS login screen', caption: 'One login for every role' },
  { src: '/screenshots/tenant-dashboard.jpg', alt: 'Tenant dashboard showing rent, deposit and maintenance', caption: 'Tenant dashboard' },
  { src: '/screenshots/marketplace.jpg', alt: 'Property marketplace listing with filters', caption: 'Property marketplace' },
  { src: '/screenshots/pos.jpg', alt: 'Point of sale screen with products and services', caption: 'Point of sale' },
  { src: '/screenshots/customer-dashboard.jpg', alt: 'Customer dashboard showing orders and purchase history', caption: 'Customer orders' },
];
