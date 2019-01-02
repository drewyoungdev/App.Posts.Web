import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comment-vote-buttons',
  templateUrl: './vote-buttons.component.html',
  styleUrls: ['./vote-buttons.component.scss']
})
export class VoteButtonsComponent implements OnInit {

  @Input()
  depth : number;
  
  constructor() { }

  ngOnInit() {
  }

}
