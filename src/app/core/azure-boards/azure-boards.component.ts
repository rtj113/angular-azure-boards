import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/board.service';
import { Boards } from '../modules/boards';

@Component({
  selector: 'app-azure-boards',
  templateUrl: './azure-boards.component.html',
  styleUrls: ['./azure-boards.component.css']
})
export class AzureBoardsComponent implements OnInit {
  azure_board = 'My First Project';

  boards: Boards[] = [];
  selectedBoard?: Boards;
  
  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.getBoards();
  }

  getBoards(): void {
    this.boardService.getBoards()
      .subscribe(boards => this.boards = boards);
  }

  // onSelect(board: Boards): void {
  //   this.selectedBoard = board;
  // }

}
