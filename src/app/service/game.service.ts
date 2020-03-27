import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameState } from '../model/game-state.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private resourceUrl = '/api/game';

  constructor(private http: HttpClient) {
  }

  startGame(): Observable<HttpResponse<GameState>> {
    return this.http.get<GameState>(this.resourceUrl + '/start', {observe: 'response'});
  }
}
