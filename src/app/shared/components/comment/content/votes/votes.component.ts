import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comment-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  
  @Input()
  depth : number;

  constructor() { }

  ngOnInit() {
  }

}
