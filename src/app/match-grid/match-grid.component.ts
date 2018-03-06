import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'match-grid',
  templateUrl: './match-grid.component.html',
  styleUrls: ['./match-grid.component.css']
})
export class MatchGridComponent implements OnInit {

  //Todo Assert type of model
  @Input() matches;
  constructor() { }

  ngOnInit() {
  }



}
