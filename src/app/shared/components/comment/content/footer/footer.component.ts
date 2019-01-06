import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comment-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output()
  replyClickedEvent = new EventEmitter<boolean>();

  showReply : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  replyOnClick() {
    this.showReply = !this.showReply;
    this.replyClickedEvent.emit(this.showReply);
  }
}
