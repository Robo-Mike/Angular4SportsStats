import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MatchGridComponent } from './match-grid/match-grid.component';
import { RankingsGridComponent } from './rankings-grid/rankings-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchGridComponent,
    MatchGridComponent,
    MatchGridComponent,
    RankingsGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
