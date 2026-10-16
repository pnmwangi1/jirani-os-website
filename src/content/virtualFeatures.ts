import { Car, KeyRound, Users, Megaphone, Search, MessageCircle, Wrench, UserCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface VirtualFeature {
  key: string;
  icon: LucideIcon;
  title: string;
  outcome: string;
  points: string[];
}

// Mirrors the feature tour inside the app (components/virtual/VirtualBenefits.jsx). Residents is the website word for the
// people who live at a property; keep this list in step with the app when a feature is added.
export const virtualFeatures: VirtualFeature[] = [
  { key: 'parking', icon: Car, title: 'Parking prompts',
    outcome: 'Someone blocking your car? Send a prompt to their plate.',
    points: ['Residents register their vehicles once', 'Three reminders, two minutes apart', 'Unanswered prompts go to security, then management'] },
  { key: 'gate', icon: KeyRound, title: 'Gate passes and expected guests',
    outcome: 'Security knows who is coming and what is leaving, before they reach the gate.',
    points: ['Residents invite guests with a name and time', 'Gate passes for moving items out, approved by management', 'Security logs arrival and departure'] },
  { key: 'team', icon: Users, title: 'Your property team',
    outcome: 'Give your manager, caretaker and security guard their own tools.',
    points: ['Invite by phone number', 'Managers run the community day to day', 'Caretakers handle repairs, security handles the gate'] },
  { key: 'notices', icon: Megaphone, title: 'Notices that reach everyone',
    outcome: 'Water cut tomorrow? Post once and every resident is notified.',
    points: ['Set how long a notice stays up', 'Pin the important ones', 'See how many residents have read it'] },
  { key: 'lostfound', icon: Search, title: 'Lost and found with proof',
    outcome: 'Found items are posted with a photo. Owners prove it is theirs first.',
    points: ['Security or caretaker posts with photos', 'Claims are checked by staff', 'Photos are deleted once the item is claimed'] },
  { key: 'chat', icon: MessageCircle, title: 'Property chat',
    outcome: 'One place for the building instead of scattered WhatsApp groups.',
    points: ['Optional group chat for the whole property', 'Private feedback thread with management', 'Reported content is reviewed'] },
  { key: 'maintenance', icon: Wrench, title: 'Repairs with photos and quotes',
    outcome: 'Residents report issues with photos. Get quotes from local businesses in the app.',
    points: ['Track every issue from open to done', 'Request a quote from Jirani businesses', 'Timeline of who did what'] },
  { key: 'residents', icon: UserCheck, title: 'Verified residents and room-mates',
    outcome: 'Only people who are actually at the property can join.',
    points: ['Invite by phone, resident accepts at the property', 'Location is checked when joining', 'Share a unit, see who lives where'] },
];

export const virtualSteps = [
  { n: '1', title: 'Create your property', body: 'Add its name and drop a pin on its location.' },
  { n: '2', title: 'Pay monthly with M-Pesa', body: 'One price per property. Residents and staff never pay.' },
  { n: '3', title: 'Invite your people', body: 'Add your team and residents by phone number. They join at the property.' },
];
