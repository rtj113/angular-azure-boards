import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from 'src/app/message.service';
import { Boards } from './core/modules/boards';
import { BOARDS } from './mock-boards';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardsURL = 'api/boards';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getBoards(): Observable<Boards[]> {
    // const boards = of(BOARDS);
    this.messageService.add('BoardService: fetched boards');
    return this.http.get<Boards[]>(this.boardsURL)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Boards[]>('getBoards', []))
      );
  }

  getBoard(id: number): Observable<Boards>{
    const url = `${this.boardsURL}/${id}`;

    return this.http.get<Boards>(url).pipe(
      tap(_ => this.log(`fetched board id=${id}`)),
      catchError(this.handleError<Boards>(`getBoard id=${id}`))
    );
  }

  updateBoard(board: Boards) {
    throw new Error('Method not implemented.');
  }

  addBoard(board: Boards): Observable<Boards>{
    return this.http.post<Boards>(this.boardsURL, board, this.httpOptions).pipe(
      tap((newBoard: Boards) => this.log(`added board w/ id=${newBoard.id}`)),
      catchError(this.handleError<Boards>('addBoard'))
    );
  }

  deleteBoard(id: number): Observable<Boards> {
    const url = `${this.boardsURL}/${id}`;

    return this.http.delete<Boards>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted board id=${id}`)),
      catchError(this.handleError<Boards>('deleteBoard'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

   /** Log a BoardService message with the MessageService */
   private log(message: string) {
    this.messageService.add(`BoardService: ${message}`);
  }
}
