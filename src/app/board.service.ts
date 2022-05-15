import { Injectable } from '@angular/core';
import { catchError, Observable, of, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from 'src/app/message.service';
import { Boards } from './core/modules/boards';
import { BOARDS } from './mock-boards';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardsURL = 'api/boards';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getBoards(): Observable<Boards[]> {
    // const boards = of(BOARDS);
    this.messageService.add('BoardService: fetched boards');
    return this.http.get<Boards[]>(this.boardsURL)
      .pipe(
        catchError(this.handleError<Boards[]>('getBoards', []))
      )
  }

  getBoard(id: number): Observable<Boards>{
    const url = `${this.boardsURL}/${id}`;

    return this.http.get<Boards>(url).pipe(
      tap(_ => this.log(`fetched board id=${id}`)),
      catchError(this.handleError<Boards>(`getBoard id=${id}`))
    );
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
