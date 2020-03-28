import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Row } from '../../model/game-state.model';

@Component({
  selector: 'app-card-pyramid',
  templateUrl: './card-pyramid.component.html',
  styleUrls: ['./card-pyramid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPyramidComponent implements OnInit {
  @Input() deck: Row[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.deck);
  }

}
