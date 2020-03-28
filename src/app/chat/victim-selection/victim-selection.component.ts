import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PlayingCard } from '../../ui/playing-card/playing-card.model';

@Component({
  selector: 'app-victim-selection',
  templateUrl: './victim-selection.component.html',
  styleUrls: ['./victim-selection.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class VictimSelectionComponent implements OnChanges {
  @Input() playerNames: string[];
  @Input() selectedCards: PlayingCard[];

  @Output() victim = new EventEmitter<string>();
  @Output() finish = new EventEmitter();

  drinksToGive = 0;

  readonly colors = ['#f44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4',
    '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];

  readonly disabledColors = ['#ef9a9a', '#F48FB1', '#CE93D8', '#B39DDB', '#9FA8DA', '#90CAF9', '#81D4FA',
    '#80DEEA', '#80CBC4', '#A5D6A7', '#C5E1A5', '#E6EE9C', '#FFF59D', '#FFE082', '#FFCC80', '#FFAB91'];

  constructor() { }

  getColor(index: number) {
    if (!this.drinksToGive) {
      return this.disabledColors[index];
    }
    return this.colors[index];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.drinksToGive = changes?.selectedCards?.currentValue?.length ?? 0;
  }

  select(name: string) {
    this.drinksToGive--;
    this.victim.emit(name);
  }

}
