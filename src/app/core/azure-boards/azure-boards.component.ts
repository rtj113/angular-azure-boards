import { Component, OnInit } from '@angular/core';

import { BoardService } from 'src/app/board.service';
import { MessageService } from 'src/app/message.service';
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
  
  constructor(private boardService: BoardService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getBoards();
  }

  getBoards(): void {
    this.boardService.getBoards()
      .subscribe(boards => this.boards = boards);
  }

  onSelect(board: Boards): void {
    this.selectedBoard = board;
    this.messageService.add(`AzureBoardsComponent: Selected board id=${board.id}`)
  }

}
