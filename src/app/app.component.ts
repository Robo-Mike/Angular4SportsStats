import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  rankings = [];
  matches =[];
  ngOnInit() {
    //move to DI

    this.matches = [{team1Name:'England',team1Goals:1, team2Name:'Germany', team2Goals:0},{team1Name:'England',team1Goals:2, team2Name:'France', team2Goals:1}];
  };

  onMatchesClick(year:number,month:number, day:number){
    this.rankings = [];
    this.matches = [{team1Name:'Albania',team1Goals:1, team2Name:'Estonia', team2Goals:0},{team1Name:'Iceland',team1Goals:2, team2Name:'Greece', team2Goals:1}];
  }


    onRankingsClick(sport:string){
      this.matches = [];
      this.rankings = [{teamName:'England', points: 255},{teamName:'Germany', points:198},{teamName:'Cameroon', points:197} ];
    }
  title = 'Sports Statistics';
}
