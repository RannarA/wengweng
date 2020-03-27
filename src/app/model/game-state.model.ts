import { PlayingCard } from '../ui/playing-card/playing-card.model';

export interface GameState {
  pyramid: Row[];
}

export interface Row {
  cards: PlayingCard[];
}
