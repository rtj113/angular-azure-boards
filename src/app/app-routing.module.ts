import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzureBoardsComponent } from './core/azure-boards/azure-boards.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { BoardDetailComponent } from './core/board-detail/board-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'boards', component: AzureBoardsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: BoardDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
