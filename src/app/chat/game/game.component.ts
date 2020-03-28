import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';
import { HttpResponse } from '@angular/common/http';
import { GameState, Row } from '../../model/game-state.model';
import { RxStompService } from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  socket$: any;

  demoCards: Row[];

  constructor(private gameService: GameService, private rxStompService: RxStompService) { }

  startGame() {
    this.gameService.startGame().subscribe((response: HttpResponse<GameState>) => this.demoCards = response.body.pyramid);
  }

  makeMove() {
    this.rxStompService.publish({ destination: '/app/move', body: JSON.stringify({}) });
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
