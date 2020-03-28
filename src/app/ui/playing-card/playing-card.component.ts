import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayingCard } from './playing-card.model';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayingCardComponent implements OnInit {
  @Input() card: PlayingCard;

  constructor() { }

  ngOnInit(): void {
  }

  // hacky solution for now
  getTurnedClass(): string {
    return this.card.turned ? `${this.card.suit} ${this.card.rank}` : '';
  }

  turn() {
    this.card.turned = !this.card.turned;
  }
}
