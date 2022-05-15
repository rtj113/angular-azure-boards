import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Boards } from './core/modules/boards';
import { BOARDS } from './mock-boards';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardsURL = 'api/boards';

  constructor(private http: HttpClient) { }

  getBoards(): Observable<Boards[]> {
    // const boards = of(BOARDS);
    return this.http.get<Boards[]>(this.boardsURL);
  }

  getBoard(id: number): Observable<Boards>{
    const board = BOARDS.find(h => h.id ===id)!;
    return of(board);
  }
}
