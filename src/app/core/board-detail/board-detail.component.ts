import { Component, OnInit, Input } from '@angular/core';
import { Boards } from '../modules/boards';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {

  @Input() board?: Boards;

  constructor() { }

  ngOnInit(): void {
  }

}
