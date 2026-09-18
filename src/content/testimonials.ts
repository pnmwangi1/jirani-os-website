export interface Testimonial {
  scenario: string; // a short, generic label for the kind of business - not a name or "role at X"
  quote: string;
}

// Item: Jirani OS does not yet have published customer testimonials.
// These are written as short scenario narratives describing outcomes
// the product is designed to deliver - deliberately not phrased as a
// quote attributed to a named person or a specific business, since
// that would misrepresent them as real customer feedback. The section
// they render in carries its own explicit disclaimer as well. Replace
// with real testimonials, properly attributed, once available.
export const testimonials: Testimonial[] = [
  {
    scenario: 'Retail shop running delivery through Jirani OS',
    quote:
      'Orders used to come in over WhatsApp, with a rider arranged by phone call every single time. Now an order placed through the shop gets priced and dispatched before anyone has to pick up a phone.',
  },
  {
    scenario: 'Wholesale retail shop',
    quote:
      'The till, the stock count and the books used to disagree with each other constantly. They stop disagreeing once they are the same system.',
  },
  {
    scenario: 'Water refill business',
    quote:
      'Manual invoicing from meter or tank readings used to take a week to catch up on. With one connected system, it happens the same day the readings are captured.',
  },
];
