import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../../model/player.model';

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerHandComponent {
  @Input() player: Player;

  @Output() cardSelected = new EventEmitter<number>();

  constructor() { }

  selectCard(index: number) {
    this.cardSelected.emit(index);
  }

}
