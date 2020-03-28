import { PlayingCard } from '../ui/playing-card/playing-card.model';

export interface GameState {
  pyramid: Row[];
  playerNames: string[];
  currentRound: Round;
}

export interface Row {
  cards: PlayingCard[];
}

export interface Round {
  currentCard: PlayingCard;
  finishedPlayers: string[];
}
