import {  Input ,Component, OnInit } from '@angular/core';

@Component({
  selector: 'rankings-grid',
  templateUrl: './rankings-grid.component.html',
  styleUrls: ['./rankings-grid.component.css']
})
export class RankingsGridComponent implements OnInit {
  @Input() rankings;
  constructor() { }


  ngOnInit() {
  }

}
