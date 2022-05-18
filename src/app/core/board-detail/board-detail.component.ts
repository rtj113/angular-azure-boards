import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BoardService } from 'src/app/board.service';
import { Boards } from '../modules/boards';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {
  board: Boards | undefined;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBoard();
  }

  getBoard(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.boardService.getBoard(id)
    .subscribe(board => this.board = board);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   if (this.board) {
  //     this.boardService.updateBoard(this.board)
  //     .subscribe(() => this.goBack());
  //   }
  // }
}
