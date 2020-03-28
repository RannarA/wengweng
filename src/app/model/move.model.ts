import { Player } from './player.model';
import { PlayingCard } from '../ui/playing-card/playing-card.model';

export interface Move {
  player: Player;
  cards: PlayingCard[];
  victims: string[];
}
