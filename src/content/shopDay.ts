// "A day with Baraka": nine steps, matched to the nine states of ShopDayScene.
export interface DayStep { title: string; body: string }
export const shopDaySteps: DayStep[] = [
  { title: 'Open the till', body: 'Baraka opens the till with a cash float. Every sale from now on belongs to this shift.' },
  { title: 'Make a sale', body: 'He rings it up. The customer pays with M-Pesa, cash or from their account, and gets a receipt.' },
  { title: 'Stock updates itself', body: 'The shelf count drops as things sell, with nothing to write down.' },
  { title: 'A low-stock alert', body: 'When something runs low, Jirani tells him before it runs out.' },
  { title: 'Sell on credit', body: 'A regular takes goods on credit. His account shows what he owes, and for how long.' },
  { title: 'Stock arrives', body: 'A supplier delivery is recorded as a purchase, and the shelf is full again.' },
  { title: 'Staff earn commission', body: 'Each seller’s commission is worked out from the sales they made.' },
  { title: 'Close the till', body: 'He counts the cash, and Jirani shows whether the till balanced.' },
  { title: 'See the profit', body: 'Profit and Loss, cash and M-Pesa are ready, from the same sales and stock.' },
];
