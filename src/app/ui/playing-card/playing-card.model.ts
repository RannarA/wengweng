export interface PlayingCard {
  id: number;
  suit: Suit;
  rank: Rank;
  side: Side;
}

export enum Suit {
  Clubs = 'clubs',
  Diamonds = 'diamonds',
  Hearts = 'hearts',
  Spades = 'spades'
}

export enum Rank {
  Ace = 'rank1',
  Two = 'rank2',
  Three = 'rank3',
  Four = 'rank4',
  Five = 'rank5',
  Six = 'rank6',
  Seven = 'rank7',
  Eight = 'rank8',
  Nine = 'rank9',
  Ten = 'rank10',
  Jack = 'rank11',
  Queen = 'rank12',
  King = 'rank13'
}

export enum Side {
  Front = 'face',
  Back = 'back'
}
