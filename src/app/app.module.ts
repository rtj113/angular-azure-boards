import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AzureBoardsComponent } from './core/azure-boards/azure-boards.component';
import { BoardDetailComponent } from './core/board-detail/board-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AzureBoardsComponent,
    BoardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
