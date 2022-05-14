import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzureBoardsComponent } from './core/azure-boards/azure-boards.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'boards', component: AzureBoardsComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
