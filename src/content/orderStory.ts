// The one story the whole site keeps coming back to. Every line here matches how the app really behaves.
export interface OrderStep {
  title: string;
  body: string;
  who: 'wanjiru' | 'baraka' | 'otieno';
  alt: string;
}

export const orderSteps: OrderStep[] = [
  {
    who: 'wanjiru',
    title: 'Wanjiru orders',
    body: 'She picks a shop that can reach her, adds her items and checks out. The delivery price is shown before she orders, and it stays fixed.',
    alt: 'Wanjiru places an order on her phone',
  },
  {
    who: 'baraka',
    title: 'Baraka gets it on his phone',
    body: 'The order reaches his phone, not a pile of WhatsApp messages. He confirms it and starts packing.',
    alt: 'Baraka sees a new order for KES 1,450',
  },
  {
    who: 'otieno',
    title: 'Otieno is offered the job',
    body: 'The order is offered to Baraka’s riders first, one at a time. Otieno sees exactly what he will be paid before he says yes.',
    alt: 'Otieno is offered a delivery for KES 250',
  },
  {
    who: 'otieno',
    title: 'Otieno collects it',
    body: 'He picks the parcel up at the shop and marks it collected. Wanjiru’s order status moves on.',
    alt: 'Otieno collects the parcel at the shop',
  },
  {
    who: 'otieno',
    title: 'On the way',
    body: 'Wanjiru follows the order from Confirmed to Collected to Delivered, so she is not guessing or calling anyone.',
    alt: 'Otieno rides to Wanjiru with the parcel',
  },
  {
    who: 'wanjiru',
    title: 'Everyone is done',
    body: 'Wanjiru has her order. Baraka’s sale is recorded in his books. Otieno’s earnings update. Nobody made a phone call.',
    alt: 'Order delivered: Wanjiru has her order, Baraka’s sale is recorded and Otieno has earned KES 250',
  },
];
