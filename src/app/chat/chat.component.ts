import { Component, OnDestroy, OnInit } from '@angular/core';
import { Player } from '../model/player.model';
import { BehaviorSubject, merge, Subscription } from 'rxjs';
import { GameState } from '../model/game-state.model';
import { GameService } from '../service/game.service';
import { GameSocketService } from '../service/game-socket.service';
import { tap } from 'rxjs/operators';
import { GameStateService } from '../service/game-state.service';
import { Move } from '../model/move.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  data$$: Subscription;

  constructor(private gameService: GameService,
              private gameSocketService: GameSocketService,
              private gameStateService: GameStateService) {
  }

  get gameState(): BehaviorSubject<GameState> {
    return this.gameStateService.getState();
  }

  get player(): BehaviorSubject<Player> {
    return this.gameStateService.getPlayer();
  }

  startGame() {
    this.gameSocketService.start();
  }

  makeMove(move: Move) {
    this.gameSocketService.makeMove(move);
  }

  getGameState() {
    this.gameSocketService.getGameState();
  }

  ngOnInit(): void {
    this.registerWatchers();
    this.getGameState();

    if (!this.gameStateService.getPlayer().value && sessionStorage.getItem('name')) {
      this.gameSocketService.getPlayerByName(sessionStorage.getItem('name'));
    }
  }

  ngOnDestroy() {
    this.data$$.unsubscribe();
  }

  private registerWatchers() {
    const gameState$ = this.gameSocketService.watchGameState().pipe(
      tap(message => {
        console.log('gameState', JSON.parse(message.body));
        if (!this.gameStateService.getState().value) {
          this.gameStateService.setState(JSON.parse(message.body));
        }
      })
    );

    const start$ = this.gameSocketService.watchStart().pipe(
      tap(message => {
        console.log('gameState', JSON.parse(message.body));
        this.gameStateService.setState(JSON.parse(message.body));
        this.gameSocketService.getPlayerByName(sessionStorage.getItem('name'));
        this.gameSocketService.startRound();
      })
    );

    const player$ = this.gameSocketService.watchPlayerByName().pipe(
      tap(message => {
        console.log('player', JSON.parse(message.body));
        this.gameStateService.setPlayer(JSON.parse(message.body));
      })
    );

    const move$ = this.gameSocketService.watchMove().pipe(
      tap(message => {
        console.log('move', JSON.parse(message.body));
        this.gameStateService.setState(JSON.parse(message.body));
        if (!this.gameStateService.getState().value.currentRound) {
          this.gameSocketService.startRound();
        }
      })
    );

    const round$ = this.gameSocketService.watchRoundStart().pipe(
      tap(message => {
        console.log('round start', JSON.parse(message.body));
        this.gameStateService.setState(JSON.parse(message.body));
      })
    );

    this.data$$ = merge(
      gameState$,
      start$,
      player$,
      move$,
      round$
    ).subscribe();
  }
}
