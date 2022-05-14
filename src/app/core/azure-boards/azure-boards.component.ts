import { Component, OnInit } from '@angular/core';
import { Boards } from '../modules/boards';

@Component({
  selector: 'app-azure-boards',
  templateUrl: './azure-boards.component.html',
  styleUrls: ['./azure-boards.component.css']
})
export class AzureBoardsComponent implements OnInit {

  azure_board = 'My First Project';

  boards: Boards = {
    id: 1,
    WorkItemType: 'Test 1',
    title: 'Test 1',
    AssignedTo: 'Mudvayne',
    State: 'Paused'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
