import { Injectable } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { IMessage } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import { Move } from '../model/move.model';

@Injectable({
  providedIn: 'root'
})
export class GameSocketService {
  constructor(private rxStompService: RxStompService) {}

  start() {
    this.rxStompService.publish({ destination: '/app/start' });
  }

  watchStart(): Observable<IMessage> {
    return this.rxStompService.watch('/user/game/start');
  }

  getPlayerByName(name: string) {
    this.rxStompService.publish({ destination: '/app/player', body: name });
  }

  watchPlayerByName(): Observable<IMessage> {
    return this.rxStompService.watch('/user/game/player');
  }

  getGameState() {
    this.rxStompService.publish({ destination: '/app/state', body: 'game' });
  }

  watchGameState(): Observable<IMessage> {
    return this.rxStompService.watch('/game/state');
  }

  makeMove(move: Move) {
    this.rxStompService.publish({ destination: '/app/move', body: JSON.stringify(move) });
  }

  watchMove(): Observable<IMessage> {
    return this.rxStompService.watch('/user/game/move');
  }

  startRound() {
    this.rxStompService.publish({ destination: '/app/round/start' });
  }

  watchRoundStart(): Observable<IMessage> {
    return this.rxStompService.watch('/game/round/start');
  }

}
