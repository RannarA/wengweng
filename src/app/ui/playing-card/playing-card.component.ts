import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { PlayingCard } from './playing-card.model';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayingCardComponent implements OnInit {
  @Input() card: PlayingCard;

  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // hacky solution for now
  getTurnedClass(): string {
    return this.card.turned ? `${this.card.suit} ${this.card.rank}` : '';
  }

  select() {
    this.selected.emit();
  }
}
