import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/board.service';
import { Boards } from '../modules/boards';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  boards: Boards[] = [];
  selectedBoard?: Boards;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.getBoards();
  }

  getBoards(): void {
    this.boardService.getBoards()
      .subscribe(boards => this.boards = boards.slice(1,5));
  }

}
