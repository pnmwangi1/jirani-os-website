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
  { src: '/screenshots/account-statement.jpg', alt: 'Customer account statement showing sales, payments and running balance', caption: 'Account statement' },
  { src: '/screenshots/staff-commissions.jpg', alt: 'Staff commissions screen showing casual workers and commission rules per service', caption: 'Staff commissions' },
  { src: '/screenshots/pos.jpg', alt: 'Point of sale screen with products and services', caption: 'Point of sale' },
  { src: '/screenshots/customer-dashboard.jpg', alt: 'Customer dashboard showing orders and purchase history', caption: 'Customer orders' },
  { src: '/screenshots/screen-04.jpg', alt: 'Service provider dashboard showing branches, staff and revenue', caption: 'Multi-branch dashboard' },
  { src: '/screenshots/screen-07.jpg', alt: 'Customer profile showing balance owed, credit limit, aging buckets and purchase history', caption: 'Customer accounts & credit' },
];
