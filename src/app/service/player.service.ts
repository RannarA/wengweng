import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Player } from '../model/player.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private resourceUrl = '/api/player';

  constructor(private http: HttpClient) {
  }

  save(player: Player): Observable<HttpResponse<Player>> {
    return this.http.post<Player>(this.resourceUrl, player, { observe: 'response' });
  }
}
