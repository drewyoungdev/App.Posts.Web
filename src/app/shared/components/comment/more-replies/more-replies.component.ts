import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'more-replies',
  templateUrl: './more-replies.component.html',
  styleUrls: ['./more-replies.component.scss']
})
export class MoreRepliesComponent implements OnInit {

  @Input()
  depth : number;

  @Input()
  numOfHiddenReplies : number;

  @Input()
  mustContinueInNewThread : boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
