import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comment-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  showReply : boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  replyCancelled($event) {
    // show reply is false if event returns true (meaning reply was cancelled)
    this.showReply = !$event;
  }
  
  replySubmitted($event) {
    // show reply is false if event returns true (meaning reply was submitted)
    this.showReply = !$event;
  }
}
