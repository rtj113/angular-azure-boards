import { Component, OnInit, Input } from '@angular/core';
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

  @Input() board?: Boards;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBoard();
  }

  getBoard(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.boardService.getBoard(id)
    .subscribe(board => this.board = board);
  }

  goBack(): void {
    this.location.back();
  }

}
