import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'more-replies',
  templateUrl: './more-replies.component.html',
  styleUrls: ['./more-replies.component.scss']
})
export class MoreRepliesComponent implements OnInit {

  @Input()
  numOfHiddenReplies : number;
  
  constructor() { }

  ngOnInit() {
  }

}
