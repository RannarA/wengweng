import { Injectable } from '@angular/core';
import { GameState } from '../model/game-state.model';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../model/player.model';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private gameState = new BehaviorSubject<GameState>(null);
  private player = new BehaviorSubject<Player>(null);

  setState(gameState: GameState) {
    this.gameState.next(gameState);
  }

  getState(): BehaviorSubject<GameState> {
    return this.gameState;
  }

  setPlayer(player: Player) {
    this.player.next(player);
  }

  getPlayer(): BehaviorSubject<Player> {
    return this.player;
  }
}
