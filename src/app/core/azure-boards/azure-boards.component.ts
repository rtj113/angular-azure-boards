import { Component, OnInit } from '@angular/core';
import { BOARDS } from 'src/app/mock-boards';
import { Boards } from '../modules/boards';

@Component({
  selector: 'app-azure-boards',
  templateUrl: './azure-boards.component.html',
  styleUrls: ['./azure-boards.component.css']
})
export class AzureBoardsComponent implements OnInit {

  azure_board = 'My First Project';

  boards = BOARDS;

  constructor() { }

  ngOnInit(): void {
  }

}
