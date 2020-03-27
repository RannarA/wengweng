import { Component } from '@angular/core';
import { Rank, Side, Suit } from '../../ui/playing-card/playing-card.model';
import { GameService } from '../../service/game.service';
import { HttpResponse } from '@angular/common/http';
import { GameState } from '../../model/game-state.model';

declare const Deck: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  demoCard = {
    color: Suit.Clubs,
    rank: Rank.Ace,
    side: Side.Front
  };

  constructor(private gameService: GameService) { }

  startGame() {
    this.gameService.startGame().subscribe((response: HttpResponse<GameState>) => console.log(response.body));
  }

}
