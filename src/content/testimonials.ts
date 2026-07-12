export interface Testimonial {
  quote: string;
  role: string; // deliberately a role/business type, not a fabricated named person or company
}

// Item: Jirani OS does not yet have published customer testimonials to
// draw from. Per the brief's own instruction, these are clearly marked
// as illustrative examples of the kind of outcome the product is
// designed to deliver — not attributed to real people or companies.
// Replace with real testimonials once available, and remove the
// disclaimer alongside them.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Before, rent tracking lived in a notebook and a phone full of M-Pesa messages. Now every unit, every invoice and every payment is in one place.',
    role: 'Illustrative example — Property Manager, 40-unit residential estate',
  },
  {
    quote:
      'Our till, our stock count and our books used to disagree with each other constantly. They do not anymore, because they are the same system.',
    role: 'Illustrative example — Owner, wholesale retail shop',
  },
  {
    quote:
      'Meter readings used to mean a week of manual invoicing. Now it happens the same day the readings are captured.',
    role: 'Illustrative example — Operations Lead, water utility provider',
  },
];
