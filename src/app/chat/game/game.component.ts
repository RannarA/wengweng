import { Component, OnDestroy, OnInit } from '@angular/core';
import { Rank, Side, Suit } from '../../ui/playing-card/playing-card.model';
import { GameService } from '../../service/game.service';
import { HttpResponse } from '@angular/common/http';
import { GameState } from '../../model/game-state.model';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Player } from '../../model/player.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  socket$: any;

  readonly player: Player = {
    name: 'Mati',
    cards: [
      {
        id: 1,
        suit: Suit.Clubs,
        rank: Rank.Ace,
        side: Side.Front
      },
      {
        id: 2,
        suit: Suit.Diamonds,
        rank: Rank.King,
        side: Side.Front
      }
    ]
  };

  constructor(private gameService: GameService, private rxStompService: RxStompService) { }

  startGame() {
    this.gameService.startGame().subscribe((response: HttpResponse<GameState>) => console.log(response.body));
  }

  makeMove() {
    this.rxStompService.publish({ destination: '/app/move', body: JSON.stringify(this.player) });
    this.getGameState();
  }

  getGameState() {
    this.rxStompService.publish({ destination: '/app/state', body: 'game' });
  }

  ngOnInit(): void {
    this.rxStompService.watch('/game/state').subscribe((message) => {
      console.log('gameState', JSON.parse(message.body));
    });

    this.rxStompService.watch('/user/game/move').subscribe((message) => {
      console.log('move', JSON.parse(message.body));
    });
  }

  ngOnDestroy() {
    this.socket$.unsubscribe();
  }

}
