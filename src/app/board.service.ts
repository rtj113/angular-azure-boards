import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Boards } from './core/modules/boards';
import { BOARDS } from './mock-boards';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  getBoards(): Observable<Boards[]> {
    const boards = of(BOARDS);
    return boards;
  }
}
