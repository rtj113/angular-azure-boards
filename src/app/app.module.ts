import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AzureBoardsComponent } from './core/azure-boards/azure-boards.component';
import { BoardDetailComponent } from './core/board-detail/board-detail.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AzureBoardsComponent,
    BoardDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
