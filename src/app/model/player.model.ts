import { PlayingCard } from '../ui/playing-card/playing-card.model';

export interface Player {
  name: string;
  cards: PlayingCard[];
}
